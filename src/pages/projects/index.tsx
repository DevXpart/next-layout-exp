import AppLayout from "@/components/app-layout";
import Link from "next/link";

export default function Projects() {
    return (
        <AppLayout>
            <div className="bg-red-100 p-6">
                Projects
                <ul className="flex space-x-3">
                    <li>
                        <Link className="underline" href="/projects/1">Project 1</Link>
                    </li>
                    <li>
                        <Link className="underline" href="/projects/2">Project 2</Link>
                    </li>
                    <li>
                        <Link className="underline" href="/projects/3">Project 3</Link>
                    </li>
                </ul>
            </div>
        </AppLayout>
    )
}
