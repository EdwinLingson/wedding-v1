import Image from "next/image";
import { photos } from "@/lib/gallery";

export const metadata = { title: "Gallery" };

export default function Gallery() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-5xl">Gallery</h1>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((p) => (
          <li key={p.src} className="relative aspect-square overflow-hidden rounded-md">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}