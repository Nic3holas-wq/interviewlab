'use client';

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Feedback {
  eyeContact: string;
  pace: number; // words per minute
  fillerWords: number;
  content: string;
}

export default function RecordInterviewClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const interviewType = searchParams.get("type");

  // Realtime feedback state
  const [feedback, setFeedback] = useState<Feedback>({
    eyeContact: "Good",
    pace: 70,
    fillerWords: 0,
    content: "Clear",
  });

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
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  // Fake realtime feedback simulation (replace with ML later)
  useEffect(() => {
  let interval: number; // Use number in browser

  if (recording) {
    interval = window.setInterval(() => {
      setFeedback((prev) => ({
        eyeContact: Math.random() > 0.1 ? "Good" : "Poor",
        pace: Math.floor(60 + Math.random() * 40),
        fillerWords: Math.floor(Math.random() * 5),
        content: Math.random() > 0.2 ? "Clear" : "Needs Improvement",
      }));
    }, 2000);
  }

  return () => window.clearInterval(interval); // clearInterval expects number
}, [recording]);


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
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 mt-[12%] sm:mt-[3%]">
      <div className="flex flex-col md:flex-row justify-between w-full mx-[3%] gap-6">
        {/* Left Section: Video + Recording */}
        <div className="flex-1">
          <h1 className="text-xl sm:text-3xl font-bold text-blue-700 mb-2 sm:mb-4">
            {interviewType ? `${interviewType} Interview` : "Interview"}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base pb-2 sm:pb-4">
            Prepare yourself for a {interviewType ?? "general"} interview session.
          </p>

          <video
            ref={videoRef}
            autoPlay
            muted
            className="rounded-lg shadow-xl w-full max-w-md sm:max-w-lg border border-gray-300"
          />

          <div className="flex gap-4 mt-3 sm:mt-6">
            {!recording ? (
              <button
                onClick={startRecording}
                className="bg-green-600 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition"
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

        </div>

        {/* Right Section: Realtime Feedback */}
        <div className="flex-1 max-w-sm">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
              Realtime Feedback
            </h2>

            {/* Feedback Metric */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl">👀</span>
                  <span className="font-medium text-gray-700">Eye Contact</span>
                </div>
                <span className="font-semibold text-gray-900">{feedback.eyeContact}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⏱</span>
                  <span className="font-medium text-gray-700">Pace</span>
                </div>
                <span className="font-semibold text-gray-900">{feedback.pace} wpm</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💬</span>
                  <span className="font-medium text-gray-700">Filler Words</span>
                </div>
                <span className="font-semibold text-gray-900">{feedback.fillerWords}</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl shadow-sm hover:scale-105 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📝</span>
                  <span className="font-medium text-gray-700">Content</span>
                </div>
                <span className="font-semibold text-gray-900">{feedback.content}</span>
              </div>
            </div>
          </div>
        </div>

        {videoUrl && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Recorded Video:</h2>
              <video
                src={videoUrl}
                controls
                className="w-full max-w-lg rounded-lg shadow"
              />
            </div>
          )}

      </div>
    </main>
  );
}
