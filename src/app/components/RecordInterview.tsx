'use client';

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function RecordInterviewClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const interviewType = searchParams.get("type");
  // 🎥 Setup camera
  useEffect(() => {
    let stream: MediaStream | null = null;

    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
        setError("Camera access was denied. Please allow camera and microphone access.");
      }
    }

    setupCamera();

    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const startRecording = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
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

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 mt-[3%]">

    <div className="flex justify-between w-full mx-[3%]">

    {/* Left Section having recording and video display */}
    <div>
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        {interviewType ? `${interviewType} Interview` : "Interview"}
      </h1>
      <p className="text-gray-500 pb-4">
        Prepare yourself for a {interviewType ?? "general"} interview session.
      </p>

      <video
        ref={videoRef}
        autoPlay
        muted
        className="rounded-lg shadow-xl w-full max-w-lg border border-gray-300"
      />

      <div className="flex gap-4 mt-6">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            🎥 Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
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
    {/* Right Section having live feedback */}
    <div className="">
        <p>Pace: 70wmp</p>
    </div>
    </div>
    
   
    </main>
  );
}
