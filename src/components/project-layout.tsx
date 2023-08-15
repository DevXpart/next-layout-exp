import ProjectContext from "@/contexts/ProjectContext";
import { getProject } from "@/services/project";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

export default function ProjectLayout({ children }: any) {
    const { query } = useRouter()
    const projectId = query.projectId


    const [project, setProject] = useState<any>(null)

    const getData = useCallback(async () => {
        let response = await getProject(projectId)
        setProject(response)
    }, [projectId])

    useEffect(() => {
        getData()
    }, [projectId])


    if (!projectId) return (<div>Project not found</div>)

    return (
        <ProjectContext.Provider value={project}>
            <div className="bg-blue-100 p-6">
                <p>project Layout</p>

                <div className="border-b">
                    <ul className="flex space-x-3">
                        <li>
                            <Link className="underline" href="/projects/1">Overview</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/projects/1/links">Links</Link>
                        </li>
                        <li>
                            <Link className="underline" href="/projects/1/settings">Settings</Link>
                        </li>
                    </ul>
                </div>

                <main>{children}</main>
            </div >
        </ProjectContext.Provider>
    )
}
