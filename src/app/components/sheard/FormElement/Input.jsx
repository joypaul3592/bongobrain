export default function Input({ type, idFor, label, placeholder, ...res }) {
    return (
        <div className=" w-full mt-5 sm:mt-0">
            <label htmlFor={idFor} className="block mb-2 text-sm font-medium text-lime-400">
                {label}
            </label>
            <input
                type={type}
                id={idFor}
                name={idFor}
                placeholder={placeholder}
                className="shadow-sm bg-[#111204] border border-gray-300 text-gray-200 text-sm rounded-lg focus:outline-none focus:border-lime-400 block w-full p-2.5 "
                required
                {...res}
            />
        </div>
    )
}
