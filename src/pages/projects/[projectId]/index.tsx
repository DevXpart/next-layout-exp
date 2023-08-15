import AppLayout from "@/components/app-layout";
import ProjectLayout from "@/components/project-layout";
import ProjectContext from "@/contexts/ProjectContext";
import { useContext } from "react";

export default function ProjectOverview() {
    const project = useContext(ProjectContext)
    console.log(project)

    return (
        <ProjectLayout>
            Project - Overview

            <div>
                {project?.title}
            </div>
        </ProjectLayout>
    )
}

ProjectOverview.layout = AppLayout
