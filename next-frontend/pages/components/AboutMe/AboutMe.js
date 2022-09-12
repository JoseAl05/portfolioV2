import Image from "next/image";
import yo from "../../../public/yo-removebg-preview.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  const cardVariants = {
    offscreen: {
      x: -1200,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <>
      <h2 className="w-full mt-10 mb-1 text-5xl font-thunderBold tracking-wider leading-tight text-center text-gray-800">
        Sobre Mi
      </h2>
      <div className="w-full mb-20">
        <div className="h-1 mx-auto bg-gradient-to-r from-[#080055] to-[#008ab9] w-40 sm:w-80 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div id="sobremi" className="max-w-screen-xl mx-auto md:mx-32 lg:mx-32 my-40">
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={cardVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:mx-0 sm:gap-0 bg-gradient-to-r from-[#080055] to-[#008ab9] whitespace-pre-wrap rounded-none lg:rounded-tr-full lg:rounded-bl-[6000px] lg:p-10">
              <p className="mx-16 my-10 md:mx-20 lg:mx-32 text-end text-white md:text-lg text-base lg:text-xl font-PlayfairRegular">
                Mi nombre es José Pablo Arancibia Linker y soy Ingeniero en
                Informática con experiencia en desarrollo full stack incluyendo
                desarrollo front-end y back-end. Me apasiona aprender y ampliar
                continuamente mis conocimientos sobre el desarrollo de software.
                Soy una persona que aprende rápido y siempre está dispuesta a
                asumir nuevos retos. Trabajo duro y estoy comprometido a hacer
                el mejor trabajo posible
              </p>
              <Image
                src={yo}
                layout="responsive"
                quality={100}
                loading="lazy"
                width={200}
                height={200}
                className="sm:object-scale-down object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
