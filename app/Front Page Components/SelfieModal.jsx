"use client"

import { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function SelfieModal() {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
      };

    return (
        <section className="sm:w-[80vw] sm:h-[80vh] h-[95vh] bg-black bg-opacity-10 relative">
            <div className="absolute w-full flex items-center gap-8 p-4 justify-center">
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
            <div className="overflow-hidden h-full">
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    className="min-w-full max-h-full min-h-full"
                    screenshotFormat="image/jpeg"
                />
            </div>
        </section>
    );
}