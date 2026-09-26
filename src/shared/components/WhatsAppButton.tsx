import { SITE } from "@/shared/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1f9d4d] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#188a42]"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21.1a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9.1 9.1 0 1 1 12 21.1Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-3.7-3.2c-.3-.5.3-.4.8-1.4l.2-.3c.1-.1 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.5s2.2.7 3 .6c.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3s-.2-.2-.5-.3Z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
