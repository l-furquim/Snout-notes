import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function NewNote(){
  return (
    <div className="flex w-[600px] mt-16 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200 bg-opacity-40">
      <div className="flex w-full justify-start">
        <Textarea className="w-[400px] shadow-md resize-none bg-zinc-300" placeholder={"Titulo"}/>
      </div>
      <div className="flex w-full justify-center">
        <Textarea className="w-full h-24 shadow-md resize-none bg-zinc-300" placeholder={"Conteudo"}/>
      </div>
      <div className="flex justify-end ">
      <Button className="w-28 h-10 bg-neutral-800">Anotar</Button>
      </div>
    </div>
  )
}