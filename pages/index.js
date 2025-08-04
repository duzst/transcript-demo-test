
import { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const transcriptData = [
  {
    "start": 0.031,
    "end": 24.3,
    "word": "[SPEAKER_00]: hi hi can i get you something to drink yes could i please get some water still or sparkling um sorry what's the difference still water is regular water sparkling water is water with little bubbles oh okay then um still water please all right still water thank you so much",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 24.635,
    "end": 26.257,
    "word": "[SPEAKER_00]: Right, here's your still water.",
    "speaker": "Customer"
  },
  {
    "start": 26.297,
    "end": 28.48,
    "word": "[SPEAKER_00]: Oh, oh, thank you.",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 29.582,
    "end": 36.511,
    "word": "[SPEAKER_00]: Sorry, I mean the water that you have like in the kitchen, you know, that you can put some water.",
    "speaker": "Customer"
  },
  {
    "start": 37.773,
    "end": 39.055,
    "word": "[SPEAKER_00]: Oh, you would like tap water?",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 40.296,
    "end": 41.318,
    "word": "[SPEAKER_00]: Yes, tap water.",
    "speaker": "Customer"
  },
  {
    "start": 41.498,
    "end": 43.44,
    "word": "[SPEAKER_00]: Sorry, I'll bring it in a second, yeah?",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 43.461,
    "end": 43.781,
    "word": "[SPEAKER_00]: Sorry.",
    "speaker": "Customer"
  },
  {
    "start": 44.262,
    "end": 44.983,
    "word": "[SPEAKER_00]: Thank you so much.",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 45.243,
    "end": 46.565,
    "word": "[SPEAKER_00]: And here's your tap water.",
    "speaker": "Customer"
  },
  {
    "start": 46.585,
    "end": 48.467,
    "word": "[SPEAKER_00]: Oh, thank you.",
    "speaker": "AI Customer Agent"
  },
  {
    "start": 48.507,
    "end": 50.49,
    "word": "[SPEAKER_00]: Enjoy.",
    "speaker": "Customer"
  }
];

const summaryText = "Summary: This conversation includes ordering drinks, clarifying still vs sparkling water, and requesting tap water.";

export default function Home() {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#ddd',
        progressColor: '#4f46e5',
        cursorColor: '#4f46e5',
        height: 80,
        responsive: true,
      });

      wavesurfer.current.load('/voice.mp3');

      wavesurfer.current.on('audioprocess', () => {
        setCurrentTime(wavesurfer.current.getCurrentTime());
      });

      wavesurfer.current.on('seek', () => {
        setCurrentTime(wavesurfer.current.getCurrentTime());
      });
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(wavesurfer.current.isPlaying());
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
        <div ref={waveformRef} className="w-full max-w-2xl mb-4"></div>
        <button
          onClick={togglePlay}
          className="px-6 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className="mt-4 p-4 bg-gray-800 rounded-lg max-w-2xl">
          <h2 className="text-lg font-bold mb-2">Summary</h2>
          <p>{summaryText}</p>
        </div>
      </div>

      <div className="w-1/2 overflow-y-auto bg-gray-50 p-6">
        {transcriptData.map((item, index) => {
          const isActive = currentTime >= item.start && currentTime <= item.end;
          return (
            <div
              key={index}
              className={`mb-4 p-3 rounded-lg shadow-sm transition-colors duration-200 ${
                isActive ? 'bg-yellow-100' : 'bg-white'
              }`}
            >
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  item.speaker === 'AI Customer Agent'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {item.speaker}
              </span>
              <p
                className="mt-2 text-gray-800 cursor-pointer"
                onClick={() => {
                  if (wavesurfer.current) {
                    const duration = wavesurfer.current.getDuration();
                    wavesurfer.current.seekTo(item.start / duration);
                  }
                }}
              >
                {item.word}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
