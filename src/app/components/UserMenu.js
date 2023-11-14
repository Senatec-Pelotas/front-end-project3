"use client";

import userPicture from "../assets/foto-perfil.png";
import { useState } from "react";
import Image from "next/image";

import React from "react";

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <Image src={userPicture} className="w-8 mr-2" />
        <p>Fulano de Tal</p>
      </div>

      {isMenuOpen ? (
        <dialog
          open
          className="flex flex-col justify-center border border-[#C8C8C8] w-48 h-24 gap-2 rounded-lg right-[-86vw] top-[11vh] backdrop:bg-purple-900 "
        >
          <button className="hover:text-green-600 ease-in-out duration-300">
            Sair
          </button>
          <hr className="text-[#C8C8C8]" />
          <button className="hover:text-green-600 ease-in-out duration-300">
            Opções
          </button>
        </dialog>
      ) : (
        ""
      )}
    </>
  );
}

export default UserMenu;
