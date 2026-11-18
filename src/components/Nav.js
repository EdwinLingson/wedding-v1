import Link from "next/link";

const links = [
  { href: "/story", label: "Our story" },
  { href: "/details", label: "Details" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Nav() {
  return (
    <header className="bg-ink text-white">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-display text-2xl">A & R</Link>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="py-1 hover:text-marigold focus-visible:outline-2 focus-visible:outline-marigold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
