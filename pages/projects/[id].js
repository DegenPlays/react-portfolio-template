
import { useRouter } from 'next/router';
import { useTheme } from "next-themes";
import Header from "../../components/Header";
import Button from "../../components/Button";
import yourData from "../../data/portfolio.json";

const ProjectPage = ({ project }) => {
    const { theme } = useTheme();
    const router = useRouter();
    const { id } = router.query;

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

    return (
        <div><Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
        />
            {project.titleImage ? (<div
                className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
                style={{ height: "50px", width: "200px" }}
            >
                <img
                    alt={project.name}
                    className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                    src={project.titleImage}
                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                />
            </div>) : (
                <h1 className="mt-5 text-3xl font-medium">
                    {project.name ? project.name : "Project Name"}
                </h1>
            )}
            <h2
                className="text-xl opacity-50"
                dangerouslySetInnerHTML={{
                    __html: project.description ? project.description.replace(/\n/g, '<br />') : "Description"
                }}
            />
            {project.imageSrc && <img src={project.imageSrc} alt={project.title} />}
            {project.videoSrc && <iframe src={project.videoSrc} title="Project Video" width="600" height="400" />}
            <Button classes={`${theme === "dark"
                ? "bg-slate-900"
                : "bg-slate-100"
                }`} onClick={() => window.open(project.url)}>
                {project.buttonText}
            </Button>
        </div>
    );
};

export async function getStaticPaths() {
    const data = yourData;
    // Fetch the list of project IDs from your API or data source
    //   const res = await fetch('https://example.com/api/portfolio');
    //   const { projects } = await res.json();
    const projects = data.projects

    // Generate paths for each project
    const paths = projects.map(project => ({
        params: { id: project.id.toString() }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    // Find the project by ID from your JSON file
    const data = yourData;
    const project = data.projects.find(project => project.id === params.id);

    return {
        props: {
            project: project || null
        }
    };
}

export default ProjectPage;
