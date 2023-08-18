"use client"
import Image from "next/image";
import { useContext } from "react";
import { ModalContext } from "./Modal";
export default function Instructions() {

    const { handleNextPage } = useContext(ModalContext);
    return (
        <section className="sm:w-[30rem]">
            <div className="my-12 flex flex-col gap-3 items-center px-3">
                <span className="text-lg font-light">Get ready to start the Skin analysis</span>
                <span className="text-lg font-bold uppercase">Instructions</span>
                <section className="flex flex-wrap gap-2 w-full">
                    <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                        <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_noglasses_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100} />
                        <span className="sm:text-center text-sm">Take off your glasses and ensure there's no bangs on your forehead.</span>
                    </div>
                    <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                        <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_light_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100} />
                        <span className="sm:text-center text-sm">Make sure that you're in a well-lighted environment.</span>
                    </div>
                    <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                        <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_nomakeup_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100} />
                        <span className="sm:text-center text-sm">Testing with no-makeup will get more accurate results.</span>
                    </div>
                    <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                        <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_position_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100} />
                        <span className="sm:text-center text-sm">Looking straight to the camera and keep your face in the circle.</span>
                    </div>
                </section>
            </div>
            <div onClick={handleNextPage} className="p-3 bg-black text-white rounded-lg uppercase text-center m-1 active:scale-95 cursor-pointer select-none">
                Get Started
            </div>
        </section>
    )
}