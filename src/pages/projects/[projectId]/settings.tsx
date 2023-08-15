import AppLayout from "@/components/app-layout";
import ProjectLayout from "@/components/project-layout";
import ProjectContext from "@/contexts/ProjectContext";
import { useContext } from "react";

export default function Projects() {
    const project = useContext(ProjectContext)
    console.log(project)

    return (
        <ProjectLayout>
            <div className="p-6 bg-yellow-100 mt-6">
                Project - Settings

                {project?.title}
            </div>
        </ProjectLayout>
    )
}

Projects.layout = AppLayout;
