"use client"
import React from "react";
import {useGlobalState} from "@/app/context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

function page() {
    const {importantTasks} = useGlobalState();
    return (
        <Tasks title="Important Tasks" tasks={importantTasks}></Tasks>
    )
}

export default page;