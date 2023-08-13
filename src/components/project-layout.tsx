import Link from "next/link";

export default function ProjectLayout({ children }: any) {
    return (
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
        </div>
    )
}
