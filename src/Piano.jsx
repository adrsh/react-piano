import './Piano.css'
import PianoKey from './PianoKey'
import * as Tone from 'tone'

function Piano() {
  const piano = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  async function playNote(note) {
    await Tone.start()
    piano.triggerAttackRelease(Tone.Midi(note), "2n")
  }

  return (
    <div className="piano">
      <div className="octave">
        <div className="white-keys">
          <PianoKey note="60" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="62" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="64" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="65" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="67" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="69" onPianoKeyPress={playNote} color="white" />
          <PianoKey note="71" onPianoKeyPress={playNote} color="white" />
        </div>
        <div className="black-keys">
          <PianoKey note="61" onPianoKeyPress={playNote} color="black" />
          <PianoKey note="63" onPianoKeyPress={playNote} color="black" />
          <div className="gap"></div>
          <PianoKey note="66" onPianoKeyPress={playNote} color="black" />
          <PianoKey note="68" onPianoKeyPress={playNote} color="black" />
          <PianoKey note="70" onPianoKeyPress={playNote} color="black" />
        </div>
      </div>
    </div>
  )
}

export default Piano
