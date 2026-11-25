import Link from "next/link";
import { events } from "@/lib/events";

export const metadata = { title: "Events" };

export default function Details() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-5xl">Events</h1>
      <p className="mt-3 text-ink/80">Choose an event to see the details. All times are in IST.</p>

      <ul className="mt-10 space-y-4">
        {events.map((e) => (
          <li key={e.id}>
            <Link
              href={`/details/${e.id}`}
              className="block rounded-md border-l-4 border-marigold bg-white px-5 py-4 transition hover:bg-blush/40 focus-visible:outline-2 focus-visible:outline-ink"
            >
              <h2 className="font-display text-3xl">{e.name}</h2>
              <p className="mt-1 text-ink/80">{e.date} · {e.time}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}