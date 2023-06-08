import './Piano.css'
import PianoKey from './PianoKey'
import * as Tone from 'tone'

function Piano() {
  const piano = new Tone.Sampler({
    urls: {
      C3: 'C3.mp3',
      'D#3': 'Ds3.mp3',
      'F#3': 'Fs3.mp3',
      A3: 'A3.mp3',
      C4: 'C4.mp3',
      'D#4': 'Ds4.mp3',
      'F#4': 'Fs4.mp3',
      A4: 'A4.mp3',
      C5: 'C5.mp3',
      'D#5': 'Ds5.mp3',
      'F#5': 'Fs5.mp3',
      A5: 'A5.mp3',
      C6: 'C6.mp3'
    },

    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  async function playNote(note) {
    await Tone.start()
    piano.triggerAttack(Tone.Midi(note))
  }

  function releaseNote(note) {
    piano.triggerRelease(Tone.Midi(note))
  }

  return (
    <div className="piano">
      <div className="octave">
        <div className="white-keys">
          <PianoKey note="48" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="50" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="52" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="53" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="55" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="57" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="59" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
        </div>
        <div className="black-keys">
          <PianoKey note="49" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="51" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <div className="gap"></div>
          <PianoKey note="54" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="56" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="58" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
        </div>
      </div>
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
      <div className="octave">
        <div className="white-keys">
          <PianoKey note="72" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="74" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="76" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="77" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="79" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="81" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
          <PianoKey note="83" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="white" />
        </div>
        <div className="black-keys">
          <PianoKey note="73" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="75" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <div className="gap"></div>
          <PianoKey note="78" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="80" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
          <PianoKey note="82" onPianoKeyPress={playNote} onPianoKeyRelease={releaseNote} color="black" />
        </div>
      </div>
    </div>
  )
}

export default Piano
