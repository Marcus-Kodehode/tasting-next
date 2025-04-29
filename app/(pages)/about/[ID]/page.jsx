
import { CARDS_DATA } from "@/app/components/data/cardsdata";

export default function CardDetail({ params }) {
  const card = CARDS_DATA.find(
    (item) => encodeURIComponent(item.title) === params.ID
  );

  if (!card) {
    return <div className="text-center mt-20">Fant ikke kortet!</div>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        <img
          src={card.imageSrc}
          alt={card.title}
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
        <p className="text-gray-600">{card.description}</p>
      </div>
    </main>
  );
}

