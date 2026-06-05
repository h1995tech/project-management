export default function Input({ label, textareaType, ref, ...props }) {
    const classes = "w-full p-1 border-b-2 rounder-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return (
        <p>
            <label>{label}</label>
            {textareaType ?
                <textarea ref={ref} className={classes} {...props} /> :
                <input ref={ref} className={classes} {...props} />
            }
        </p>
    )
}