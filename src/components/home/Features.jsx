import developmentPng from "../assets/development.png";
import Card from "../components/HeroCard";

export default function Features() {
  const cardData = Array.from({ length: 6 }, (_, index) => ({
    title: `Card ${index + 1}`,
    desc: `Card ${
      index + 1
    } description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci et nulla, quam dolore odit atque!`,
  }));

  return (
    <section id="features" className="mx-0">
      <h1 className="text-3xl font-semibold uppercase text-center h-16 bg-gray-200 pt-6">
        Features
      </h1>
      <div className="border rounded bg-gray-200 pt-6">
        <div className="flex flex-wrap justify-evenly py-12 gap-4 gap-y-12">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
