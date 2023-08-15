import AppLayout from "@/components/app-layout";
import ProjectLayout from "@/components/project-layout";
import ProjectContext from "@/contexts/ProjectContext";
import { useContext } from "react";

export default function ProjectLinks() {
    const project = useContext(ProjectContext)
    console.log(project)

    return (
        <ProjectLayout>
            Project - Links
        </ProjectLayout>
    )
}
ProjectLinks.Layout = AppLayout
