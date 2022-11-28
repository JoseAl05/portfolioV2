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
            <h1 className="font-thunderMedium text-2xl sm:text-4xl text-black my-10 border-b-2 border-r-2 border-l-2 w-full text-center border-[#005fa7] rounded-b-lg">
              Desarrollo Web.
            </h1>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Me gusta el desarrollo web, por la utilidad que le puede brindar a
              un pequeño negocio o a una empresa. Me he aventurado con varias herramientas de desarrollo web,
              desde{" "} lo básico, como <i><b>HTML</b></i>,
              <i><b>CSS</b></i> y <i><b>Javascript</b></i> hasta frameworks como <i><b>ASP .NET</b></i>,
              <i><b>Shiny</b></i>, <i><b>Angular</b></i> y actualmente las herramientas front-end con
              las que trabajo, me siento mas comodo y mas experiencia tengo, <i><b>React</b></i>,{" "}
              <i><b>NextJS</b></i> y <i><b>TailwindCSS</b></i>.
            </p>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Por otro lado, en el desarrollo del back-end, he utilizado{" "}
              <i><b>Express</b></i> para la configuracion del servidor, <i><b>Prisma</b></i> y{" "}
              <i><b>Sequelize</b></i> como ORM's y <i><b>API Rest</b></i> y <i><b>GraphQL</b></i>{" "}
              para el control, llamadas y configuración de los endpoints para la API.
            </p>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Como bases de datos SQL, he trabajado con <i><b>SQL Server</b></i>, <i><b>MySQL</b></i>, y
              <i><b>MongoDB</b></i> como base de datos NoSQL.
            </p>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Como integraciones, he utilizado <i><b>AWS S3 Bucket</b></i> para el
              almacenamiento de archivos, <i><b>Auth0</b></i> para la autenticación de
              usuarios y <i><b>Sanity</b></i> y <i><b>DatoCMS</b></i> como CMS's
              <i>
                <b>
                  (Content Managment System o Sistema de Gestión de Contenidos)
                </b>
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
          <div className="flex flex-col items-end sm:items-center w-full sm:w-1/2">
            <h1 className="font-thunderMedium text-2xl sm:text-4xl text-black my-10 border-t-2 border-r-2 border-l-2 w-full text-center border-[#005fa7] rounded-t-lg">
              Ingeniería de Software.
            </h1>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              La Ingeniería de Software es muy importante al momento de
              desarrollar aplicaciones. Se deben aplicar metodologías, modelos
              de desarrollo, generar documentación para generar un software,
              aplicación o sistema confiable y de calidad.
            </p>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Para el desarrollo de proyectos, he aplicado la{" "}
              <i><b>Captura, Especificación y Validación de Requerimientos</b></i>,{" "}
              <i><b>Modelos de Proceso de Desarrollo</b></i>, <i><b>Documentación</b></i>, la
              cual incluye{" "}
              <i><b>Diagramas</b></i>,<i><b>Carta Gantt</b></i>, <i><b>BPMN</b></i>{" "}
              <i>
                <b>
                  (Bussiness Process Model and Notation o Modelo de Procesos de
                  Negocio)
                </b>
              </i>
              , <i><b>Casos de Uso</b></i>, <i><b>Estudio de Factibilidad</b></i>,{" "}
              <i><b>Definición de Objetivos</b></i>, <i><b>Analisis de Problema</b></i>,
              <i><b>Propuestas de Solución</b></i> y <i><b>Gestión de Riesgos</b></i>.
            </p>
            <p className="text-lg sm:text-2xl font-thunderLight leading-8 tracking-wider w-full text-center">
              Herramientas que he utilizado son{" "}
              <i><b>Bizagi, Jira, Word, Excel, MS Project, Cacoo, Lucidchart</b></i>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
