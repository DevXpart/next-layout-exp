import AppLayout from "@/components/app-layout";
import ProjectLayout from "@/components/project-layout";
import ProjectContext from "@/contexts/ProjectContext";
import { useContext } from "react";

export default function ProjectLinks() {
    const project = useContext(ProjectContext)
    console.log(project)

    return (
        <ProjectLayout>
            <div className="p-6 bg-yellow-100 mt-6">
                Project - Links

                {project?.title}
            </div>
        </ProjectLayout>
    )
}
ProjectLinks.layout = AppLayout
