import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import React from "react";

export default function Clientes() {
  const temp = [...Array(15)];

  return (
    <>
      <Header />
      <main className="w-[90vw] m-auto mt-5">
        <h1 className="text-2xl">Clientes</h1>

        <div className="flex justify-between text-center h-8 my-3">
          <h2 className="w-[160px] text-left">X Clientes</h2>

          <SearchBar />
          <button className=" bg-primary text-white px-3 py-1 rounded-md">
            + Adicionar Cliente
          </button>
        </div>

        <section className="grid grid-cols-3 gap-2">
          {temp.map(() => {
            return <Cliente />;
          })}
        </section>
      </main>
    </>
  );
}

function Cliente() {
  return (
    <div className="bg-white rounded-md px-4 py-3 shadow-md">
      <div className="flex justify-between">
        <h3>Cliente</h3> <p>(53) 99799-8899</p>
      </div>
      <p>cliente@gmail.com</p>
    </div>
  );
}
