import Header from "@/app/components/Header";
import React from "react";
import Image from "next/image";
import box from "@/app/assets/box.png"

function Vendas() {
  return (
    <>
      <Header />
      <main>
          <h1 className="text-[#5C3E3E] ml-[15rem] mt-[6rem] text-4xl">Vendas</h1>
        <section className="flex">
          <div className="bg-white w-[18.9375rem] h-[24.875rem] border-2 ml-[10rem] mt-[5rem] ">
            <Image src={box}className="ml-[6.3rem] mt-[2rem]"></Image>
            <h1 className="ml-[6.5rem] mt-[1rem] text-xl">Produto 1</h1>
            <h2 className="ml-[5.7rem] mt-[1rem] text-xl">30 unidades</h2>
            <h2 className="mt-[9rem] text-xl">Tipo: Arroz</h2>
          </div>
          <div>
            <div className="bg-white w-[31.6875rem] h-[5.9375rem] ml-[10rem] mt-[5rem] shadow-xl">
              <h1 className="text-[#5C3E3E] text-3xl ml-[0.5rem] pt-[0.5rem]">Cliente (53) 99999-9999</h1>
              <h2 className="text-[#5C3E3E] text-2xl ml-[0.5rem] mt-[0.4rem]">cliente@gmail.com</h2>
            </div>
            <div className="bg-white w-[31.6875rem] h-[5.9375rem] ml-[10rem] mt-[3rem] shadow-xl">
              <h1 className="text-[#5C3E3E] text-3xl ml-[0.5rem] pt-[0.5rem]">Cliente (53) 99999-9999</h1>
              <h2 className="text-[#5C3E3E] text-2xl ml-[0.5rem] mt-[0.4rem]">cliente@gmail.com</h2>
            </div>
            <div className="bg-white w-[31.6875rem] h-[5.9375rem] ml-[10rem] mt-[3rem] shadow-xl">
              <h1 className="text-[#5C3E3E] text-3xl ml-[0.5rem] pt-[0.5rem]">Cliente (53) 99999-9999</h1>
              <h2 className="text-[#5C3E3E] text-2xl ml-[0.5rem] mt-[0.4rem]">cliente@gmail.com</h2>
            </div>
          </div>
       </section>
      </main>
    </>
  );
}

export default Vendas;
