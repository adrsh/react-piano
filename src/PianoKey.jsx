import './Piano.css'

function PianoKey({ note, onPianoKeyPress, onPianoKeyRelease, color }) {
  return (
    <>
      <button
        className={color}
        onMouseDown={() => onPianoKeyPress(note)}
        onMouseUp={() => onPianoKeyRelease(note)}
        onMouseLeave={() => onPianoKeyRelease(note)}
        onMouseEnter={(e) => {
          if (e.buttons === 1) { onPianoKeyPress(note) }
        }
        }
      >{note}
      </button>
    </>
  )
}

export default PianoKey
