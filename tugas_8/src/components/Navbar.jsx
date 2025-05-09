export default function Navbar() {
  return (
    <nav className="flex gap-10 py-6 items-center px-36">
      <h1 className="text-amber-400 font-bold text-2xl">NONSKUY</h1>
      <ul className="flex gap-6 text-white">
        <li>
          <a href="/Dashboard">Home</a>
        </li>
        <li>
          <a href="/">Movie</a>
        </li>
      </ul>
    </nav>
  );
}
