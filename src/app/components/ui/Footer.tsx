export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-8 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-white pt-6">
          
          <div className="flex justify-center gap-6">
            <a
              href="/impressum"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Datenschutz
            </a>
          </div>

          <p className="mt-6 text-white/80">
            © {new Date().getFullYear()} BogiVisual. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
