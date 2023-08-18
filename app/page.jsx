import Image from "next/image";
import ChoiceDiv from "./Front Page Components/ChoiceDiv";

export default function Home() {
    return (
        <div className="grid md:grid-cols-[450px_auto] grid-cols-1 h-screen w-screen">
            <div className="bg-themeGreen text-white p-12 md:block hidden">
                <div className="font-semibold text-lg uppercase">Alpha AI</div>
            </div>

            <div className="relative flex flex-col gap-4 sm:items-start items-center justify-center sm:p-12 p-6 sm:text-left text-center">
                <div className="font-semibold text-lg uppercase md:top-12 top-10 md:left-12 left-8 absolute text-themeGreen md:hidden">Alpha AI</div>
                <div className="rounded-md bg-themeGreen bg-opacity-5 p-2 w-fit select-none">
                    <Image 
                        src={"https://interview.sirv.com/random/artificial-intelligence.png"} 
                        alt="Video" 
                        className="group-hover:filter group-hover:brightness-0 group-hover:invert sm:w-6 w-5"
                        height={30} 
                        width={30} 
                    />
                </div>
                <span className="font-semibold sm:text-2xl text-xl">Choose your account type</span>
                <span className="opacity-50 text-sm max-w-md">It is a long established fact that a reader will be distracted by the readable content of a page.</span>
                <ChoiceDiv />
            </div>
        </div>
    );
}