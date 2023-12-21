import Header from "@/app/components/Header";
import Link from "next/link";

export default function ClientDetails() {
  return (
    <>
      <Header />

      <main className="w-[90vw] m-auto mt-5">
        <div className="text-2xl mb-4 flex">
          <Link href="../clientes">&larr;</Link>
          <h1 className="ml-2 mt-[2px]">Cliente 1</h1>
        </div>

        <section className="flex justify-center mt-12">
          <div className="grid grid-cols-2 w-[600px] h-[400px]">
            <div className="flex flex-col gap-y-8">
              <div>
                <h2 className="text-xl uppercase">Nome</h2>
                <p>Cliente 1</p>
              </div>
              <div>
                <h2 className="text-xl uppercase">Email</h2>
                <p>cliente1@gmail.com</p>
              </div>
              <div>
                <h2 className="text-xl uppercase">Endereço</h2>
                <p>Anchieta 1, Pelotas - RS</p>
              </div>
              <div>
                <h2 className="text-xl uppercase">Telefone</h2>
                <p>(53) 99999-9999</p>
              </div>
              <div>
                <h2 className="text-xl uppercase">Nascimento</h2>
                <p>01/02/87</p>
              </div>
            </div>
            <div className="bg-[#D9D9D9] flex justify-center items-center rounded-r-md">
              [Dados de Conta]
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
