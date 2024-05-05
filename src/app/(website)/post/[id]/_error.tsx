"use client";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (

        <>
            <code className="font-bold text-xl text-center">
                {error.message}
            </code>
        </>
    );
}