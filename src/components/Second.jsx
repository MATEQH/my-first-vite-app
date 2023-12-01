import developmentPng from "../assets/development.png";
import Card from "./HeroCard";

export default function Second() {
  const cardData = Array.from({ length: 6 }, (_, index) => ({
    title: `Card ${index + 1}`,
    desc: `Card ${
      index + 1
    } description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci et nulla, quam dolore odit atque!`,
  }));

  return (
    <section id="second" className="mx-0">
      <div className="">
        <div className="flex flex-col sm:flex-row mb-12 items-center">
          <div className="flex flex-col sm:w-1/2 py-8 text-center items-center sm:items-start justify-center sm:justify-start my-auto order-1">
            <h1 className="text-3xl uppercase font-semibold mb-2">
              Syrix Development
            </h1>
            <p className="text-sm mb-3 max-w-xl sm:text-left whitespace-break-spaces">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              rerum! Esse corporis accusantium suscipit omnis exercitationem
              enim iusto voluptate quas.
            </p>
            <button className="max-w-max px-4 py-2 text-xl text-white border rounded bg-indigo-600">
              <a href="">Get Started</a>
            </button>
          </div>
          <div className="sm:w-1/2 sm:order-1">
            <img
              className="mx-auto sm:mx-0 sm:ml-auto object-cover w-96 sm:h-96"
              src={developmentPng}
              alt="development"
            />
          </div>
        </div>
      </div>
      <div className="border rounded bg-gray-200">
        <div className="flex flex-wrap justify-evenly py-12 gap-4 gap-y-12">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
