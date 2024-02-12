import Button from "./Button"

export default function Controls({nextTurn}) {

    
    return (
        <div className="h-[20vh] bg-gray-500 flex justify-center gap-4 items-center flex-wrap">
            <Button text="EXPLANATION" method={nextTurn} />
            <Button text="LEXICON" method={nextTurn} />
            <Button text="START" method={nextTurn} />
            <Button text="NEXT" method={nextTurn} />
            <Button text="RESET" method={nextTurn} />
        </div>
    )
}