"use client";

import NADIMLOGO from "@/public/nadimlogo.png";
import Image from "next/image";
import LPH from "../../public/layered-peaks-haikei2.svg";

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

        <div className="flex-1 flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl text-white drop-shadow-lg mb-3 text-center">senarai nama prk</h1>
            <RevealList
                reset={true}
                easing="ease-in-out"
                delay={100}
                interval={100}
                origin="bottom"
                className="text-left space-y-2 drop-shadow-lg invisible"
            >
                <div>
                    <style>
                        table, th, td{
                            border:1px solid black;
                        }
                    </style>
                    <table style="width:100%">
                        <tr>
                            <th>name</th>
                            <th>period</th>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </RevealList>
        </div>
        </section>
    <Image src={LPH} alt="" className="w-screen rotate-180" />
    </>
);
};

export default History;
