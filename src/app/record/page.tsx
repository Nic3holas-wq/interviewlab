'use client';
import React, { useEffect, useRef, useState } from "react";

export default function RecordInterview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
    setupCamera();
  }, []);

  const startRecording = async () => {
    const stream = (videoRef.current?.srcObject as MediaStream) || null;
    if (!stream) return;
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    };

    recorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Practice Interview</h1>
      <video ref={videoRef} autoPlay muted className="rounded-lg shadow-lg w-full max-w-lg border border-gray-300" />
      <div className="flex gap-4 mt-6">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            🎥 Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            ⏹ Stop Recording
          </button>
        )}
      </div>
      {videoUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Recorded Video:</h2>
          <video src={videoUrl} controls className="w-full max-w-lg rounded-lg shadow" />
        </div>
      )}
    </div>
  );
}
