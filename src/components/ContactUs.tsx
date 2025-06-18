import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: "",
      contact: "",
      message: "",
      newsletter: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Le nom est requis"),
      contact: Yup.string().required(
        "Le numéro de téléphone ou email est requis"
      ),
      message: Yup.string().required("Le message est requis"),
      newsletter: Yup.string().email("Adresse email invalide"),
    }),
    onSubmit: (values) => {
      console.log("Formulaire soumis :", values);
    },
  });

  return (
    <section className="w-full flex flex-col lg:flex-row relative mb-10 lg:mb-20">
      {/* Colonne Image avec logo */}
      <div className="flex-1 bg-contain bg-no-repeat bg-center relative bg-[url('/A-logo_atwo.png')]"></div>

      {/* Colonne Formulaire */}
      <div className="flex-1 px-8 py-10 lg:py-20">
        <h2 className="text-3xl lg:text-4xl font-light tracking-wide mb-6 text-center">
          Contactez-nous
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="space-y-6 max-w-lg mx-auto"
        >
          {/* Champ Nom / Prénom */}
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nom / Prénom"
              className="w-full px-4 py-3 bg-[#D9D9D9]/10 text-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-xs absolute text-red-500">
                {formik.errors.name}
              </p>
            ) : null}
          </div>

          {/* Champ Numéro de téléphone / Email */}
          <div>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Numéro de téléphone / Adresse mail"
              className="w-full px-4 py-3 bg-[#D9D9D9]/10 text-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.contact}
            />
            {formik.touched.contact && formik.errors.contact ? (
              <p className="text-xs absolute text-red-500">
                {formik.errors.contact}
              </p>
            ) : null}
          </div>

          {/* Champ Message */}
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Quelques mots sur votre besoin"
              rows={4}
              className="w-full px-4 py-3 bg-[#D9D9D9]/10 text-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-xs absolute text-red-500">
                {formik.errors.message}
              </p>
            ) : null}
          </div>

          {/* Bouton Demande de rappel */}
          <button
            type="submit"
            className="w-full py-3 bg-accent text-black font-bold rounded-md hover:bg-accent/80"
          >
            Demande de rappel
          </button>
        </form>

        {/* Section Newsletter */}
        <div className="mt-10 text-center">
          <p className="text-sm mb-4">
            SUIVEZ L'ARRIVÉE DE NOS NOUVELLES SOLUTIONS
          </p>
          <form className="flex justify-center items-center">
            <input
              id="newsletter"
              name="newsletter"
              type="email"
              placeholder="Votre adresse mail"
              className="w-2/3 px-4 py-2 bg-[#D9D9D9]/10 text-gray-300 rounded-l-md focus:ring-2 focus:ring-accent focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.newsletter}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-black font-bold rounded-r-md hover:bg-accent/80"
            >
              Newsletter
            </button>
          </form>
          {formik.touched.newsletter && formik.errors.newsletter ? (
            <p className="text-sm absolute text-red-500 mt-2">
              {formik.errors.newsletter}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
