import React, { useContext, useState } from "react";
import { ChoiceContext } from "./ChoiceDiv";
import Instructions from "./Instructions";
import SelfieModal from "./SelfieModal";

import { FaAngleLeft } from "react-icons/fa6";

export const ModalContext = React.createContext();

export default function Modal() {
    const { modalOpen, diagnosticType, setModalOpen } = useContext(ChoiceContext);
    const [currentPage, setCurrentPage] = useState(0);

    const handleClose = () => {
        setModalOpen(false);
    }

    const handleNextPage = () => {
        setCurrentPage(1);
    }

    return (
        <ModalContext.Provider value={{ handleNextPage }}>
            <div className="fixed top-0 left-0 h-screen w-screen z-20 grid sm:place-items-center place-items-end coverHandle">
                <div className="absolute top-0 left-0 bg-black bg-opacity-30 backdrop-blur-[2px] h-full w-full" onClick={handleClose}></div>

                <div className={`${modalOpen ? "openModal" : "closeModal"} sm:w-fit min-w-[20rem] sm:rounded-md sm:shadow-2xl w-full sm:h-fit rounded-t-3xl bg-white`}>
                    <div className="w-full p-2 text-lg shadow-md grid grid-cols-[32px_auto_32px] items-center">
                        <span className="bg-black bg-opacity-5 text-center sm:rounded-md rounded-tr-xl rounded-md cursor-pointer active:scale-75 active:opacity-50 select-none aspect-square w-full grid place-items-center" onClick={handleClose}>
                            <FaAngleLeft />
                        </span>
                        <span className="text-center font-semibold text-themeGreen uppercase">Alpha AI</span>
                        <span className="bg-black bg-opacity-5 text-center sm:rounded-md rounded-tr-xl rounded-md cursor-pointer active:scale-75 active:opacity-50 select-none" onClick={handleClose}>x</span>
                    </div>

                    {currentPage === 0 && <Instructions />}
                    {currentPage === 1 && <SelfieModal />}
                </div>
            </div>
        </ModalContext.Provider>
    )
}
