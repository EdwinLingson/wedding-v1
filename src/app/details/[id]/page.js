import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/events";

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

export default async function EventPage({ params }) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/details" className="text-sm underline">Back to all events</Link>
      <h1 className="mt-6 font-display text-5xl">{event.name}</h1>
      <p className="mt-2 text-lg text-ink/80">{event.date} · {event.time}</p>

      <p className="mt-8 leading-relaxed">{event.about}</p>

      <h2 className="mt-10 font-display text-3xl">Where</h2>
      <p className="mt-2 text-ink/80">{event.venue}</p>
      <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline">
        Open in Google Maps
      </a>

      <h2 className="mt-10 font-display text-3xl">What to wear</h2>
      <p className="mt-2 text-ink/80">{event.dressCode}</p>
    </div>
  );
}