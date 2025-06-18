import Footer from "../componants/Footer";
import Navbar from "../componants/Navbar";

export default function Maintenance() {
  return (
    <>
      <Navbar />
      <main>
        <div className="min-h-[80vh] flex flex-col justify-center items-center space-y-8 px-8">
          <h1 className="text-3xl lg:text-6xl">
            Dernières lignes de code en vue !
          </h1>
          <div className="container mx-auto text-center">
            <p className="lg:text-xl lg:leading-loose">
              Nous travaillons activement pour vous offrir une expérience
              exceptionnelle.
              <br />
              Restez connectés, cette page sera disponible très prochainement !
              🚀
              <br />
              En attendant, si vous avez besoin d'informations ou souhaitez nous
              contacter, n'hésitez pas à nous écrire <br className="mb-4" />
              <a
                href="mailto:atwodigitalagency@gmail.com"
                className="bg-accent p-2 rounded-lg"
              >
                {" "}
                atwodigitalagency@gmail.com
              </a>
            </p>
            <p className="mt-8">
              Merci pour votre patience et à très bientôt !
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
