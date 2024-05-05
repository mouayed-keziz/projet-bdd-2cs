"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

interface PaginationComponentProps {
    current_page: number;
    total_pages: number;
    next_page: () => void;
    previous_page: () => void;
}

export default function PaginationComponent(props: PaginationComponentProps) {
    return (
        <>
            <div className="flex justify-center items-center m-4 gap-2">
                <Button onClick={() => props.previous_page()} disabled={props.current_page === 1} size="icon" variant="outline">
                    <ChevronLeftIcon />
                </Button>
                <p>page {props.current_page} / {props.total_pages}</p>
                <Button onClick={() => props.next_page()} disabled={props.current_page === props.total_pages} size="icon" variant="outline">
                    <ChevronRightIcon />
                </Button>
            </div>
            <div className="h-6" />
        </>
    );
}