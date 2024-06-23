import {NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";
import prisma from "@/app/utils/connect";

export async function POST(req : Request) {
    try{
        const {userId} = auth();
        if(!userId) {
            return NextResponse.json({error : "Unauthorized", status:401})
        }

        const {title, description, date, completed, important} = await req.json();

        if(!title || !description || !date) {
            return NextResponse.json({
                error : "Missing required fields",
                status : 400,
            })
        }

        if(title.length < 3) {
            return NextResponse.json({
                error: "타이틀은 3글자 이상이어야 합니다.",
                status: 400,
            })
        }

        const task = await prisma.task.create({
            data : {
                title,
                description,
                date,
                isCompleted : completed,
                isImportant : important,
                userId,
            }
        });

        return NextResponse.json({task});

    }catch (error) {
        console.log("ERROR CREATING TASK: ", error);
        return NextResponse.json({error : "Error creating task", status : 500});
    }
}

export async function GET(req : Request) {
    try{
        const {userId} = auth();
        if(!userId) {
            return NextResponse.json({error : "Unauthorized", status:401})
        }

        const tasks = await prisma.task.findMany({
            where : {
                userId,
            }
        });

        return NextResponse.json({tasks});
    }catch (error) {
        console.log("ERROR GETTING TASK: ", error);
        return NextResponse.json({error : "Error getting task", status : 500});
    }
}

export async function PUT(req : Request) {
    try{
        const {userId} = auth();
        const {isCompleted, id} = await req.json();

        if (!userId) {
            return NextResponse.json({error : "Unauthorized", status:401})
        }

        const task = await prisma.task.update({
            where: {
                id,
            },
            data: {
                isCompleted,
            },
        });

        return NextResponse.json(task);

    }catch (error) {
        console.log("ERROR UPDATING TASK: ", error);
        return NextResponse.json({error : "Error updating task", status : 500});
    }
}

