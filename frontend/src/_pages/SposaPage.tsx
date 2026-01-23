"use client";
import Button from "../components/ui/Button/Button";
import Paragraph from "../components/ui/Paragraph/Paragraph";
import Title from "../components/ui/Title/Title";
import styles from "./Sposa.module.css";
import spose_1 from "@/public/images/spose_1.jpeg";
import spose_2 from "@/public/images/spose_2.jpeg";
import spose_3 from "@/public/images/spose_3.jpeg";
import spose_4 from "@/public/images/spose_4.jpeg";
import spose_5 from "@/public/images/spose_5.jpeg";
import eli_01 from "@/public/images/elisley_01.png";
import sposa from "@/public/images/header_service.jpg";

import FormField from "../components/Form/FormField/FormField";
import RadioGroup from "../components/Form/RadioGroup/RadioGroup";
import Modal from "../components/ui/Modal/modal";

import Intro from "../components/Intro/Intro";
import Image from "next/image";
import ServiceItem from "./ServiceItem";
import Feedback from "../components/Feedback/Feedback";

import { useState } from "react";
import {
  isValidEmail,
  isValidPhone,
  isFutureDate,
  isValidTime,
} from "@/src/utils/validators";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
  contact: string;
  time: string;
  location: string;
  weddingPlanner: string;
  photographer: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  message: "",
  contact: "",
  time: "",
  location: "",
  weddingPlanner: "",
  photographer: "",
};

export default function Sposa() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<FormState & { contactInfo: string }>
  >({});
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "");
    }
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Inserisci nome e cognome";
    }

    if (form.phone && !isValidPhone(form.phone)) {
      newErrors.contactInfo = "Numero di telefono non valido";
    }

    if (form.email && !isValidEmail(form.email)) {
      newErrors.contactInfo = "Email non valida";
    }

    if (form.time && !isValidTime(form.time)) {
      newErrors.time = "Orario non valido";
    }
    // Data futura
    if (!form.date) {
      newErrors.date = "Inserisci la data dell’evento";
    } else if (!isFutureDate(form.date)) {
      newErrors.date = "La data deve essere futura";
    }

    if (!form.contact) {
      newErrors.contact = "Seleziona una preferenza di contatto";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSuccessOpen(true);
      setForm(initialState);
    }
  };

  return (
    <main>
      <Intro />
      <section className={styles.section}>
        <Title text="Il tuo giorno, la mia attenzione" variant="Brown" />
        <Paragraph
          text="Ogni sposa è unica. Il mio obiettivo è valorizzarti con un trucco che rispecchi la tua personalità, facendoti sentire sicura e luminosa."
          variant="Brown"
        />
      </section>

      {/* SERVIZIO */}
      <ServiceItem
        title="Cosa include il servizio sposa"
        text="Prova trucco personalizzata, Studio della pelle e dello stile, Trucco sposa il giorno dell’evento, Prodotti professionali a lunga durata, Ritocchi finali prima della cerimonia"
        imageSrc={sposa}
        variant="brown"
      />

      <ServiceItem
        title="Il mio metodo"
        imageSrc={eli_01}
        variant="white"
        reverse
      >
        <div>
          <h3>01 — Primo contatto</h3>
          <p>Parliamo del tuo stile, della data e dei tuoi desideri.</p>
        </div>

        <div>
          <h3>02 — Prova trucco</h3>
          <p>Definiamo insieme il look perfetto per te.</p>
        </div>

        <div>
          <h3>03 — Il grande giorno</h3>
          <p>Trucco curato, tempi rispettati, zero stress.</p>
        </div>
      </ServiceItem>

      <Feedback
        title="teste"
        text="Le spose che ho truccato mi hanno raccontato le loro storie, i loro momenti e le emozioni del giorno. Ogni trucco è un omaggio alla loro bellezza e personalità."
      />

      {/* GALLERIA */}
      <section className={styles.gallerySection}>
        <Title text="Le mie spose" variant="Brown" />

        <div className={styles.gallery}>
          <Image
            src={spose_1}
            alt=""
            width={400}
            height={550}
            className="galleryImage"
          />
          <Image
            src={spose_2}
            alt=""
            width={500}
            height={350}
            className="galleryImage"
          />
          <Image
            src={spose_3}
            alt=""
            width={400}
            height={550}
            className="galleryImage"
          />
          <Image
            src={spose_4}
            alt=""
            width={500}
            height={350}
            className="galleryImage"
          />
          <Image
            src={spose_5}
            alt=""
            width={400}
            height={550}
            className="galleryImage"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta}>
        <Title text="Parliamo del tuo giorno speciale" variant="Brown" />
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <FormField
            label="Nome e Cognome"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormField
            label="Numero di Telefono"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.contactInfo}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.contactInfo}
          />
          <FormField
            label="Data dell’Evento"
            name="date"
            type="date"
            placeholder="dd / mm / aaaa"
            value={form.date}
            onChange={handleChange}
            error={errors.date}
          />

          <FormField
            label="Orario del Matrimonio"
            name="Orario"
            type="time"
            placeholder="--:--"
            value={form.time}
            onChange={handleChange}
            error={errors.time}
          />

          <FormField
            label="Luogo del Matrimonio"
            name="location"
            value={form.location}
            onChange={handleChange}
          />

          <FormField
            label="Wedding Planner"
            name="weddingPlanner"
            value={form.weddingPlanner}
            onChange={handleChange}
          />

          <FormField
            label="Fotografo"
            name="photographer"
            value={form.photographer}
            onChange={handleChange}
          />

          <FormField
            label="Hai un bisogno o desiderio specifico per il tuo trucco sposa?"
            name="message"
            value={form.message}
            onChange={handleChange}
            textarea
          />

          <RadioGroup
            title="Come preferisci essere contattato?"
            name="contact"
            options={["WhatsApp", "Email", "Chiamata"]}
            value={form.contact}
            onChange={handleChange}
            error={errors.contact}
          />

          <Button text="Invia Richiesta" variant="Brown" />
        </form>
      </section>

      <Modal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Richiesta inviata ✨"
        message="Grazie per averci contattato. Ti risponderemo al più presto."
      />
    </main>
  );
}
