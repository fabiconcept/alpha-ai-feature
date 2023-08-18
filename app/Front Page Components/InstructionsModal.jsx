import Image from "next/image";
import { useContext } from "react";
import { ChoiceContext } from "./ChoiceDiv";

export default function InstructionsModal() {
    const { modalOpen, diagnosticType, setModalOpen } = useContext(ChoiceContext);

    const handleClose = () =>{
        setModalOpen(false);
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-20 grid sm:place-items-center place-items-end coverHandle">
            <div className="absolute top-0 left-0 bg-black bg-opacity-20 backdrop-blur-[2px] h-full w-full" onClick={handleClose}></div>

            <div className={`${modalOpen ? "openModal": "closeModal"} sm:w-[30rem] sm:rounded-md sm:shadow-2xl w-full sm:h-fit rounded-t-3xl bg-white`}>
                <div className="w-full p-2 text-lg shadow-md grid grid-cols-[auto_32px] items-center">
                    <span className="text-center font-semibold text-themeGreen uppercase">Alpha AI</span>
                    <span className="bg-black bg-opacity-5 text-center sm:rounded-md rounded-tr-xl rounded-md cursor-pointer active:scale-75 active:opacity-50 select-none" onClick={handleClose}>x</span>
                </div>

                <div className="my-12 flex flex-col gap-3 items-center px-3">
                    <span className="text-lg font-light">Get ready to start the Skin analysis</span>
                    <span className="text-lg font-bold uppercase">Instructions</span>
                    <section className="flex flex-wrap gap-2 w-full">
                        <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                            <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_noglasses_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100}/>
                            <span className="sm:text-center text-sm">Take off your glasses and ensure there's no bangs on your forehead.</span>
                        </div>
                        <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                            <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_light_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100}/>
                            <span className="sm:text-center text-sm">Make sure that you're in a well-lighted environment.</span>
                        </div>
                        <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                            <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_nomakeup_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100}/>
                            <span className="sm:text-center text-sm">Testing with no-makeup will get more accurate results.</span>
                        </div>
                        <div className="sm:min-w-[10rem] hover:bg-black hover:bg-opacity-5 cursor-default select-none hover:scale-[1.015] min-w-[20rem] flex-1 p-2 rounded-md border border-black flex sm:flex-col items-center gap-3">
                            <Image src={"https://interview.sirv.com/random/ico_skincarewcm_service_position_dark.png"} alt="" className="sm:w-16 w-12" width={100} height={100}/>
                            <span className="sm:text-center text-sm">Looking straight to the camera and keep your face in the circle.</span>
                        </div>
                    </section>
                </div>
                <div className="p-3 bg-black text-white rounded-lg uppercase text-center m-1 active:scale-95 cursor-pointer select-none">
                    Get Started
                </div>
            </div>
        </div>
    )
}
