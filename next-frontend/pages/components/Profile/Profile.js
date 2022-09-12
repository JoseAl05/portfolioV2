import Image from "next/image";
import web from "../../../public/web.png";
import software from "../../../public/software.png";
import { motion } from "framer-motion";

const Profile = () => {
  const cardVariantsWeb = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 20,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const cardVariantsSoftware = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 20,
      rotate: -20,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <>
      <div id="competencias" className="py-36">
        <h2 className="w-full my-2 text-6xl font-thunderBold tracking-wider leading-tight text-center text-gray-800">
          Competencias
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-[#080055] to-[#008ab9] w-40 sm:w-80 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex sm:flex-row flex-col-reverse items-center sm:justify-between my-36 mx-20">
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <h1 className="font-thunderMedium text-4xl text-black my-10 border-b-2 border-r-2 border-l-2 w-full text-center border-[#005fa7] rounded-b-lg">
              Desarrollo Web.
            </h1>
            <p className="text-2xl leading-8 tracking-wider font-thunderLight w-full text-center">
              Me gusta el desarrollo web, por la utilidad que le puede brindar a
              un pequeño negocio o a una empresa de mayor embergadura. Me he
              aventurado con varias herramientas de desarrollo web, desde{" "}
              <i>.NET</i>, <i>Shiny</i>, <i>Angular</i>, hasta <i>React</i> y{" "}
              <i>NextJS</i>, que son actualmente las herramientas front-end con
              las que trabajo, me siento mas comodo y mas experiencia tengo.
            </p>
            <p className="text-2xl leading-8 tracking-wider font-thunderLight w-full text-center mt-2">
              Por otro lado, en el desarrollo del back-end, he utilizado{" "}
              <i>Express</i> para la configuracion del servidor, <i>Pisma</i> y{" "}
              <i>Sequelize</i> como ORM's y <i>API Rest</i> y <i>GraphQL</i>{" "}
              para el control, llamadas y configuracion de los endpoints.
            </p>
            <p className="text-2xl leading-8 tracking-wider font-thunderLight w-full text-center mt-2">
              Como bases de datos SQL, he trabajado con SQL Server, MySQL, y
              MongoDB como base de datos NoSQL.
            </p>
            <p className="text-2xl leading-8 tracking-wider font-thunderLight w-full text-center mt-2">
              Como integraciones, he utilizado <i>AWS S3 Bucket</i> para el
              almacenamiento de archivos, <i>Auth0</i> para la auntenticacion de
              usuarios y <i>Sanity</i> y <i>DatoCMS</i> como CMS's
              <i>
                (Content Managment System o Sistema de Gestion de Contenidos)
              </i>
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariantsWeb}>
                <Image
                  src={web}
                  layout="intrinsic"
                  width={1920}
                  height={1080}
                  className="object-fill sm:object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center sm:justify-between my-36 mx-20">
          <div className="w-full sm:w-1/2">
            <motion.div
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariantsSoftware}>
                <Image
                  src={software}
                  layout="intrinsic"
                  width={1920}
                  height={1080}
                  className="object-fill sm:object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <h1 className="font-thunderMedium text-4xl text-black my-10 border-t-2 border-r-2 border-l-2 w-full text-center border-[#005fa7] rounded-t-lg">
              Ingenieria de Software.
            </h1>
            <p className="text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              La Ingenieria de Software es muy importante al momento de
              desarrollar aplicaciones. Se deben aplicar metodologias, modelos
              de desarrollo, generar documentacion para generar un software,
              aplicacion o sistema confiable y de calidad.
            </p>
            <p className="text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Para el desarrollo de proyectos, he aplicado la{" "}
              <i>Captura, Especificacion y Validacion de Requerimientos</i>,{" "}
              <i>Modelos de Proceso de Desarrollo</i>, <i>Documentacion</i>, la
              cual incluye{" "}
              <i>Diagramas</i>,<i>Carta Gantt</i>, <i>BPMN</i>{" "}
              <i>
                (Bussiness Process Model and Notation o Modelo de Procesos de
                Negocio)
              </i>
              , <i>Casos de Uso</i>, <i>Estudio de Factibilidad</i>,{" "}
              <i>Definicion de Objetivos</i>, <i>Analisis de Problema</i>,
              <i>Propuestas de Solucion</i> y <i>Gestion de Riesgos</i>.
            </p>
            <p className="text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Herramientas que he utilizado son{" "}
              <i>Bizagi, Jira, Word, Excel, MS Project, Cacoo, Lucidchart</i>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
