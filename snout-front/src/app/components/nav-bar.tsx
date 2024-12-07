import { usePathname } from "next/navigation";

export default function NavBar(){
  function getActualPage (){
    const url = usePathname();
  
    console.log(url)
    
    if(url == "/notes"){
      return (
        <>
          <div className="w-full ml-20 flex justify-start">
            <h3 className="hover:cursor-pointer hover:text-zinc-400">Snout Notes</h3>
          </div>
          <div className="w-full mr-20 gap-10 flex justify-end">
            <h3 className="text-zinc-400 hover:cursor-pointer ">Notas</h3>
            <h3 className="hover:cursor-pointer hover:text-zinc-400">Lembretes</h3>
            <h3 className="hover:cursor-pointer hover:text-zinc-400">Perfil</h3>
          </div>
        </>
      )
    }
    if(url == "/reminder"){
      return (
        <>
            <div className="w-full ml-20 flex justify-start">
              <h3 className="hover:cursor-pointer hover:text-zinc-400">Snout Notes</h3>
            </div>
            <div className="w-full mr-20 gap-10 flex justify-end">
              <h3 className="hover:cursor-pointer hover:text-zinc-400">Notas</h3>
              <h3 className="text-zinc-400 hover:cursor-pointer">Lembretes</h3>
              <h3 className="hover:cursor-pointer hover:text-zinc-400">Perfil</h3>
            </div>
          </>
      )
    }
    return (
      <>
      <div className="w-full ml-20 flex justify-start">
        <h3>Snout Notes</h3>
      </div>
      <div className="w-full mr-20 gap-10 flex justify-end">
        <h3>Notas</h3>
        <h3>Lembretes</h3>
        <h3 className="text-zinc-400">Perfil</h3>
      </div>
    </>
    )
  
  }
  
  return (
    <div className="flex bg-neutral-800 w-full h-16 justify-center items-center font-bold text-zinc-200">
      {getActualPage()}
    </div>
  )
}