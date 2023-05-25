import React, { useState } from "react";
import "./Contact.css";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  from_name: yup.string().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
  reply_to: yup.string().email().required(),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await send(
        "service_s3m4ejl",
        "template_e6kjwdr",
        data,
        "59cQ7_9eF9pJMj5L7"
      );
      if (response.status === 200) {
        setMessage("Takk for at du tar kontakt!");
        reset();
      } else {
        setMessage("Noe gikk galt. Vennligst prøv igjen.");
      }
    } catch (err) {
      setMessage("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
    <div>
      <h2>Kontakt meg</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Navn"
            {...register("from_name")}
            className={errors.from_name ? "input-error" : ""}
          />
          {errors.from_name && <p>Navn er påkrevd</p>}
          <input
            placeholder="Emne"
            {...register("subject")}
            className={errors.subject ? "input-error" : ""}
          />
          {errors.subject && <p>Emne er påkrevd</p>}
          <textarea
            placeholder="Melding"
            {...register("message")}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <p>Melding er påkrevd</p>}
          <input
            placeholder="Epost-adresse"
            {...register("reply_to")}
            className={errors.reply_to ? "input-error" : ""}
          />
          {errors.reply_to && (
            <p>Vennligst skriv inn en gyldig e-postadresse</p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? "Sender..." : "Send"}
          </button>
          {message && (
            <div className="message">
              <span
                className={
                  message === "Takk for at du tar kontakt!"
                    ? "success"
                    : "error"
                }
              >
                {message}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
</section>

  );
}
