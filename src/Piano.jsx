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
    piano.triggerAttack(Tone.Midi(note))
  }

  async function releaseNote(note) {
    piano.triggerRelease(Tone.Midi(note))
  }

  return (
    <div className="piano">
      <div className="octave">
        <div className="white-keys">
          <PianoKey note="60" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="62" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="64" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="65" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="67" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="69" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="71" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
        </div>
        <div className="black-keys">
          <PianoKey note="61" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="63" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <div className="gap"></div>
          <PianoKey note="66" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="68" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="70" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
        </div>
      </div>
    </div>
  )
}

export default Piano
