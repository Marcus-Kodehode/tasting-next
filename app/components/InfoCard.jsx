import { CARDS_DATA } from './data/cardsdata';
// InfoCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-[300px] min-h-[400px] mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        width={128}
        height={128}
        className="rounded-full mb-4 object-cover"
      />
      <h1 className="text-2xl font-bold mb-2 text-black">{title}</h1>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <Link href={`/${title.replace(/\s+/g, "")}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Kontakt meg
        </button>
      </Link>
    </div>
  );
}

  