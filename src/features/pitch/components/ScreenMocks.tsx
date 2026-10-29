import type { ReactNode } from "react";
import type { ScreenId } from "@/features/pitch/model/slides";
import { BrowserFrame } from "@/features/pitch/components/BrowserFrame";

function MockChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line bg-navy px-3 py-2 text-[10px] text-white">
      <span className="font-display text-xs">FONDECOLP</span>
      <span className="truncate text-white/70">{title}</span>
      <span className="rounded-full bg-leaf px-2 py-0.5 text-[9px] font-semibold">PSE</span>
    </div>
  );
}

function HomeMock() {
  return (
    <div>
      <MockChrome title="Inicio" />
      <div className="grid gap-3 bg-gradient-to-br from-[#072a4d] to-[#0e4a82] p-4 text-white sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] text-gold">Sector solidario</p>
          <p className="font-display mt-1 text-lg leading-tight sm:text-xl">
            Te acompañamos a construir tus proyectos.
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-white/75">
            Ahorro 3%–10% · Crédito desde 0,8% M.V. · Convenios
          </p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-leaf px-2.5 py-1 text-[9px] font-semibold">
              Quiero asociarme
            </span>
            <span className="rounded-full border border-white/30 px-2.5 py-1 text-[9px]">
              Ver crédito
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white p-3 text-ink shadow-lg">
          <p className="text-[10px] font-semibold text-navy">Simulador de cuota</p>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 rounded bg-navy-soft" />
            <div className="h-2 w-4/5 rounded bg-navy-soft" />
            <div className="mt-2 rounded-lg bg-leaf-soft px-2 py-1.5">
              <p className="text-[9px] text-muted">Cuota estimada</p>
              <p className="font-display text-base text-leaf-deep">$ 287.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 bg-white p-3">
        {["Ahorro", "Crédito", "Convenios", "Bienestar"].map((label) => (
          <div key={label} className="rounded-lg border border-line p-2 text-center">
            <div className="mx-auto mb-1 size-4 rounded-full bg-leaf-soft" />
            <p className="text-[9px] font-medium text-navy">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreditMock() {
  return (
    <div>
      <MockChrome title="Crédito" />
      <div className="bg-navy px-4 py-3 text-white">
        <p className="text-[9px] uppercase tracking-wide text-gold">Líneas de crédito</p>
        <p className="font-display mt-1 text-base">Seis líneas, una tabla comparable</p>
      </div>
      <div className="space-y-2 bg-paper p-3">
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="grid grid-cols-4 gap-1 border-b border-line bg-navy-soft/50 px-2 py-1.5 text-[8px] font-semibold uppercase text-muted">
            <span>Línea</span>
            <span>Tasa</span>
            <span>Plazo</span>
            <span>Monto</span>
          </div>
          {[
            ["Libre inversión", "1,02%", "60 m", "Hasta 50 SMMLV"],
            ["Crediaportes", "0,80%", "36 m", "Hasta aportes"],
            ["Fonconvenios", "0,90%", "24 m", "Según convenio"],
          ].map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-4 gap-1 border-b border-line/60 px-2 py-1.5 text-[9px] text-ink last:border-0"
            >
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["0,8% M.V.", "Nómina", "6 líneas"].map((chip) => (
            <div
              key={chip}
              className="rounded-lg border border-line bg-white px-2 py-2 text-center text-[9px] font-medium text-navy"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SavingsMock() {
  return (
    <div>
      <MockChrome title="Ahorro" />
      <div className="bg-navy px-4 py-3 text-white">
        <p className="text-[9px] uppercase tracking-wide text-gold">Ahorro</p>
        <p className="font-display mt-1 text-base">Reglas en texto, no en imagen</p>
      </div>
      <div className="grid gap-2 bg-paper p-3 sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-3">
          <span className="rounded-full bg-leaf-soft px-2 py-0.5 text-[8px] font-semibold text-leaf-deep">
            Obligatorio
          </span>
          <p className="mt-2 text-[11px] font-semibold text-navy">Aporte del 3% al 10%</p>
          <p className="mt-1 text-[9px] leading-relaxed text-muted">
            Del salario básico. Te hace asociado hábil y respalda Crediaportes.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-white p-3">
          <span className="rounded-full bg-navy-soft px-2 py-0.5 text-[8px] font-semibold text-navy">
            Programado
          </span>
          <p className="mt-2 text-[11px] font-semibold text-navy">6 a 12 meses</p>
          <p className="mt-1 text-[9px] leading-relaxed text-muted">
            Voluntario, libre destinación, con rendimientos solidarios.
          </p>
        </div>
      </div>
    </div>
  );
}

function PartnersMock() {
  return (
    <div>
      <MockChrome title="Convenios" />
      <div className="bg-navy px-4 py-3 text-white">
        <p className="text-[9px] uppercase tracking-wide text-gold">Convenios</p>
        <p className="font-display mt-1 text-base">Aliados y campañas GES</p>
      </div>
      <div className="bg-paper p-3">
        <div className="mb-2 grid grid-cols-3 gap-2">
          {["Salitre", "Mundo Aventura", "Nápoles"].map((name, i) => (
            <div
              key={name}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
              style={{
                background:
                  i === 0
                    ? "linear-gradient(160deg,#0b3d6e,#4f9a35)"
                    : i === 1
                      ? "linear-gradient(160deg,#072a4d,#c4a35a)"
                      : "linear-gradient(160deg,#3a7428,#0b3d6e)",
              }}
            >
              <div className="flex h-16 items-end p-2">
                <p className="text-[10px] font-semibold text-white">{name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Salud", "Seguros", "Gimnasio", "Mercado", "Turismo"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-white px-2 py-0.5 text-[8px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function JoinMock() {
  return (
    <div>
      <MockChrome title="Asóciate" />
      <div className="bg-navy px-4 py-3 text-white">
        <p className="text-[9px] uppercase tracking-wide text-gold">Asociación</p>
        <p className="font-display mt-1 text-base">Cuatro pasos para afiliarte</p>
      </div>
      <div className="grid grid-cols-2 gap-2 bg-paper p-3 sm:grid-cols-4">
        {["1. Conoce", "2. Documentos", "3. Formulario", "4. Aporte"].map((step, i) => (
          <div key={step} className="rounded-xl border border-line bg-white p-2.5 text-center">
            <p className="font-display text-lg text-leaf">{i + 1}</p>
            <p className="text-[9px] font-medium text-navy">{step.split(". ")[1]}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-line bg-white px-3 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[10px] text-muted">Formulario de afiliación · habeas data</p>
          <span className="rounded-full bg-leaf px-2.5 py-1 text-[9px] font-semibold text-white">
            Empezar
          </span>
        </div>
      </div>
    </div>
  );
}

function ContactMock() {
  return (
    <div>
      <MockChrome title="Contacto" />
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="bg-navy p-4 text-white">
          <p className="text-[9px] uppercase tracking-wide text-gold">Contáctanos</p>
          <p className="font-display mt-1 text-base">WhatsApp, correo y sedes</p>
          <ul className="mt-3 space-y-1.5 text-[10px] text-white/80">
            <li>· WhatsApp 314 438 2988</li>
            <li>· FAQ: M.V., afianzadora, hábil</li>
            <li>· Privacidad y términos</li>
            <li>· Informes y órganos al día</li>
          </ul>
        </div>
        <div className="space-y-2 bg-paper p-3">
          {["Nombre", "Celular", "Mensaje"].map((field) => (
            <div key={field} className="rounded-lg border border-line bg-white px-2 py-2">
              <p className="text-[8px] text-muted">{field}</p>
              <div className="mt-1 h-1.5 w-3/4 rounded bg-navy-soft" />
            </div>
          ))}
          <div className="rounded-full bg-navy py-1.5 text-center text-[9px] font-semibold text-white">
            Enviar mensaje
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKS: Record<ScreenId, () => ReactNode> = {
  home: HomeMock,
  credit: CreditMock,
  savings: SavingsMock,
  partners: PartnersMock,
  join: JoinMock,
  contact: ContactMock,
};

const URLS: Record<ScreenId, string> = {
  home: "fondecolp.com",
  credit: "fondecolp.com/credito",
  savings: "fondecolp.com/ahorro",
  partners: "fondecolp.com/convenios",
  join: "fondecolp.com/asociate",
  contact: "fondecolp.com/contacto",
};

export function ScreenMock({ screen }: { screen: ScreenId }) {
  const Mock = MOCKS[screen];
  return (
    <BrowserFrame url={URLS[screen]}>
      <Mock />
    </BrowserFrame>
  );
}
