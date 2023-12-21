"use client";

import { useState } from "react";
import Image from "next/image";
import profileIcon from "../assets/profile-icon.png";
import xIcon from "../assets/x-icon.png";
import React from "react";

function AddPerson({ onSetIsOverlayOpen, children }) {
  return (
    <>
      <dialog
        open
        className=" shadow-md px-10 py-8 gap-2 rounded-lg top-[30vh] backdrop:bg-purple-900 w-[600px]"
      >
        <div className="flex justify-end mb-2">
          <Image
            src={xIcon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() => onSetIsOverlayOpen(false)}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          <div>{children}</div>
          <div className="flex flex-col items-center">
            <Image
              src={profileIcon}
              alt=""
              className="border-2 border-gray rounded-md"
            />
            <p className="text-xs">Nenhum arquivo selecionado</p>
            <button className="bg-[#dfdfdf] py-1 px-3 text-sm rounded-md">
              Upload
            </button>
          </div>
        </div>
        <div className="text-right">
          <button className="bg-primary rounded-md text-sm text-white px-3 py-1 mt-5">
            + Cadastrar
          </button>
        </div>
      </dialog>
    </>
  );
}

export default AddPerson;
