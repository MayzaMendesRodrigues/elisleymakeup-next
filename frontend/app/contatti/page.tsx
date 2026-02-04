"use client";

import { useState } from "react";
import styles from "./contatti.module.css";
import Modal from "../../src/components/ui/Modal/modal";
import Title from "@/src/components/ui/Title/Title";
import FormField from "@/src/components/Form/FormField/FormField";
import RadioGroup from "@/src/components/Form/RadioGroup/RadioGroup";
import Button from "@/src/components/ui/Button/Button";
import {
  isValidEmail,
  isValidPhone,
  // isFutureDate,
} from "@/src/utils/validators";
import { s } from "framer-motion/client";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  message: string;
  contact: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  message: "",
  contact: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<FormState & { contactInfo: string }>
  >({});
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    // // Data futura
    // if (!form.date) {
    //   newErrors.date = "Inserisci la data dell’evento";
    // } else if (!isFutureDate(form.date)) {
    //   newErrors.date = "La data deve essere futura";
    // }

    if (!form.contact) {
      newErrors.contact = "Seleziona una preferenza di contatto";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    setLoading(true);
    const res = await fetch("/api/contatti", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccessOpen(true);
      setForm(initialState);
    }
  };

  return (
    <>
      <section className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Title text="Contattami" variant="Brown" />
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
          {/* <FormField
            label="Data dell’Evento"
            name="date"
            type="date"
            placeholder="dd / mm / aaaa"
            value={form.date}
            onChange={handleChange}
            error={errors.date}
          /> */}
          <FormField
            label="Messaggio"
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
          <button type="submit" disabled={loading}>
            {loading ? "Invio in corso..." : "Invia richiesta"}
          </button>{" "}
        </form>
      </section>

      {/* POPUP PREMIUM */}
      <Modal
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
        title="Richiesta inviata ✨"
        message="Grazie per averci contattato. Ti risponderemo al più presto."
      />
    </>
  );
}
