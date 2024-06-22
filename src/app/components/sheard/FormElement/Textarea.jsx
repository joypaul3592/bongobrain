export default function Textarea({ idFor, label, placeholder, ...res }) {
    return (
        <div>
            <label htmlFor={idFor} className="block mb-2 text-sm font-medium text-lime-400">
                {label}
            </label>
            <textarea id={idFor} name={idFor} rows="6" className="block p-2.5 w-full text-sm text-gray-200 bg-[#111204] rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-lime-400  " placeholder={placeholder}  {...res} required></textarea>
        </div>
    )
}
