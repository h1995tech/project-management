export default function Input({ label, textareaType, ...props }) {
    const classes = "w-full p-1 border-b-2 rounder-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return (
        <p>
            <label>{label}</label>
            {textareaType ?
                <textarea className={classes} {...props} /> :
                <input className={classes} {...props} />
            }
        </p>
    )
}