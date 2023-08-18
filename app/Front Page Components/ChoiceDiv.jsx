import Image from "next/image";

export default function ChoiceDiv() {
    return (
        <div className="grid sm:place-items-start place-items-center gap-3 w-fit text-left">
            <div className="sm:p-5 p-3 border-2 rounded-lg border-themeGreen group sm:w-[30rem] w-[20rem] cursor-pointer flex items-center gap-3 hover:scale-[1.025] active:scale-95 select-none hover:bg-themeGreen hover:bg-opacity-5">
                <div className="group-hover:bg-themeGreen p-2 rounded-md w-fit border-2 border-themeGreen">
                    <Image 
                        src={"https://interview.sirv.com/random/picture.png"} 
                        alt="Photo" 
                        className="group-hover:filter group-hover:brightness-0 group-hover:invert sm:w-8 w-5"
                        height={30} 
                        width={30} 
                    />
                </div>
                <div className="grid">
                    <span className="font-semibold">Buisness</span>
                    <span className="opacity-50 text-sm">Buisness</span>
                </div>
            </div>
            <div className="sm:p-5 p-3 border-2 rounded-lg border-themeGreen group sm:w-[30rem] w-[20rem] cursor-pointer flex items-center gap-3 hover:scale-[1.025] active:scale-95 select-none hover:bg-themeGreen hover:bg-opacity-5 shadow-[0_30px_50px_rgb(0,0,0,0.15)]">
                <div className="group-hover:bg-themeGreen p-2 rounded-md w-fit border-2 border-themeGreen">
                    <Image 
                        src={"https://interview.sirv.com/random/clapperboard.png"} 
                        alt="Video" 
                        className="group-hover:filter group-hover:brightness-0 group-hover:invert sm:w-8 w-5"
                        height={30} 
                        width={30} 
                    />
                </div>
                <div className="grid">
                    <span className="font-semibold">Buisness</span>
                    <span className="opacity-50 text-sm">Buisness</span>
                </div>
            </div>
            <div className="rounded-md bg-themeGreen px-6 py-3 my-5 sm:w-fit w-full text-center text-white cursor-pointer hover:scale-[1.025] active:scale-90 select-none">
                Proceed
            </div>
        </div>
    );
}
