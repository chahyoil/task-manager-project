"use client";
import Tasks from "@/app/components/Tasks/Tasks";
import {useGlobalState} from "@/app/context/globalProvider";

export default function Home() {

    const {tasks} = useGlobalState();

    return ( <Tasks title="All Tasks" tasks = {tasks}/>)

}