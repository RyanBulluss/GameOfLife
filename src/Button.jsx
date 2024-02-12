

export default function Button({text, method}) {

    
    return (
        <button onClick={() => method()} className="bg-blue-700 hover:bg-blue-500 px-4 py-2 rounded-full text-white">
            {text}
        </button>
    )
}