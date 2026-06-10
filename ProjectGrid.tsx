export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
      <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 md:mb-0">
        © 2026 Danna Doncel — All rights reserved
      </div>
      <div className="flex space-x-8 text-[10px] font-bold tracking-[0.2em] uppercase">
        <a href="https://www.linkedin.com/in/danna-doncel-95007719a/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-emerald transition-colors">LinkedIn</a>
        <a href="mailto:ddoncelnavia@gmail.com" className="hover:text-brand-emerald transition-colors">Contact</a>
        <a href="#" className="hover:text-brand-emerald transition-colors">Legal notice</a>
      </div>
    </footer>
  );
}
