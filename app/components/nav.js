import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/articles": {
    name: "articles",
  },
};

export function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-items">
        {Object.entries(navItems).map(([path, { name }]) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
