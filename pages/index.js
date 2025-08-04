
import { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const transcriptData = [
  {
    "start": 0.03,
    "end": 0.5,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 0.5,
    "end": 0.96,
    "word": "hi",
    "speaker": "Customer"
  },
  {
    "start": 0.96,
    "end": 1.43,
    "word": "hi",
    "speaker": "Customer"
  },
  {
    "start": 1.43,
    "end": 1.9,
    "word": "can",
    "speaker": "Customer"
  },
  {
    "start": 1.9,
    "end": 2.36,
    "word": "i",
    "speaker": "Customer"
  },
  {
    "start": 2.36,
    "end": 2.83,
    "word": "get",
    "speaker": "Customer"
  },
  {
    "start": 2.83,
    "end": 3.3,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 3.3,
    "end": 3.76,
    "word": "something",
    "speaker": "Customer"
  },
  {
    "start": 3.76,
    "end": 4.23,
    "word": "to",
    "speaker": "Customer"
  },
  {
    "start": 4.23,
    "end": 4.7,
    "word": "drink",
    "speaker": "Customer"
  },
  {
    "start": 4.7,
    "end": 5.16,
    "word": "yes",
    "speaker": "Customer"
  },
  {
    "start": 5.16,
    "end": 5.63,
    "word": "could",
    "speaker": "Customer"
  },
  {
    "start": 5.63,
    "end": 6.1,
    "word": "i",
    "speaker": "Customer"
  },
  {
    "start": 6.1,
    "end": 6.56,
    "word": "please",
    "speaker": "Customer"
  },
  {
    "start": 6.56,
    "end": 7.03,
    "word": "get",
    "speaker": "Customer"
  },
  {
    "start": 7.03,
    "end": 7.5,
    "word": "some",
    "speaker": "Customer"
  },
  {
    "start": 7.5,
    "end": 7.97,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 7.97,
    "end": 8.43,
    "word": "still",
    "speaker": "Customer"
  },
  {
    "start": 8.43,
    "end": 8.9,
    "word": "or",
    "speaker": "Customer"
  },
  {
    "start": 8.9,
    "end": 9.37,
    "word": "sparkling",
    "speaker": "Customer"
  },
  {
    "start": 9.37,
    "end": 9.83,
    "word": "um",
    "speaker": "Customer"
  },
  {
    "start": 9.83,
    "end": 10.3,
    "word": "sorry",
    "speaker": "Customer"
  },
  {
    "start": 10.3,
    "end": 10.77,
    "word": "what's",
    "speaker": "Customer"
  },
  {
    "start": 10.77,
    "end": 11.23,
    "word": "the",
    "speaker": "Customer"
  },
  {
    "start": 11.23,
    "end": 11.7,
    "word": "difference",
    "speaker": "Customer"
  },
  {
    "start": 11.7,
    "end": 12.17,
    "word": "still",
    "speaker": "Customer"
  },
  {
    "start": 12.17,
    "end": 12.63,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 12.63,
    "end": 13.1,
    "word": "is",
    "speaker": "Customer"
  },
  {
    "start": 13.1,
    "end": 13.57,
    "word": "regular",
    "speaker": "Customer"
  },
  {
    "start": 13.57,
    "end": 14.03,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 14.03,
    "end": 14.5,
    "word": "sparkling",
    "speaker": "Customer"
  },
  {
    "start": 14.5,
    "end": 14.97,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 14.97,
    "end": 15.43,
    "word": "is",
    "speaker": "Customer"
  },
  {
    "start": 15.43,
    "end": 15.9,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 15.9,
    "end": 16.37,
    "word": "with",
    "speaker": "Customer"
  },
  {
    "start": 16.37,
    "end": 16.83,
    "word": "little",
    "speaker": "Customer"
  },
  {
    "start": 16.83,
    "end": 17.3,
    "word": "bubbles",
    "speaker": "Customer"
  },
  {
    "start": 17.3,
    "end": 17.77,
    "word": "oh",
    "speaker": "Customer"
  },
  {
    "start": 17.77,
    "end": 18.23,
    "word": "okay",
    "speaker": "Customer"
  },
  {
    "start": 18.23,
    "end": 18.7,
    "word": "then",
    "speaker": "Customer"
  },
  {
    "start": 18.7,
    "end": 19.17,
    "word": "um",
    "speaker": "Customer"
  },
  {
    "start": 19.17,
    "end": 19.63,
    "word": "still",
    "speaker": "Customer"
  },
  {
    "start": 19.63,
    "end": 20.1,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 20.1,
    "end": 20.57,
    "word": "please",
    "speaker": "Customer"
  },
  {
    "start": 20.57,
    "end": 21.03,
    "word": "all",
    "speaker": "Customer"
  },
  {
    "start": 21.03,
    "end": 21.5,
    "word": "right",
    "speaker": "Customer"
  },
  {
    "start": 21.5,
    "end": 21.97,
    "word": "still",
    "speaker": "Customer"
  },
  {
    "start": 21.97,
    "end": 22.43,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 22.43,
    "end": 22.9,
    "word": "thank",
    "speaker": "Customer"
  },
  {
    "start": 22.9,
    "end": 23.37,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 23.37,
    "end": 23.83,
    "word": "so",
    "speaker": "Customer"
  },
  {
    "start": 23.83,
    "end": 24.3,
    "word": "much",
    "speaker": "Customer"
  },
  {
    "start": 24.64,
    "end": 24.91,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 24.91,
    "end": 25.18,
    "word": "Right,",
    "speaker": "Customer"
  },
  {
    "start": 25.18,
    "end": 25.45,
    "word": "here's",
    "speaker": "Customer"
  },
  {
    "start": 25.45,
    "end": 25.72,
    "word": "your",
    "speaker": "Customer"
  },
  {
    "start": 25.72,
    "end": 25.99,
    "word": "still",
    "speaker": "Customer"
  },
  {
    "start": 25.99,
    "end": 26.26,
    "word": "water.",
    "speaker": "Customer"
  },
  {
    "start": 26.3,
    "end": 26.73,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 26.73,
    "end": 27.17,
    "word": "Oh,",
    "speaker": "Customer"
  },
  {
    "start": 27.17,
    "end": 27.61,
    "word": "oh,",
    "speaker": "Customer"
  },
  {
    "start": 27.61,
    "end": 28.04,
    "word": "thank",
    "speaker": "Customer"
  },
  {
    "start": 28.04,
    "end": 28.48,
    "word": "you.",
    "speaker": "Customer"
  },
  {
    "start": 29.58,
    "end": 29.91,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 29.91,
    "end": 30.24,
    "word": "Sorry,",
    "speaker": "Customer"
  },
  {
    "start": 30.24,
    "end": 30.57,
    "word": "I",
    "speaker": "Customer"
  },
  {
    "start": 30.57,
    "end": 30.9,
    "word": "mean",
    "speaker": "Customer"
  },
  {
    "start": 30.9,
    "end": 31.23,
    "word": "the",
    "speaker": "Customer"
  },
  {
    "start": 31.23,
    "end": 31.56,
    "word": "water",
    "speaker": "Customer"
  },
  {
    "start": 31.56,
    "end": 31.89,
    "word": "that",
    "speaker": "Customer"
  },
  {
    "start": 31.89,
    "end": 32.22,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 32.22,
    "end": 32.55,
    "word": "have",
    "speaker": "Customer"
  },
  {
    "start": 32.55,
    "end": 32.88,
    "word": "like",
    "speaker": "Customer"
  },
  {
    "start": 32.88,
    "end": 33.21,
    "word": "in",
    "speaker": "Customer"
  },
  {
    "start": 33.21,
    "end": 33.54,
    "word": "the",
    "speaker": "Customer"
  },
  {
    "start": 33.54,
    "end": 33.87,
    "word": "kitchen,",
    "speaker": "Customer"
  },
  {
    "start": 33.87,
    "end": 34.2,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 34.2,
    "end": 34.53,
    "word": "know,",
    "speaker": "Customer"
  },
  {
    "start": 34.53,
    "end": 34.86,
    "word": "that",
    "speaker": "Customer"
  },
  {
    "start": 34.86,
    "end": 35.19,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 35.19,
    "end": 35.52,
    "word": "can",
    "speaker": "Customer"
  },
  {
    "start": 35.52,
    "end": 35.85,
    "word": "put",
    "speaker": "Customer"
  },
  {
    "start": 35.85,
    "end": 36.18,
    "word": "some",
    "speaker": "Customer"
  },
  {
    "start": 36.18,
    "end": 36.51,
    "word": "water.",
    "speaker": "Customer"
  },
  {
    "start": 37.77,
    "end": 37.96,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 37.96,
    "end": 38.14,
    "word": "Oh,",
    "speaker": "Customer"
  },
  {
    "start": 38.14,
    "end": 38.32,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 38.32,
    "end": 38.51,
    "word": "would",
    "speaker": "Customer"
  },
  {
    "start": 38.51,
    "end": 38.69,
    "word": "like",
    "speaker": "Customer"
  },
  {
    "start": 38.69,
    "end": 38.87,
    "word": "tap",
    "speaker": "Customer"
  },
  {
    "start": 38.87,
    "end": 39.05,
    "word": "water?",
    "speaker": "Customer"
  },
  {
    "start": 40.3,
    "end": 40.55,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 40.55,
    "end": 40.81,
    "word": "Yes,",
    "speaker": "Customer"
  },
  {
    "start": 40.81,
    "end": 41.06,
    "word": "tap",
    "speaker": "Customer"
  },
  {
    "start": 41.06,
    "end": 41.32,
    "word": "water.",
    "speaker": "Customer"
  },
  {
    "start": 41.5,
    "end": 41.71,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 41.71,
    "end": 41.93,
    "word": "Sorry,",
    "speaker": "Customer"
  },
  {
    "start": 41.93,
    "end": 42.15,
    "word": "I'll",
    "speaker": "Customer"
  },
  {
    "start": 42.15,
    "end": 42.36,
    "word": "bring",
    "speaker": "Customer"
  },
  {
    "start": 42.36,
    "end": 42.58,
    "word": "it",
    "speaker": "Customer"
  },
  {
    "start": 42.58,
    "end": 42.79,
    "word": "in",
    "speaker": "Customer"
  },
  {
    "start": 42.79,
    "end": 43.01,
    "word": "a",
    "speaker": "Customer"
  },
  {
    "start": 43.01,
    "end": 43.22,
    "word": "second,",
    "speaker": "Customer"
  },
  {
    "start": 43.22,
    "end": 43.44,
    "word": "yeah?",
    "speaker": "Customer"
  },
  {
    "start": 43.46,
    "end": 43.62,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 43.62,
    "end": 43.78,
    "word": "Sorry.",
    "speaker": "Customer"
  },
  {
    "start": 44.26,
    "end": 44.41,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 44.41,
    "end": 44.55,
    "word": "Thank",
    "speaker": "Customer"
  },
  {
    "start": 44.55,
    "end": 44.69,
    "word": "you",
    "speaker": "Customer"
  },
  {
    "start": 44.69,
    "end": 44.84,
    "word": "so",
    "speaker": "Customer"
  },
  {
    "start": 44.84,
    "end": 44.98,
    "word": "much.",
    "speaker": "Customer"
  },
  {
    "start": 45.24,
    "end": 45.46,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 45.46,
    "end": 45.68,
    "word": "And",
    "speaker": "Customer"
  },
  {
    "start": 45.68,
    "end": 45.9,
    "word": "here's",
    "speaker": "Customer"
  },
  {
    "start": 45.9,
    "end": 46.12,
    "word": "your",
    "speaker": "Customer"
  },
  {
    "start": 46.12,
    "end": 46.34,
    "word": "tap",
    "speaker": "Customer"
  },
  {
    "start": 46.34,
    "end": 46.56,
    "word": "water.",
    "speaker": "Customer"
  },
  {
    "start": 46.59,
    "end": 47.06,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 47.06,
    "end": 47.53,
    "word": "Oh,",
    "speaker": "Customer"
  },
  {
    "start": 47.53,
    "end": 48.0,
    "word": "thank",
    "speaker": "Customer"
  },
  {
    "start": 48.0,
    "end": 48.47,
    "word": "you.",
    "speaker": "Customer"
  },
  {
    "start": 48.51,
    "end": 49.5,
    "word": "[SPEAKER_00]:",
    "speaker": "Customer"
  },
  {
    "start": 49.5,
    "end": 50.49,
    "word": "Enjoy.",
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
            <span
              key={index}
              className={`inline-block px-1 py-0.5 m-0.5 rounded cursor-pointer transition-colors duration-200 ${
                isActive ? 'bg-yellow-300' : 'bg-white'
              }`}
              onClick={() => {
                if (wavesurfer.current) {
                  const duration = wavesurfer.current.getDuration();
                  wavesurfer.current.seekTo(item.start / duration);
                }
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
