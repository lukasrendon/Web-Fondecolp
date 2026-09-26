"use client";

import { useMemo, useState } from "react";
import { CREDIT_LINES } from "@/features/credit/model/credit-lines";
import { formatCop, monthlyInstallment } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input, Label } from "@/shared/ui/field";
import { SITE } from "@/shared/lib/site";

export function CreditSimulator({ compact = false }: { compact?: boolean }) {
  const [lineSlug, setLineSlug] = useState("crediaportes");
  const [amount, setAmount] = useState(5_000_000);
  const [months, setMonths] = useState(12);

  const line = CREDIT_LINES.find((item) => item.slug === lineSlug) ?? CREDIT_LINES[0];
  const term = Math.min(months, line.termMonths);
  const cuota = useMemo(
    () => monthlyInstallment(amount, line.rateMv, term),
    [amount, line.rateMv, term],
  );
  const total = cuota * term;
  const interest = total - amount;

  const message = encodeURIComponent(
    `Hola FONDECOLP, quiero simular un crédito ${line.name} por ${formatCop(amount)} a ${term} meses. La cuota estimada es ${formatCop(cuota)}.`,
  );

  return (
    <Card className={compact ? "" : "overflow-hidden"}>
      <CardHeader className="bg-navy text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Simulador</p>
        <CardTitle className="text-white">Estima tu cuota en segundos</CardTitle>
        <p className="text-sm text-white/70">
          Cálculo ilustrativo con la tasa mensual vigente de cada línea. La aprobación depende de tu
          antigüedad, aportes y capacidad de descuento.
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 pt-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="linea">Línea de crédito</Label>
            <select
              id="linea"
              className="flex h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm"
              value={lineSlug}
              onChange={(event) => {
                const next = CREDIT_LINES.find((item) => item.slug === event.target.value);
                setLineSlug(event.target.value);
                if (next) setMonths(Math.min(months, next.termMonths));
              }}
            >
              {CREDIT_LINES.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} · {item.rateMv.toString().replace(".", ",")}% M.V.
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="monto">Monto solicitado</Label>
            <Input
              id="monto"
              type="number"
              min={1000000}
              step={100000}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="plazo">Plazo en meses (máx. {line.termMonths})</Label>
            <Input
              id="plazo"
              type="number"
              min={1}
              max={line.termMonths}
              value={term}
              onChange={(event) => setMonths(Number(event.target.value))}
            />
          </div>
        </div>
        <div className="rounded-2xl bg-paper p-5">
          <p className="text-sm text-muted">Cuota mensual estimada</p>
          <p className="font-display mt-1 text-4xl text-navy">{formatCop(cuota)}</p>
          <dl className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Intereses estimados</dt>
              <dd className="font-medium">{formatCop(interest)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Total a pagar</dt>
              <dd className="font-medium">{formatCop(total)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">Antigüedad mínima</dt>
              <dd className="text-right">{line.seniority}</dd>
            </div>
          </dl>
          <Button asChild className="mt-6 w-full">
            <a href={`${SITE.whatsappUrl}?text=${message}`} target="_blank" rel="noreferrer">
              Pedir asesoría por WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
