export default function InstructionsModal() {
    return (
        <div className="fixed top-0 left-0 h-screen w-screen z-20">
            <div className="bg-black bg-opacity-20 backdrop-blur-[2px] h-full w-full"></div>
            <div className="absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 left-0 bottom-0 translate-y-0 sm:w-[30rem] sm:rounded-md sm:shadow-2xl w-full sm:h-fit rounded-t-3xl h-[calc(100vh-5rem)] bg-white">
                <div className="w-full p-2 text-lg shadow-md grid grid-cols-[auto_32px] items-center">
                    <span className="text-center font-semibold text-themeGreen uppercase">Alpha AI</span>
                    <span className="bg-black bg-opacity-5 text-center rounded-md cursor-pointer active:scale-90 select-none">x</span>
                </div>

                <div className="my-12 flex flex-col gap-3 items-center px-3">
                    <span className="text-lg font-light">Get ready to start the Skin analysis</span>
                    <span className="text-lg font-bold uppercase">Instructions</span>
                    <section className="flex flex-wrap gap-2 w-full">
                        <div className="sm:min-w-[10rem] min-w-[18rem] flex-1 p-2 rounded border border-black"></div>
                        <div className="sm:min-w-[10rem] min-w-[18rem] flex-1 p-2 rounded border border-black"></div>
                    </section>
                    <div className="w-full p-3 bg-black text-white rounded-sm text-lg uppercase">
                        Get Started
                    </div>
                </div>
            </div>
        </div>
    )
}
