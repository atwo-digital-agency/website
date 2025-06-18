import { useState } from "react";
import Slider from "react-slick";

interface Solution {
  image: string;
  title: string;
  description: string;
  link: string;
}

const solutions: Solution[] = [
  {
    image: "logo-circle.png",
    title: "NestEgg",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    link: "/solution0",
  },
  {
    image: "logo-circle.png",
    title: "Solution 1",
    description:
      "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
    link: "/solution1",
  },
  {
    image: "logo-circle.png",
    title: "Solution 2",
    description:
      "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.",
    link: "/solution2",
  },
  {
    image: "logo-circle.png",
    title: "Solution 3",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    link: "/solution3",
  },
  // Ajouter d'autres solutions si nécessaire
];

export default function Solution() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAfterChange = (index: number) => {
    setActiveIndex(index);
  };

  const settings = {
    className: "center flex",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    focusOnSelect: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="container mx-auto lg:mt-20 mt-10 mb-10 lg:mb-40 px-10 lg:px-0">
      <h2 className="hidden lg:flex lg:text-6xl font-light font-serif text-start">
        Nos Solutions
      </h2>
      <div>
        <Slider {...settings}>
          {solutions.map((solution, index) => (
            <div key={index} className="flex justify-center align-center">
              <img
                src={solution.image}
                alt={solution.title}
                className={`${
                  index === activeIndex
                    ? "scale-105 transition-transform duration-300"
                    : ""
                } scale-50 transition-transform duration-300`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-4xl lg:text-8xl font-light font-serif">
          {solutions[activeIndex].title}
        </h1>
        <p className="text-gray-500 mt-4 text-sm lg:text-base">
          {solutions[activeIndex].description}
        </p>
        <a
          href={solutions[activeIndex].link}
          className="mt-6 inline-block px-6 py-3 text-black font-semibold bg-accent rounded-lg"
        >
          Accéder à la version BETA
        </a>
      </div>
    </section>
  );
}
