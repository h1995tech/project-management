import { createPortal } from 'react-dom';
import { useRef, useImperativeHandle } from "react";

export default function Modal({ children, ref }) {
    const dialog = useRef();
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
            // This is where you would put the logic to open the modal. In a real application, this might involve setting some state to show the modal, or adding a class to the modal element to make it visible, etc.
        }
    }))
    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {/* This is where you would put the content of your modal. In a real application, this might include a form for creating a new project, or a confirmation dialog for deleting a project, etc. */}
        {children}
        <form method="dialog" className="mt-4 text-right">
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                Close
            </button>
        </form>
    </dialog>, document.getElementById('modal-root'));
}