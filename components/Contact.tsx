import Image from "next/image";
import ConactSVG from "../public/svg/contact.svg";
const Contact = () => {
  return (
    <section className="bg-gray-800 pb-8" id="contact">
      <div className="lg:container px-5 pt-14">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Me contrate
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          PARA SEUS PROJETOS
        </h4>
        <br />
        <div className="flex items-center flex-col space-y-4 lg:flex-row">
          <Image
            src={ConactSVG}
            alt="Contact SVG"
            data-aos="fade-right"
            className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
          />
          <div
            data-aos="fade-left"
            className="ml-4 border-2 border-yellow-700 max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <div className="w-full max-w-md bg-gray-950 p-5">
              <h2 className="text-lg font-semibold text-gray-300 mb-2">
                Para mais informações!
              </h2>
              <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
                <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                  Name <br />
                  Email <br />
                  Phone
                </div>
                <div
                  id="contact-details"
                  className="space-y-2 text-yellow-600 font-medium leading-loose"
                >
                  Pedro Chaves <br />
                  pedrochavesjp@gmail.com <br />+ 55 83 998566536
                </div>
              </address>
            </div>

            <p className="leading-7 text-gray-300">
            Sou um desenvolvedor focado em criar soluções inovadoras e eficientes. Tenho experiência em Java e Spring, desenvolvendo backends robustos e escaláveis. No front-end, utilizo Next.js e Angular para construir interfaces modernas e dinâmicas que proporcionam uma excelente experiência ao usuário. Gosto de enfrentar novos desafios e estou sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias. Vamos transformar suas ideias em realidade juntos!
            </p>
            <br />
            <a
              href="mailto:test@example.com"
              className="btn bg-yellow-700 hover:bg-yellow-500 text-white"
            >
              Me contrate!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;