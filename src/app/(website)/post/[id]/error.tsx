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
            <h1 className="font-bold text-5xl text-center">
                {error.message}
            </h1>
        </>
    );
}