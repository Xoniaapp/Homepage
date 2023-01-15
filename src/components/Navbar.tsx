export default function Navbar() {
  return (
    <header>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-red-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="text-2xl font-bold text-white hover:text-red-600 hover:bg-gradient-to-r hover:from-red-600 hover:via-red-700 hover:to-red-500 hover:bg-clip-text hover:text-transparent">
                xonia
              </span>
            </a>
          </div>
          <div className="ml-10 space-x-4 text-white">
            <a
              href="https://app.xoniaapp.com/Km3mNQ4k"
              className="font-semibold hover:underline"
            >
              Support
            </a>
            <a
              href="https://github.com/orgs/xoniaapp/projects"
              className="font-semibold hover:underline"
            >
              Project Tracker
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
