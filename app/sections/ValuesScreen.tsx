import { RevealList } from "next-reveal";
import Image from "next/image";
import LPH from "../../public/layered-peaks-haikei2.svg";
import NADIMLOGO from "../../public/nadimlogo.png";

const Values = () => {
  return (
    <>
      <section
        id="values"
        className="relative bg-orange-700 min-h-screen flex flex-col items-center justify-center px-5"
      >
        <Image
          src={NADIMLOGO}
          alt=""
          fill
          className="absolute pointer-events-none opacity-5 object-contain"
        />
        <h1 className="text-slate-100 drop-shadow-lg text-5xl mb-5">
          MILITARY VALUES
        </h1>
        <RevealList
          reset={true}
          easing="ease-in-out"
          delay={100}
          interval={100}
          origin="bottom"
          className="flex flex-row flex-wrap items-baseline justify-center gap-5 invisible"
        >
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-lg flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">DUTY</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Fulfillilling your duty involves completing tasks as part of a 
              team, resisting shortcuts to maintain the integrity of the final product.
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">LOYALTY</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Loyal Soldiers in Malaysia embody true faith, allegiance to the Malaysia Constitution,
              and support leadership. Wearing the MALAYSIA Armed Forces uniform and doing your part demonstrates loyalty.
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">
              SELFLESS SERVICE
            </h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Selfless service prioritizes the nation, Army, and subordinates, focusing on loyalty without recognition or gain.
              Each team member commits to going further, endure longer, and contribute to the effort.
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">RESPECT</h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Treat people as they should be treated. In the Soldier&apos;s
              Code, we pledge to “treat others with dignity and respect while
              expecting others to do the same.” Respect is what allows us to
              appreciate the best in other people. Respect is trusting that all
              people have done their jobs and fulfilled their duty. And
              self-respect is a vital ingredient with the Army value of respect,
              which results from knowing you have put forth your best effort.
              The Army is one team and each of us has something to contribute
            </p>
          </div>
          <div className="p-5 bg-orange-800 rounded-lg drop-shadow-md flex flex-col items-center justify-center w-[30%]">
            <h1 className="text-orange-200 text-xl drop-shadow-lg">
              INTEGRITY
            </h1>
            <p className="text-orange-300 text-sm drop-shadow-lg">
              Integrity is a moral quality developed by adhering to principles, 
              requiring no deceitful actions. As integrity grows, trust increases, 
              impacting relationships, self-acceptance, and family and friends
            </p>
          </div>
        </RevealList>
      </section>
      <Image src={LPH} alt="" className="w-screen rotate-180" />
    </>
  );
};

export default Values;
