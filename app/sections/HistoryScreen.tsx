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
        <h1 className="text-slate-100 drop-shadow-lg text-5xl mb-5 text-center">
        LATAR BELAKANG
        </h1>
        <div>
            <p className="text-orange-300 text-center"> 
            Asal mula nama Kompeni Hang Nadim berkait rapat dengan kisah seorang pahlawan Melayu bernama Hang Nadim. Hang Nadim dikenal sebagai seorang yang bijak dan berwawasan tinggi dalam komuniti Melayu, dan kebijaksanaannya telah mengilhami penamaan kompeni ini.
            Legenda Hang Nadim bermula pada zaman dahulu, di mana beliau merupakan seorang anak muda yang cerdik dan gigih dalam mengejar ilmu. Ketika belajar di dalam sebuah pondok, Hang Nadim menyedari kepentingan pendidikan dan pengetahuan dalam membangunkan masyarakat.
            Namun, kisah Hang Nadim tidak terhenti di sana. Beliau juga dikenal kerana keberaniannya dalam melawan ketidakadilan dan ketidaksetiaan. Suatu hari, beliau membongkar rahsia yang merugikan rakyat dan berjuang untuk keadilan. Namanya pun menjadi sinonim dengan keberanian dan ketegasan.
            Sebagai penghormatan kepada warisan dan semangat Hang Nadim, ketika Kompeni Hang Nadim ditubuhkan pada tahun 2017, nama ini dipilih untuk mencerminkan nilai-nilai keberanian, kebijaksanaan, dan semangat juang yang menjadi inspirasi bagi anggota kompeni ini. Setiap tindakan dan kejayaan Kompeni Hang Nadim dianggap sebagai sambungan dari warisan pahlawan Melayu yang dihormati ini.
            </p>
            <p className="text-orange-300 text-center">
                Kompeni Hang Nadim ditubuhkan pada 2017 hasil pecahan daripada batalion Jebat.
                Pada tahun ini kompeni Hang Nadim sudah 5 tahun bertapak di ALK dan banyak
                kejayaan demi kejayaan yang sudah dicapai. Antara yang tertinggi adalah menjadi
                johan bagi pertadingan bola sepak antara kompeni 2 tahun berturut-turut pada tahun 2018.
            </p>
        </div>
        </section>
    <Image src={LPH} alt="" className="w-screen rotate-180" />
    </>
);
};

export default History;
