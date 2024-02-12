

export default function Cell( {value, yIndex, xIndex, handleCellClick} ) {

    
    return (
        <div className={
            value ?
            "bg-yellow-500 border border-gray-400"
            :
            "bg-gray-500 border border-gray-400"
        }
        onClick={() => handleCellClick(yIndex, xIndex)}
        
        
        >
        </div>
    )
}