import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function Project({onSaveProject, onCancelProject}) {

    const modalRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() { 
        if(title.current.value === '' || description.current.value === '' || dueDate.current.value === '') {
            modalRef.current.open();
            return;
        }
        const newProject = {
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            id: Math.random().toString(36).substr(2, 9) // This is a simple way to generate a unique ID for the project. In a real application, you would likely want to use a more robust method for generating IDs.
        }
        onSaveProject(newProject); // This is where you would call the function to save the new project. In a real application, this might involve making an API call to save the project to a database.
    }

    return (
        <>
        <Modal ref={modalRef}>
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancelProject} className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                    Save
                </button>
                </li>
            </menu>
            <div>
                {/* Create a component for the inputs and use it here */}
                <Input type="text" ref={title} label="Project Title" />
                <Input ref={description} label="Project Description" textareaType />
                <Input type="date" ref={dueDate} label="Project DueDate" />
            </div>
        </div>
        </>
    )
}