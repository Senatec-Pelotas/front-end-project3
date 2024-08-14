"use client";

import AddPerson from "@/app/components/AddPerson";
import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import Link from "next/link";
import React, { useState } from "react";

export default function Clientes() {
  const temp = [...Array(15)];

  const [IsOverlayOpen, SetIsOverlayOpen] = useState(false);
  return (
    <>
      <Header />
      <main className="w-[90vw] m-auto mt-5">
        <h1 className="text-2xl mb-4">Clientes</h1>

        <div className="flex justify-between text-center h-8 my-3">
          <h2 className="w-[160px] text-left">X Clientes</h2>

          <SearchBar />
          <button
            onClick={() => SetIsOverlayOpen(!IsOverlayOpen)}
            className=" bg-primary text-white px-3 py-1 rounded-md"
          >
            Adicionar Cliente
          </button>
        </div>

        <section className="grid grid-cols-3 gap-2">
          {temp.map((i) => {
            return <Cliente key={i} />;
          })}
        </section>
      </main>

      {IsOverlayOpen ? (
        <AddPerson onSetIsOverlayOpen={SetIsOverlayOpen}>
          <form action="">
            <div className="flex flex-wrap mb-[6px]">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                className="w-full outline-none text-sm bg-gray rounded-md py-[2px] px-2"
              />
            </div>

            <div className="flex flex-wrap mb-[6px]">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="w-full outline-none text-sm bg-gray rounded-md py-[2px] px-2"
              />
            </div>

            <div className="flex flex-wrap mb-[6px]">
              <label htmlFor="">Endereço</label>
              <input
                type="text"
                className="w-full outline-none text-sm bg-gray rounded-md py-[2px] px-2"
              />
            </div>

            <div className="flex flex-wrap mb-[6px]">
              <label htmlFor="">Telefone</label>
              <input
                type="text"
                className="w-full outline-none text-sm bg-gray rounded-md py-[2px] px-2"
              />
            </div>
          </form>
        </AddPerson>
      ) : (
        ""
      )}
    </>
  );
}

function Cliente() {
  return (
    <Link
      href={"./clientes/client_details"}
      className="bg-white rounded-md px-4 py-3 shadow-md"
    >
      <div className="flex justify-between">
        <h3>Empresa</h3> <p>(53) 99799-8899</p>
      </div>
      <p>cliente@gmail.com</p>
    </Link>
  );
}
