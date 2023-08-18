"use client"
import Image from "next/image";
import React, { useState } from "react";
import InstructionsModal from "./InstructionsModal";

export const ChoiceContext = React.createContext();

export default function ChoiceDiv() {
    const [diagnosticType, setDiagnosticType] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const handleProceed = () => {
        if (diagnosticType === 0) {
            return;
        }
        setModalOpen(true);
    }

    return (
        <ChoiceContext.Provider value={{ diagnosticType, setModalOpen, modalOpen }}>
            <div className="grid sm:place-items-start place-items-center gap-3 w-fit text-left shadow-[0_30px_50px_rgb(0,0,0,0.075)] -m-2 p-2 rounded-lg">
                <div onClick={() => setDiagnosticType(1)} className={`sm:p-5 p-3 border-2 rounded-lg border-themeGreen group sm:w-[30rem] w-[20rem] cursor-pointer flex items-center justify-between ${diagnosticType === 1 ? "scale-95 bg-themeGreen bg-opacity-5" : "hover:scale-[1.025] active:scale-95 hover:bg-themeGreen hover:bg-opacity-5"} select-none`}>
                    <div className="flex items-center gap-3">
                        <div className={`${diagnosticType === 1 ? "bg-themeGreen" : "group-hover:bg-themeGreen"} p-2 rounded-md w-fit border-2 border-themeGreen`}>
                            <Image
                                src={"https://interview.sirv.com/random/picture.png"}
                                alt="Photo"
                                className={`${diagnosticType === 1 ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"} sm:w-8 w-5`}
                                height={30}
                                width={30}
                            />
                        </div>
                        <div className="grid">
                            <span className="font-semibold">Selfie Diagnostic</span>
                            <span className="opacity-50 text-sm">Photo</span>
                        </div>
                    </div>

                    <div className={`sm:h-6 h-5 aspect-square rounded-full border border-themeGreen sm:right-5 right-3 bg-white relative ${diagnosticType === 1 ? "after:h-[70%] after:aspect-square after:rounded-full after:bg-themeGreen after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2" : ""}`}></div>
                </div>
                <div onClick={() => setDiagnosticType(2)} className={`sm:p-5 p-3 border-2 rounded-lg border-themeGreen group sm:w-[30rem] w-[20rem] cursor-pointer flex items-center justify-between ${diagnosticType === 2 ? "scale-95 bg-themeGreen bg-opacity-5" : "hover:scale-[1.025] active:scale-95 hover:bg-themeGreen hover:bg-opacity-5"} select-none hover:bg-themeGreen hover:bg-opacity-5`}>
                    <div className="flex items-center gap-3">
                        <div className={`${diagnosticType === 2 ? "bg-themeGreen" : "group-hover:bg-themeGreen"} p-2 rounded-md w-fit border-2 border-themeGreen`}>
                            <Image
                                src={"https://interview.sirv.com/random/clapperboard.png"}
                                alt="Video"
                                className={`${diagnosticType === 2 ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"} sm:w-8 w-5`}
                                height={30}
                                width={30}
                            />
                        </div>
                        <div className="grid">
                            <span className="font-semibold">Live Camera Diagnostic</span>
                            <span className="opacity-50 text-sm">Video</span>
                        </div>
                    </div>

                    <div className={`sm:h-6 h-5 aspect-square rounded-full border border-themeGreen sm:right-5 right-3 bg-white relative ${diagnosticType === 2 ? "after:h-[70%] after:aspect-square after:rounded-full after:bg-themeGreen after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2" : ""}`}></div>
                </div>
                <div className="rounded-md bg-themeGreen px-6 py-3 my-5 sm:w-fit w-full text-center text-white cursor-pointer hover:scale-[1.025] active:scale-90 select-none" onClick={handleProceed}>
                    Proceed
                </div>
                <InstructionsModal />
            </div>
        </ChoiceContext.Provider>
    );
}
