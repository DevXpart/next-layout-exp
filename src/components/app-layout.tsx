import Link from "next/link";

export default function AppLayout({ children }: any) {
    return (
        <div className="bg-green-100 p-6">
            <p>App Layout</p>
            <div className="border-b">
                <ul className="flex space-x-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
            <main>{children}</main>
        </div>
    )
}
