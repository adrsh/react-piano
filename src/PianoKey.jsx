import './Piano.css'

function PianoKey({ note, onPianoKeyPress, color }) {
  return (
    <>
      <button
        className={color}
        onMouseDown={() => onPianoKeyPress(note)}
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
