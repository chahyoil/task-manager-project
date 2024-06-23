"use client"
import React from "react";
import {useGlobalState} from "@/app/context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

function page() {
    const {completedTasks} = useGlobalState();
    return (
        <Tasks title="Completed Tasks" tasks={completedTasks}></Tasks>
    )
}

export default page;