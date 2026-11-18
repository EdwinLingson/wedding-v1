import Link from "next/link";
import Countdown from "@/components/Countdown";
import { wedding } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* Hero: the one bold moment on the page */}
      <section
  className="relative bg-ink bg-cover bg-center px-6 py-24 text-center text-white sm:py-32"
  style={{ backgroundImage: "url('/hero.png')" }}
>
  <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
  <div className="relative">
        <h1 className="font-display text-6xl font-medium sm:text-8xl">
          {wedding.partner1} <span className="text-marigold">&</span> {wedding.partner2}
        </h1>
        <p className="mt-6 text-lg text-white/80">
          {wedding.dateLabel} · {wedding.city}
        </p>
        <div className="mt-14">
          <Countdown target={wedding.date} />
        </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-xl px-6 py-20 text-center">
        <p className="font-display text-3xl leading-snug">
          We’re getting married, and we’d love for you to be there.
        </p>
        <p className="mt-6 leading-relaxed text-ink/80">
          This is where you’ll find the schedule, the venue, and where to tell us you’re coming.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/rsvp"
            className="rounded-full bg-marigold px-7 py-3 font-medium text-ink transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            RSVP now
          </Link>
          <Link
            href="/details"
            className="rounded-full border border-ink px-7 py-3 font-medium transition hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            See the details
          </Link>
        </div>
      </section>
    </>
  );
}
