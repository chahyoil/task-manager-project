"use client";

import React, {useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";

function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const handleChange = (name : string) => (e : any) => {
        switch(name) {
            case "title" :
                setTitle(e.target.value);
                break;
            case "description" :
                setDescription(e.target.value);
                break;
            case "date" :
                setDate(e.target.value);
                break;
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "impotant" :
                setImportant(e.target.checked);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            important,
        };

        try {
            const res = await axios.post("/api/tasks", task);

            if(res.data.error) {
                toast.error(res.data.error);
            }

            toast.success("Task created successfully")
        } catch(error) {
            toast.error("에러");
            console.log(error);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create a Task</h1>
            <div className="input-control">
                <label htmlFor="title">Title</label>
                <input type="text"
                       id="title"
                       value={title}
                       name="title"
                       onChange={handleChange("title")}
                       placeholder="title"
                />
            </div>
            <div className="input-control">
                <label htmlFor="description">Description</label>
                <textarea
                    value={title}
                    onChange={handleChange("description")}
                    name="description"
                    id="description"
                    rows={4}
                    placeholder="title"
                ></textarea>
            </div>
            <div className="input-control">
                <label htmlFor="date">Date</label>
                <input type="date"
                       id="date"
                       value={title}
                       name="date"
                       onChange={handleChange("date")}
                       placeholder="title"
                />
            </div>
            <div className="input-control">
                <label htmlFor="date">Toggle Completed</label>
                <input type="checkbox"
                       id="completed"
                       value={completed.toString()}
                       name="checkbox"
                       onChange={handleChange("completed")}
                />
            </div>
            <div className="input-control">
                <label htmlFor="date">Toggle Important</label>
                <input type="checkbox"
                       id="important"
                       value={important.toString()}
                       name="checkbox"
                       onChange={handleChange("important")}
                />
            </div>

            <div className="submit-btn">
                <button type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}

export default CreateContent;
