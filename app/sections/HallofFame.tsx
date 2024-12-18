"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import OCNames from "@/public/oc.jpg";
import SUONames from "@/public/prk.jpg";
import { RevealList } from "next-reveal";
import Image from "next/image";

const pictures = [
    {
        src: OCNames,
        alt: "oc",
    },
    {
        src: SUONames,
        alt: "prk",
    },
];

const HallofFame = () => {
    return (
        <>
        <section
            id="gallery"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
        >
            <h1 className="text-3xl text-slate-50 text-center drop-shadow-lg mb-10">
                Hall of Fame <span className="text-orange-500 drop-shadow-lg">Officer Commanding</span> and <span className="text-orange-500 drop-shadow-lg">Senior under officer</span> of Nadim
            </h1>
            <RevealList
                reset={true}
                easing="ease-in-out"
                delay={100}
                interval={100}
                origin="bottom"
                className="flex flex-row flex-wrap gap-2 items-center justify-center"
            >
                {pictures.map((pictures, index) => (
                <div
                    key={index}
                    className="flex items-center w-80 h-58 justify-center rounded-lg drop-shadow-lg border-2 border-solid border-orange-900 relative"
                >
                    <Image
                        src={pictures.src}
                        alt=""
                        className="object-fit relative rounded-lg"
                    />
                </div>
                ))}
            </RevealList>
        </section>
        <Image src={LPH} alt="" className="w-screen"/>
        </>
    );
};

export default HallofFame;