// Importerer Carousel-komponenten som inneholder Swiper med kortene
import Carousel from './components/Carousel';

// Hovedkomponenten som rendres på forsiden ("/") i Next.js
export default function Home() {
  return (
    // Hovedcontainer med Tailwind-klasse for høyde, sentrering og bakgrunnsfarge
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      {/* Viser karusellen med kortene */}
      <Carousel />
    </main>
  );
}

/*
------------------------------------------------------
Denne filen:
- Representerer forsiden (hjemmesiden) i en Next.js-app.
- Importerer og bruker <Carousel />, som viser en Swiper-basert karusell med egendefinerte kort.
- Bruker Tailwind CSS-klasser for layout og styling (full høyde, sentrert innhold, lys bakgrunn).

Kort oppsummert: 
Dette er startpunktet for besøkende, med en enkel strukturert layout og en visuelt sentral karusell.
------------------------------------------------------
*/
