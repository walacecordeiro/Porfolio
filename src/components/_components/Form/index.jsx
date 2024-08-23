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
import { IoLogoWhatsapp } from "react-icons/io";

export default function Form() {
 const [isSending, setSending] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const closeForm = document.getElementById("closeForm");

 const { toast } = useToast();

 function sendEmail(e) {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
   toast({
    variant: "destructive",
    title: "Preencha todos os campos!",
    description: "Preencha com o e-mail que mais usa.",
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
     toast({
      variant: "primary",
      title: "Sua mensagem foi enviada com sucesso!",
      description: "Entrarei em contato em breve.",
      action: <ToastAction altText="Ok entendi">Ok entendi</ToastAction>,
     });
     setName("");
     setEmail("");
     setMessage("");
     setSending(false);
     clickCloseForm();
    })
    .catch((err) => {
     console.log("ERRO: ", err);
     setSending(false);
    });
  }
 }

 function clickCloseForm() {
  if (closeForm) {
   closeForm.click();
  }
 }

 return (
  <>
   {/* Formulário */}
   <form onSubmit={sendEmail} className="flex flex-col">
    <div className="mb-4">
     <Label htmlFor="name">Nome</Label>
     <Input
      type="text"
      id="name"
      placeholder="Seu nome completo"
      onChange={(e) => setName(e.target.value)}
      value={name}
      autoComplete="name"
      className="bg-black/50 border-none focus-visible:ring-primary"
     />
    </div>
    <div className="mb-4">
     <Label htmlFor="email">E-mail</Label>
     <Input
      type="email"
      id="email"
      placeholder="Seu e-mail mais usado"
      onChange={(e) => setEmail(e.target.value)}
      value={email}
      autoComplete="email"
      className="bg-black/50 border-none focus-visible:ring-primary"
     />
    </div>
    <div className="mb-4">
     <Label htmlFor="message">Mensagem</Label>
     <Textarea
      id="message"
      placeholder="Mensagem, feedback, sugestões..."
      onChange={(e) => setMessage(e.target.value)}
      value={message}
      className="resize-none h-36 bg-black/50 border-none focus-visible:ring-primary"
     />
    </div>

    <div className="flex flex-col mt-4 text-center">
     <ButtonPrimary
      type="submit"
      className="self-center"
      innerText={isSending ? "Enviando..." : "Enviar Mensagem"}
     />

     <h6 className="my-2">Ou</h6>

     <Link
      href="https://contate.me/whatsapp-walace"
      target="_blank"
      className="transition-all text-blue-500 hover:text-blue-700"
     >
      <IoLogoWhatsapp className="w-5 h-auto inline-block mr-2 text-inherit" />
      Chamar no WhatsApp
     </Link>
    </div>
   </form>
  </>
 );
}
