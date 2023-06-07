import './Piano.css'
import PianoKey from './PianoKey'
import * as Tone from 'tone'

function Piano() {
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    synth.triggerAttackRelease(Tone.Midi(note), "16n")
  }

  return (
    <>
      <PianoKey
        className="pianoKey"
        note="60"
        onPianoKeyPress={playNote}
      />
    </>
  )
}

export default Piano
