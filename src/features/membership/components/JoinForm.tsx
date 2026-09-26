"use client";

import { FormEvent, useState } from "react";
import { JOIN_STEPS } from "@/features/membership/model/join";
import { SITE } from "@/shared/lib/site";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Input, Label } from "@/shared/ui/field";
import { cn } from "@/shared/lib/utils";

const STEPS = ["Datos", "Laboral", "Documentos", "Enviar"] as const;

type FormState = {
  tipo: string;
  nombres: string;
  cedula: string;
  email: string;
  celular: string;
  ciudad: string;
  empresa: string;
  cargo: string;
};

const INITIAL: FormState = {
  tipo: "Afiliación",
  nombres: "",
  cedula: "",
  email: "",
  celular: "",
  ciudad: "Bogotá",
  empresa: "Colpensiones",
  cargo: "",
};

export function JoinForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(INITIAL);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function next(event: FormEvent) {
    event.preventDefault();
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else setDone(true);
  }

  if (done) {
    const text = encodeURIComponent(
      `Solicitud de ${values.tipo} FONDECOLP\nNombre: ${values.nombres}\nC.C.: ${values.cedula}\nCiudad: ${values.ciudad}\nCelular: ${values.celular}\nCorreo: ${values.email}\nEmpresa: ${values.empresa}\nCargo: ${values.cargo}`,
    );
    return (
      <Card>
        <CardContent className="space-y-4 p-8">
          <p className="font-display text-3xl text-navy">Listo para radicar</p>
          <p className="text-sm leading-6 text-muted">
            En esta demostración no se almacenan documentos. Envía el resumen por WhatsApp y anexa
            cédula, certificación laboral, ingresos y retenciones, y certificación bancaria.
          </p>
          <ol className="grid gap-3 sm:grid-cols-2">
            {JOIN_STEPS.map((item, index) => (
              <li key={item.title} className="rounded-xl bg-paper p-4 text-sm">
                <span className="font-semibold text-navy">
                  {index + 1}. {item.title}
                </span>
                <p className="mt-1 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          <Button asChild>
            <a href={`${SITE.whatsappUrl}?text=${text}`} target="_blank" rel="noreferrer">
              Enviar resumen por WhatsApp
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 sm:p-8">
        <ol className="mb-8 grid grid-cols-4 gap-2 text-center text-xs font-semibold uppercase tracking-wide">
          {STEPS.map((label, index) => (
            <li
              key={label}
              className={cn(
                "rounded-full py-2",
                index <= step ? "bg-leaf-soft text-leaf-deep" : "bg-paper text-muted",
              )}
            >
              {label}
            </li>
          ))}
        </ol>
        <form onSubmit={next} className="space-y-4">
          {step === 0 ? (
            <>
              <div className="space-y-1.5">
                <Label htmlFor="tipo">Tipo de solicitud</Label>
                <select
                  id="tipo"
                  className="h-11 w-full rounded-xl border border-line px-3.5 text-sm"
                  value={values.tipo}
                  onChange={(e) => update("tipo", e.target.value)}
                >
                  <option>Afiliación</option>
                  <option>Actualización de información</option>
                </select>
              </div>
              <Field label="Nombres y apellidos" value={values.nombres} onChange={(v) => update("nombres", v)} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Cédula" value={values.cedula} onChange={(v) => update("cedula", v)} />
                <div className="space-y-1.5">
                  <Label>Ciudad</Label>
                  <select
                    className="h-11 w-full rounded-xl border border-line px-3.5 text-sm"
                    value={values.ciudad}
                    onChange={(e) => update("ciudad", e.target.value)}
                  >
                    {SITE.cities.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Correo" type="email" value={values.email} onChange={(v) => update("email", v)} />
                <Field label="Celular" value={values.celular} onChange={(v) => update("celular", v)} />
              </div>
            </>
          ) : null}
          {step === 1 ? (
            <>
              <Field label="Empresa" value={values.empresa} onChange={(v) => update("empresa", v)} />
              <Field label="Cargo" value={values.cargo} onChange={(v) => update("cargo", v)} />
              <p className="rounded-xl bg-navy-soft p-4 text-sm text-navy">
                FONDECOLP está dirigido a empleados y vinculados de Colpensiones. El descuento del
                aporte se hace por nómina.
              </p>
            </>
          ) : null}
          {step === 2 ? (
            <ul className="space-y-3 text-sm">
              {[
                "Fotocopia de la cédula ampliada al 150%",
                "Certificación laboral",
                "Certificado de ingresos y retenciones del último año",
                "Certificación bancaria",
              ].map((doc) => (
                <li key={doc} className="flex items-start gap-3 rounded-xl border border-line p-3">
                  <input type="checkbox" required className="mt-1 size-4 accent-[#4f9a35]" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {step === 3 ? (
            <dl className="grid gap-2 text-sm sm:grid-cols-2">
              {Object.entries(values).map(([key, value]) => (
                <div key={key} className="rounded-xl bg-paper p-3">
                  <dt className="capitalize text-muted">{key}</dt>
                  <dd className="font-medium text-navy">{value || "—"}</dd>
                </div>
              ))}
            </dl>
          ) : null}
          <div className="flex justify-between pt-2">
            <Button type="button" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
              Atrás
            </Button>
            <Button type="submit">{step === STEPS.length - 1 ? "Confirmar solicitud" : "Continuar"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} required value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
