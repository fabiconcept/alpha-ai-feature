"use client"

import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function LiveVideoModal() {
    const webcamRef = useRef(null);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [videoBlob, setVideoBlob] = useState(null);

    const startRecording = () => {
        setVideoBlob("");
        const stream = webcamRef.current.stream;
        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                setVideoBlob(event.data);
            }
        };

        mediaRecorder.start();
        setRecording(true);
        setMediaRecorder(mediaRecorder);
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const capture = () => {
        if (recording) {
            stopRecording();
            return;
        }
        startRecording();
    }

    return (
        <section className="sm:w-[80vw] sm:h-[80vh] h-[95vh] bg-black bg-opacity-10 relative">
            <div className="absolute w-full flex items-center gap-8 p-4 justify-center z-10">
                <div className="grid place-items-center py-2 px-3 rounded-md bg-red-500 text-white">
                    <span className="sm:text-base text-sm font-semibold">Lighting</span>
                    <span className="sm:text-sm text-xs">Not Good</span>
                </div>
                <div className="grid place-items-center py-2 px-3 rounded-md bg-red-500 text-white">
                    <span className="sm:text-base text-sm font-semibold">Look Straight</span>
                    <span className="sm:text-sm text-xs">Not Good</span>
                </div>
                <div className="grid place-items-center py-1 px-3 rounded-md bg-red-500 text-white">
                    <span className="sm:text-base text-sm font-semibold">Face Position</span>
                    <span className="sm:text-sm text-xs">Not Good</span>
                </div>
            </div>
            <div className="overflow-hidden h-full relative">
                {videoBlob && <div className="absolute top-2 left-2 border border-themeGreen z-10">
                    <video controls height={250} width={250}>
                        <source src={URL.createObjectURL(videoBlob)} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>}
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    className="min-w-full max-h-full min-h-full relative webCam"
                    screenshotFormat="image/jpeg"
                />

                <div onClick={capture} className={`absolute h-10 w-10 rounded-full bg-red-500 cursor-pointer z-10 left-1/2 -translate-x-1/2 bottom-6  active:before:scale-90 before:rounded-full before:absolute before:bg-red-500 before:bg-opacity-50 before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 ${recording ? "before:animate-pulse before:h-16 before:w-16" : ""}`}></div>
            </div>
        </section>
    );
}