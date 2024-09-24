import Image from "next/image";
import { skillsItems } from "@/Data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const Skills = () => {
  return (
    <section className="min-h-fit bg-gray-800" id="skills">
      <div className="px-5 py-14 md:container">
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Gambiarras de primeira
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          Melhores ferramentas para fazer gambiarras
        </h4>
        <br />
        <div className="flex flex-wrap justify-center gap-4">
          {skillsItems.map((item, index) => (
            <div
              key={index}
              className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5 duration-400 hover:border-yellow-500 sm:cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="top items-center gap-2">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={40}  // Tamanho ajustável
                  height={40} // Tamanho ajustável
                  className="duration-200 group-hover:scale-110"
                />
                <h6 className="text-gray-100">{item.name}</h6> {/* Exibe o nome */}
              </div>
              <div>
                <p className="italic text-gray-300">{item.description}</p> {/* Exibe a descrição */}
                <div className="center right-3 top-3 text-xl text-yellow-500">
                  <HiOutlineArrowUpRight size={25} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
