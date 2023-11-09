"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import OCNames from "@/public/namaoc.jpg";
import SUONames from "@/public/namaprk.jpg";
import { RevealList } from "next-reveal";
import Image from "next/image";

const pictures = [
    {
        src: OCNames,
        alt: "namaoc",
    },
    {
        src: SUONames,
        alt: "namaprk",
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
                Hall of Fame Officer Commanding and Senior under officer of Nadim
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
                    className="flex items-center w-64 h-48 justify-center rounded-lg drop-shadow-lg border-2 border-solid border-orange-900 relative"
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