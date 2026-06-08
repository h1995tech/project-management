import { useState } from "react"

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleTaskInputChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleSaveTask() {
        if(enteredTask.trim() === '') return; // Do not add empty tasks
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input
                onChange={handleTaskInputChange}
                type="text"
                placeholder="Task title"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                value={enteredTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleSaveTask}
            >
                Save
            </button>
        </div>
    )
}