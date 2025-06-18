import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white py-8 relative bottom-0 w-full border-t border-accent/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section Logo et Email */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src="/logo-white.png"
              alt="A TWO DIGITAL AGENCY (logo)"
              className="w-[90vw] lg:w-auto"
            />
          </Link>
          <a className="text-sm normal-case" href="#">
            atwodigitalagency@gmail.com
          </a>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/company/atwo-digital-agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-linkedin-500.png"
                alt="LinkedIn"
                className="size-6 lg:size-10"
              />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-logo-google-512.png"
                alt="Google"
                className="size-6 lg:size-10"
              />
            </a>
            <a
              href="https://gitlab.com/atwo-digital-agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-gitlab-500.png"
                alt="GitLab"
                className="size-6 lg:size-10"
              />
            </a>
            <a
              href="https://github.com/atwo-digital-agency"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons8-github-512.png"
                alt="GitHub"
                className="size-6 lg:size-10"
              />
            </a>
          </div>
        </div>

        {/* Section Agences */}
        <div className="flex flex-col items-center lg:justify-end">
          <h3 className="text-2xl font-semibold">Nos Agences</h3>
          <div className="mt-4">
            <p className="font-bold text-accent">Paris</p>
            <p className="text-sm">44 Boulevard de Picpus</p>
            <p className="text-sm">06 95 07 60 33</p>
          </div>
          <div className="mt-4">
            <p className=" font-bold text-accent">Bordeaux</p>
            <p className="text-sm">8 Rue des Mots Passants</p>
            <p className="text-sm">06 59 86 57 00</p>
          </div>
        </div>

        {/* Section Liens */}
        <div className="flex flex-col items-center lg:justify-end gap-5">
          <div>
            <h3 className="text-2xl font-semibold">Restez informés</h3>
            <p className="text-sm mt-4">Inscrivez-vous à notre newsletter</p>
            <input
              type="email"
              placeholder="Votre email"
              className="w-48 h-8 mt-2 bg-transparent border-b border-white text-white"
            />
            <button className="bg-accent text-black font-bold mt-2 p-1.5 hover:bg-accent/80">
              S'inscrire
            </button>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/contact" className="hover:text-accent">
                Nous Contactez
              </a>
            </li>
            <li>
              <a href="/cgv" className="hover:text-accent">
                CGV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
