import Button from "./Button";

export default function Controls({
  nextTurn,
  resetState,
  startPlaying,
  stopPlaying,
  playing,
}) {
  return (
    <div className="h-[20vh] w-full bg-gray-500 flex justify-center gap-4 items-center flex-wrap">
      {/* <Button text="EXPLANATION" method={nextTurn} />
            <Button text="LEXICON" method={nextTurn} /> */}
      {!playing && (
        <>
          <Button text="⮌ RESET" method={resetState} />
          <Button text="➤ START" method={startPlaying} />
          <Button text="🠚 NEXT" method={nextTurn} />
        </>
      )}
      {playing && <Button text="✋ STOP" method={stopPlaying} />}
    </div>
  );
}
