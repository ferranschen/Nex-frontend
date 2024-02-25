import React from "react";
import Cell  from "ui/interaction/Notebook/Cell";
export default function Notebook() {
    return (
        <div className="border h-full w-full p-4 rounded-lg shadow-md">
            <Cell />
            <Cell />
            <Cell />
        </div>
    );
}