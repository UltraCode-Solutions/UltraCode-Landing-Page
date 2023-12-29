import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full h-screen">
        <img src='background-contact.jpg' 
        alt='Fondo de Contacto'
        className="w-full h-full object-cover absolute top-0 left-0"
        />
        <Form/>
    </section>
  )
};

export default Contact;
