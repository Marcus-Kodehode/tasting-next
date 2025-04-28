"use client"; // Viktig for Next.js

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import InfoCard from './InfoCard'; // Vår egen kort-komponent

const cards = [
  {
    imageSrc: "/MBlogo2.png",
    title: "Frontendbygger",
    description: "Erfaren med HTML, CSS, JavaScript og React. Sterk på struktur, semantikk og moderne designmetoder.",
  },
  {
    imageSrc: "/MBlogo1.png",
    title: "Fremadstormende Utvikler",
    description: "Øver aktivt på Next.js og Tailwind for å mestre skalerbare frontend-løsninger. Lærer TypeScript for profesjonelle kodebaser.",
  },
  {
    imageSrc: "/nerdgoblin.jpg",
    title: "Teknologientusiast",
    description: "Brenner for å bygge responsive, raske og brukervennlige applikasjoner. Klar for praksis og videre utvikling!",
  },
  {
    imageSrc: "/images.jpg",
    title: "Menneskeperson",
    description: "Liker å jobbe i team og dele kunnskap. Trives med å lære av andre og bidra til et positivt arbeidsmiljø. Har det bra når andre gjør det bra!",
  },
  {
    imageSrc: "/rip.png",
    title: "Lærevillig",
    description:"Motiveres av kontinuerlig læring, holder seg oppdatert på moderne teknologier, verktøy og beste praksiser innen frontend-utvikling.",
  },
  {
    imageSrc:"/Seagal3.webp",
    title:"Problemløser",
    description:"Har sterk evne til å analysere utfordringer og finne praktiske, brukervennlige løsninger innen utvikling og design."
  }
];

export default function Carousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <InfoCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
