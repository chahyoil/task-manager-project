"use client"
import React from "react";
import {useGlobalState} from "@/app/context/globalProvider";
import Tasks from "@/app/components/Tasks/Tasks";

function page() {
    const {incompleteTasks} = useGlobalState();
    return (
        <Tasks title="InCompleted Tasks" tasks={incompleteTasks}></Tasks>
    )
}

export default page;