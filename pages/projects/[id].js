import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Button from "../../components/Button";
import yourData from "../../data/portfolio.json";
import Cursor from "../../components/Cursor";
import Socials from "../../components/Socials";
import Head from "next/head";

const ProjectPage = ({ project }) => {
    const { theme } = useTheme();
    const router = useRouter();
    const { id } = router.query;
    const data = yourData;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [projectName, setProjectName] = useState('');

    useEffect(() => {
        if (project) {
            setProjectName(project.title);
            console.log(`Set projectName to: ${project.title}`);
        }
    }, [project]);

    if (!project) {
        return <p>Loading...</p>;
    }

    // Handling Scroll
    const handleWorkScroll = () => {
        router.push("/#opportunities");
    };

    const handleAboutScroll = () => {
        router.push("/#about");
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("PRESSED SUBMIT");
        console.log(`Sending email: ${email} for project: ${projectName}`);

        try {
            const response = await fetch("https://us-central1-phrasal-faculty-429817-m5.cloudfunctions.net/EMAIL-TO-SHEETS", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: userName, email, projectName }),
            });

            const result = await response.json();
            console.log("Response received:", result);

            if (result.status === "success") {
                setMessage(`Thank you! We have received your email: ${email}`);
                setEmail('');  // Clear the input field
                setUserName('');  // Clear the input field
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className={`relative ${data.showCursor && "cursor-none"}`}>
            {data.showCursor && <Cursor />}
            <Head>
                <title>{data.name}</title>
            </Head>

            <div className="gradient-circle"></div>
            <div className="gradient-circle-bottom"></div>

            <div className="container mx-auto mb-10">
                <div>
                    <Header
                        handleWorkScroll={handleWorkScroll}
                        handleAboutScroll={handleAboutScroll}
                    />

                    <div className="flex justify-center mt-5">
                        <Socials className="mt-2 laptop:mt-5" />
                    </div>
                    {project.titleImage ? (
                        <div
                            className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
                            style={{ height: "50px", width: "200px" }}
                        >
                            <img
                                alt={project.title}
                                className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                                src={project.titleImage}
                                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                            />
                        </div>
                    ) : (
                        <h1 className="mt-5 text-3xl font-medium">
                            {project.title ? project.title : "Project Name"}
                        </h1>
                    )}
                    <h2
                        className="text-xl opacity-50"
                        dangerouslySetInnerHTML={{
                            __html: project.description ? project.description.replace(/\n/g, '<br />') : "Description"
                        }}
                    />
                    <div className="flex justify-center mt-5">
                        {project.imageSrc && <img src={project.imageSrc} alt={project.title} />}
                    </div>

                    {project.videoText && (
                        <h2
                            className="flex justify-center text-xl opacity-50"
                            dangerouslySetInnerHTML={{
                                __html: project.videoText ? project.videoText.replace(/\n/g, '<br />') : "Description"
                            }}
                        />
                    )}
                    <div className="flex justify-center mt-5">
                        {project.videoSrc && <iframe src={project.videoSrc} title="Project Video" width="600" height="400" />}
                    </div>

                    {project.projectVideoText && (
                        <h2
                            className="flex justify-center text-xl opacity-50"
                            dangerouslySetInnerHTML={{
                                __html: project.projectVideoText ? project.projectVideoText.replace(/\n/g, '<br />') : "Description"
                            }}
                        />
                    )}
                    <div className="flex justify-center mt-5">
                        {project.projectVideoSrc && <iframe src={project.projectVideoSrc} title="Project Video" width="600" height="400" />}
                    </div>
                    {project.pageBottomText && (
                        <h2
                            className="text-xl opacity-50"
                            dangerouslySetInnerHTML={{
                                __html: project.pageBottomText ? project.pageBottomText.replace(/\n/g, '<br />') : "Description"
                            }}
                        />
                    )}
                    <div className="flex justify-center mt-5">
                        <Button classes={`${theme === "dark" ? "bg-slate-900" : "bg-slate-100"}`} onClick={() => window.open(project.url)}>
                            {project.buttonText}
                        </Button>
                    </div>

                    <div className="flex justify-center mt-5">
                        <h2>Or Submit your name and email for more information</h2>
                    </div>

                    {/* Email Submission Form */}
                    <div className="flex justify-center mt-10">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <input
                                type="string"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your name"
                                className="p-2 border rounded mb-2"
                                required
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="p-2 border rounded mb-2"
                                required
                            />
                            <Button type="submit" classes={`${theme === "dark" ? "bg-slate-900" : "bg-slate-100"}`}>
                                Submit
                            </Button>
                        </form>
                    </div>
                    {message && (
                        <div className="flex justify-center mt-5">
                            <h1 className="text-green-500">{message}</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const data = yourData;
    const projects = data.projects

    const paths = projects.map(project => ({
        params: { id: project.id.toString() }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const data = yourData;
    const project = data.projects.find(project => project.id === params.id);

    return {
        props: {
            project: project || null
        }
    };
}

export default ProjectPage;
