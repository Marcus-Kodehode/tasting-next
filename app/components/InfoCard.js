import Image from 'next/image';

export default function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <Image
        src={imageSrc}
        alt={title}
        width={128}
        height={128}
        className="rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Kontakt meg
      </button>
    </div>
  );
}

  