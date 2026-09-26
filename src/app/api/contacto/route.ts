import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;
  const nombres = body.nombres?.trim();
  const email = body.email?.trim();
  const mensaje = body.mensaje?.trim();
  const telefono = body.telefono?.trim();

  if (!nombres || !email || !mensaje || !telefono || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
  }

  // En producción, conectar Resend, Hostinger SMTP o un webhook.
  // Esta ruta valida y confirma el envío para la demostración.
  return NextResponse.json({ ok: true });
}
