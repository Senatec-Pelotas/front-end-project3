import Image from "next/image";
import Header from "@/app/components/Header"
import profile from "@/app/assets/profile.png"
import edit from "@/app/assets/edit.png"

export default function Perfil() {
  return (
    <>
      <Header />
      
      <section className="flex justify-center bg-[#E9FAF2]">
        <div className="flex flex-wrap bg-[#E6E6E6] w-[78.25rem] h-[42.8125rem] rounded-[0.875rem] my-[5rem]">
            <Image src={profile} className="h-[10rem] w-[10rem] mt-[2rem] ml-[6rem]"/>
            <p className="my-[7rem] ml-[2.5rem] text-2xl">[Nome]</p>
            <div className="bg-[#D9D9D9] w-[75.25rem] h-[26.25rem] ml-[1.5rem] mb-[1.5rem] rounded-[0.875rem]">
              {/*Arrumar Botões de Editar*/}
              <div className="">
              <h2 className="ml-[4rem] mt-[4rem] text-2xl w-[15rem]">TELEFONE</h2>
              <p className="ml-[4rem] mt-[1.5rem] text-xl w-[15rem]">(51) 99999-9999 <button className="flex items-center justify-center bg-white w-[6.0625rem] h-[3.375rem] rounded-[0.25rem] ml-[56rem]"><Image src={edit}></Image>Editar</button></p>
              </div>
              <div className="">
              <h2 className="ml-[4rem] mt-[4rem] text-2xl">EMAIL</h2>
              <p className="ml-[4rem]  mt-[1.5rem] text-xl">algumacoisa@gmail.com<button className="flex items-center justify-center bg-white w-[6.0625rem] h-[3.375rem] rounded-[0.25rem] ml-[56rem]"><Image src={edit}></Image>Editar</button></p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}