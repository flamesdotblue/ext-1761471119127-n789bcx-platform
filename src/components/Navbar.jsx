export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-rose-500 to-rose-700" />
          <span className="text-gray-900">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 hover:bg-gray-800 transition">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
