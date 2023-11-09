"use client";

import LPH from "@/public/layered-peaks-haikei.svg";
import OCNames from "@/public/namaoc.jpg";
import SUONames from "@/public/namaprk.jpg";
import { Revealist } from "next-reveal";
import Image from "next/image";

const pictures = [
    {
        src: OCNames,
        text: "Hall Of Fame Officer Commanding of Nadim",
    },
    {
        src: SUONames,
        text: "Hall of Fame Senior Under Officer of Nadim",
    },
];

const HallofFame = () => {
    return (
        <>
        <section
            id="gallery"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-orange-700 px-5"
        >
            <h1 className="text-5xl text-slate-100 drop-shadow-lg mb-10">
                Hall of Fame
            </h1>
            <Revealist
                reset={true}
                easing="ease-in-out"
                delay={100}
                interval={100}
                origin="bottom"
                className="flex flex-row flex-wrap gap-2 items-center justify-center"
            >
                {pictures.map((batch, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center rounded-lg drop-shadow-lg border-2 border-solid border-orange-900 relative"
                >
                    <Image
                        src={pictures.src}
                        alt=""
                        className="object-fit relative rounded-lg"
                    />
                    <div className="absolute bottom-5 bg-slate-100 py-1 px-2 rounded-lg flex items-center justify-center drop-shadow-lg ">
                        <p className="text-3xl text-orange-600">{pictures.text}</p>
                    </div>
                </div>
                ))}
            </Revealist>
        </section>
        <Image src={LPH} alt="" className="w-screen"/>
        </>
    );
};

export default HallofFame;