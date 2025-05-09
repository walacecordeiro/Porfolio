// "use client";

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ButtonPrimary from "../ButtonPrimary";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Form() {
 const [isSending, setSending] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");

 const { toast } = useToast();
 const router = useRouter();

 function sendEmail(e) {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
   toast({
    variant: "destructive",
    title: "Preencha todos os campos!",
    description: "Use o e-mail que você mais utiliza.",
    action: <ToastAction altText="Ok entendi">Ok</ToastAction>,
   });
   return;
  } else {
   setSending(true);

   const templateParams = {
    from_name: name,
    email: email,
    message: message,
   };

   emailjs
    .send("service_va3czvz", "template_mbnlzb3", templateParams, "YKPKbHpb5Is_YTqTW")
    .then(() => {
     router.push("/projetos");
     toast({
      variant: "primary",
      title: "Mensagem enviada, Entrarei em contato em breve!",
      description: "Continue navegando e conhecendo mais minhas habilidades.",
      action: (
       <ToastAction
        altText="Ok entendi"
        onClick={() => {
         router.push("/contato");
        }}
       >
        Enviar outra
       </ToastAction>
      ),
     });
     setName("");
     setEmail("");
     setMessage("");
     setSending(false);
    })
    .catch((err) => {
     console.log("ERRO: ", err);
     setSending(false);
    });
  }
 }

 return (
  <>
   {/* Formulário */}
   <form onSubmit={sendEmail} className="flex flex-col">
    <div className="   flex flex-col gap-2 mb-4">
     <Label htmlFor="name" className="text-black_white">Nome</Label>
     <Input
      type="text"
      id="name"
      placeholder="Seu nome completo"
      onChange={(e) => setName(e.target.value)}
      value={name}
      autoComplete="name"
      className="bg-black_white/5 text-black_white border-none focus-visible:ring-primary"
     />
    </div>
    <div className="flex flex-col gap-2 mb-4">
     <Label htmlFor="email" className="text-black_white">E-mail</Label>
     <Input
      type="email"
      id="email"
      placeholder="Seu e-mail mais usado"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      autoComplete="email"
      className="bg-black_white/5 text-black_white border-none focus-visible:ring-primary"
     />
    </div>
    <div className="flex flex-col gap-2 mb-4">
     <Label htmlFor="message" className="text-black_white">Mensagem</Label>
     <Textarea
      id="message"
      placeholder="Mensagem, feedback, sugestões..."
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      className="resize-none h-36 bg-black_white/5 text-black_white border-none focus-visible:ring-primary"
     />
    </div>

    <div className="flex flex-col items-center justify-center gap-4 mt-4 text-black_white-foreground lg:flex-row lg:justify-between">
     <ButtonPrimary
      type="submit"
      className="self-center"
      innerText={isSending ? "Enviando..." : "Enviar Mensagem"}
     />
     Ou
     <Link
      href="https://wa.me/5521971650722"
      target="_blank"
      className="flex items-center gap-2 transition-all text-primary/80 hover:text-primary hover:scale-105"
     >
      <IoLogoWhatsapp className="w-5 h-auto inline-block text-inherit" />
      Chamar no WhatsApp
     </Link>
    </div>
   </form>
  </>
 );
}
