import { useState } from 'react'
import './Piano.css'
import * as Tone from 'tone'

function PianoKey({ note, onPianoKeyPress, onPianoKeyRelease, color }) {
  const [pressed, setPressed] = useState(false)

  function handleMouseDown(e) {
    setPressed(true)
    onPianoKeyPress(note)
  }

  function handleMouseUp(e) {
    setPressed(false)
    onPianoKeyRelease(note)
  }

  function handleMouseLeave(e) {
    setPressed(false)
    onPianoKeyRelease(note)
  }

  function handleMouseEnter(e) {
    if (e.buttons === 1) {
      setPressed(true)
      onPianoKeyPress(note) 
    }
  }

  return (
    <>
      <button
        className={`key ${color} ${pressed ? 'pressed' : ''}`}
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        onMouseEnter={(e) => handleMouseEnter(e)}
      >{Tone.Midi(note).toNote()}
      </button>
    </>
  )
}

export default PianoKey
