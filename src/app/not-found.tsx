import Link from "next/link";
import { ROUTES } from "@/shared/lib/routes";
import { Button } from "@/shared/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">404</p>
      <h1 className="font-display mt-2 text-4xl text-navy">Esta página no está en el fondo</h1>
      <p className="mt-3 text-muted">
        Revisa el menú o vuelve al inicio. Si buscabas un PDF, está en Informes, Crédito o Quiénes somos.
      </p>
      <Button asChild className="mt-6">
        <Link href={ROUTES.home}>Ir al inicio</Link>
      </Button>
    </div>
  );
}
