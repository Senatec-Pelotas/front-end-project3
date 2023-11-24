import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-arrozeira.png";

import UserMenu from "./UserMenu";

function Header() {
  return (
    <header
      className="bg-white flex items-center justify-between px-5 py-3
 text-base font-medium"
    >
      <Link href="/">
        <Image src={logo} className="w-36" />
      </Link>

      <nav className="flex gap-4">
        <Link
          href="/"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Dashboard
        </Link>
        <Link
          href="../pages/produtos"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Produtos
        </Link>
        <Link
          href="../pages/vendas"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Vendas
        </Link>
        <Link
          href="../pages/clientes"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Clientes
        </Link>
        <Link
          href="../pages/equipe"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Equipe
        </Link>
        <Link
          href="../pages/estoque"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Estoque
        </Link>
        <Link
          href="../pages/comissoes"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Comissões
        </Link>
        <Link
          href="../pages/relatorios"
          className="hover:text-green-600 ease-in-out duration-300"
        >
          Relatórios
        </Link>
      </nav>

      <UserMenu />
    </header>
  );
}

export default Header;
