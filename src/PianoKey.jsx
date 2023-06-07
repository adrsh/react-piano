import './Piano.css'

function PianoKey({note, onPianoKeyPress, color}) {
  return (
    <>
    <button className={color} onClick={() => onPianoKeyPress(note)}>{note}</button>
    </>
  )
}

export default PianoKey
