import Button from "./Button"

export default function Controls() {

    
    return (
        <div className="h-[20vh] bg-gray-500 flex justify-center gap-4 items-center flex-wrap">
            <Button text="EXPLANATION" />
            <Button text="LEXICON" />
            <Button text="START" />
            <Button text="NEXT" />
            <Button text="RESET" />
        </div>
    )
}