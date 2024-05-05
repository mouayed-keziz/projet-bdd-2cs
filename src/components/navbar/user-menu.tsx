"use client";

import { type Session } from "next-auth";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserMenu({ session }: { session: Session }) {

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? ""} />
                        <AvatarFallback>{session.user.name?.at(0)}{session.user.name}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer">
                        <Link href="/my-profile">
                            my profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <Link href="/create-post">
                            create post
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" disabled>search</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" disabled>likes</DropdownMenuItem>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={() => void signOut()}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}