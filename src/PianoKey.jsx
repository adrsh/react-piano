import './Piano.css'

function PianoKey({note, onPianoKeyPress}) {
  return (
    <>
    <button onClick={(e) => onPianoKeyPress(note)}>{note}</button>
    </>
  )
}

export default PianoKey
