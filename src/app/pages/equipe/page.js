"use client";

import Header from "@/app/components/Header";
import SearchBar from "@/app/components/SearchBar";
import React, { useState } from "react";
import profileIcon from "../../assets/profile-icon.png";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import AddPerson from "@/app/components/AddPerson";

export default function Equipe() {
  const temp = [...Array(12)];

  const [IsOverlayOpen, SetIsOverlayOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="w-[90vw] m-auto mt-5">
        <h1 className="text-2xl mb-4">Equipe</h1>

        <div className="flex justify-between text-center h-8 my-3">
          {/* Make it so the button and this h2 element are the same width throughout every page, so that searchbar is centered regardless */}
          <h2 className="w-[199px] text-left">X Funcionários</h2>

          <SearchBar />
          <button
            className=" bg-primary text-white px-3 py-1 rounded-md"
            onClick={() => {
              SetIsOverlayOpen(!IsOverlayOpen);
            }}
          >
            + Adicionar Funcionário
          </button>
        </div>
        <section className="grid grid-cols-3 gap-4">
          {temp.map((i = 0) => {
            i++;
            return <Funcionario key={i} />;
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
              <label htmlFor="">Cargo</label>
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

            <div className="flex flex-wrap">
              <label htmlFor="">Data de Nascimento</label>
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

function Funcionario() {
  return (
    <div className="bg-white w-full px-4 py-2 rounded-md flex ">
      <Image
        src={profileIcon}
        alt=""
        className="border border-gray rounded-xl"
        width={100}
      />
      <div className="h-full flex flex-col justify-center gap-y-3 mx-4">
        <h3 className="text-xl font-semibold">Funcionário</h3>
        <p className="text-lg">Assistente de Logística</p>
      </div>
    </div>
  );
}
