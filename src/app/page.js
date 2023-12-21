import Header from "./components/Header";
import pig from "./assets/Union.png";
import moneyIcon from "./assets/money-icon.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-[90vw] m-auto mt-5">
        <h1 className="text-2xl mb-4">Dashboard</h1>

        <section className="grid grid-cols-3 gap-x-4">
          <div className="bg-white flex justify-between px-4 py-3 rounded-md shadow-md">
            <div>
              <h3 className="text-lg ">Faturamento</h3>
              <h2 className="text-xl">R$ 50.600,00</h2>
              <p>+24$ vs. mês anterior</p>
            </div>

            <Image src={pig} alt="" />
          </div>

          <div className="bg-white flex justify-between px-4 py-3 rounded-md shadow-md">
            <div>
              <h3 className="text-lg">Custos</h3>
              <h2 className="text-xl">R$ 12.345,67</h2>
              <p>-2,0% vs mês anterior</p>
            </div>

            <Image src={moneyIcon} alt="" />
          </div>

          <div className="bg-white flex justify-between px-4 py-3 rounded-md shadow-md">
            <div>
              <h3 className="text-lg">Alguma coisa</h3>
              <h2 className="text-xl">R$ 28.600,00</h2>
              <p>+26$ vs. mês anterior</p>
            </div>

            <Image src={moneyIcon} alt="" />
          </div>
        </section>
      </main>
    </>
  );
}
