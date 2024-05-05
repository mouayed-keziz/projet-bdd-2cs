import ToggleTheme from "@/components/navbar/toggle-theme";
import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import LoginButton from "./login-button";
import UserMenu from "./user-menu";
import Link from "next/link";
export default async function Navbar() {
    const session = await getServerAuthSession();
    return (
        <nav className="w-full border-b px-2 py-4 mb-24">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="prose dark:prose-invert">
                    <h2>PROJET BDD</h2>
                </Link>
                <div className="flex justify-end items-center gap-2">
                    <ToggleTheme />
                    {session ? (
                        <UserMenu session={session} />
                    ) : (
                        <LoginButton />
                    )}
                </div>
            </div>
        </nav>
    );
}