export default function Footer() {
  return (
    <footer className="footer-container flex items-center h-[60px] bg-primary-700">
      <div className="footer-content mx-auto flex flex-row justify-between gap-2">
        <p className="footer-address text-white text-xs">
          © 2024 Kancelaria Markiewicz & Ciesielska
        </p>
        <p className="footer-address text-white text-xs">|</p>
        <p className="footer-phone text-white text-xs">RODO - Polityka Prywatności</p>
        <p className="footer-address text-white text-xs">|</p>
        <p className="footer-email text-white text-xs">Made by: Marcin Ostrowski</p>
      </div>
    </footer>
  )
}
