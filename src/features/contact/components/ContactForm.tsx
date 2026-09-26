"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SITE } from "@/shared/lib/site";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";
import { Input, Label, Textarea } from "@/shared/ui/field";

const TOPICS = [
  "Afiliación",
  "Crédito",
  "Ahorro",
  "Convenios",
  "Oficina virtual / PSE",
  "Otra consulta",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("No se pudo enviar");
      setStatus("ok");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("No pudimos enviar el mensaje. Escríbenos por WhatsApp mientras tanto.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-leaf-soft p-6 text-leaf-deep">
        <p className="font-display text-2xl">Recibimos tu mensaje</p>
        <p className="mt-2 text-sm leading-6">
          El equipo FONDECOLP te contactará al correo o al celular que registraste. Si es urgente,
          también puedes escribir al WhatsApp {SITE.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="nombres" label="Nombres" required />
        <Field name="apellidos" label="Apellidos" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label="Correo electrónico" type="email" required />
        <Field name="telefono" label="Celular" type="tel" placeholder="314 438 2988" required />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="tema">Tema</Label>
        <select
          id="tema"
          name="tema"
          required
          className="flex h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm"
          defaultValue="Afiliación"
        >
          {TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea id="mensaje" name="mensaje" required placeholder="Cuéntanos cómo podemos ayudarte" />
      </div>
      <div className="flex items-start gap-3 text-sm text-muted">
        <input
          id="habeas"
          name="habeas"
          type="checkbox"
          required
          className="mt-1 size-4 accent-[#4f9a35]"
        />
        <label htmlFor="habeas">
          Autorizo el tratamiento de mis datos para atender esta solicitud, según la{" "}
          <Link href={ROUTES.privacy} className="font-medium text-navy underline">
            política de privacidad
          </Link>
          .
        </label>
      </div>
      {status === "error" ? <p className="text-sm text-berry">{error}</p> : null}
      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}
