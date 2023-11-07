"use client";

import NADIMLOGO from "@/public/nadimlogo.png";
import namaoc from "@/public/namaoc.jpg";
import namaprk from "@/public/namaprk.jpg";
import Image from "next/image";
import LPH from "../../public/layered-peaks-haikei2.svg";

const image = [
    {
        src : namaoc,
        Text : "nama-nama oc",
    },
    {
        src : namaprk,
        Text : "nama-nama prk",
    },
];

const History = () => {
    return (
    <>
        <section
        id="history"
        className="relative bg-orange-700 min-h-screen flex flex-col items-center justify-center px-5"
        >
        <Image
        src={NADIMLOGO}
        alt=""
        fill
        className="absolute pointer-events-none opacity-5 object-contain"
        />
        <h1 className="text-slate-100 drop-shadow-lg text-5xl mb-5">
        LATAR BELAKANG
        </h1>
        <div>
            <p className="text-orange-300 text-center">
                Kompeni Hang Nadim ditubuhkan pada 2017 hasil pecahan daripada batalion Jebat.
                Pada tahun ini kompeni Hang Nadim sudah 5 tahun bertapak di ALK dan banyak
                kejayaan demi kejayaan yang sudah dicapai. Antara yang tertinggi adalah menjadi
                johan bagi pertadingan bola sepak antara kompeni 2 tahun berturut-turut pada tahun 2018.
            </p>
        </div>
        {images.map((batch, index)= > (
            <div
            key={index}
            className="absolute pointer-events-none opacity-5 object-contain"
            >
            <image
                src = {batch.src}
                alt = ""
                fill
                className ="absolute pointer-events-none opacity-5 object-contain"
            />
            </div>
        ))}
        </section>
    <image src={LPH} alt="" className="w-screen rotate-180" />
    </>
);
};

export default History;
