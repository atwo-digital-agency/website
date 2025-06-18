import Members from "./Members";

const membres = [
  {
    image: "/member1.png",
    name: "Alexandra Juredieu",
    role: "Developer Frontend",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMake",
  },
  {
    image: "/member2.png",
    name: "Alexandre Quin",
    role: "Developer Backend",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMake",
  },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto lg:mt-20 mt-10 mb-10 lg:mb-40 px-10 lg:px-0">
      {/* Introduction */}
      <div className="flex flex-col justify-center items-start gap-5">
        <h2 className="font-extralight font-serif text-5xl lg:text-6xl">
          Qui sommes nous ?
        </h2>
        <p className="text-sm md:text-xl md:text-left">
          We are a small team of developers who are passionate about creating
          web applications. We believe in the power of the web to connect people
          and make the world a better place. Our mission is to build tools that
          help people communicate, collaborate, and share their ideas with the
          world.
        </p>
      </div>

      {/* Members */}
      <div className="flex flex-col lg:flex-row justify-center items-start my-20 gap-40 lg:px-10">
        {membres.map((membre, index) => (
          <Members
            key={index}
            image={membre.image}
            name={membre.name}
            role={membre.role}
            description={membre.description}
          />
        ))}
      </div>
    </div>
  );
}
