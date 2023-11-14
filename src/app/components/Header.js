import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo-arrozeira.png";
import userPicture from "../assets/foto-perfil.png";

function Header() {
  return (
    <header className="bg-white flex items-center justify-between px-5 py-4 text-lg font-medium">
      <Image src={logo} className="w-40" />

      <nav className="flex gap-4">
        <Link href="/">Dashboard</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/vendas">Vendas</Link>
        <Link href="/clientes">Clientes</Link>
        <Link href="/equipe">Equipe</Link>
        <Link href="/estoque">Estoque</Link>
        <Link href="/comissoes">Comissões</Link>
        <Link href="/relatorios">Relatórios</Link>
      </nav>

      <div className="flex items-center">
        <Image src={userPicture} className="w-8 mr-2" />
        <p>Fulano de Tal</p>
      </div>
    </header>
  );
}

export default Header;
