"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginButton() {
    const [pressed, setPressed] = useState(false);

    return (
        <Button className="gap-2" onClick={() => { setPressed(true); void signIn("google") }} variant="outline" disabled={pressed}>
            Sign In
            {pressed && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
    );
}