import React from "react";
import { PortableText } from "@portabletext/react";
import {getClient} from '../../../lib/sanity.server'
import { useNextSanityImage } from 'next-sanity-image';
import Image from "next/image";

const Projects = ({ projects,image }) => {

  const myPortableTextComponents = {

    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a href={value.href} rel={rel} target='_blank' className="text-blue-400 font-bold transition-all duration-300 ease-in-out hover:text-blue-800">
            {children}
          </a>
        );
      },
    },
  };
  const getImageProps = (index) => {
    const imageProps = useNextSanityImage(
      getClient(false),
      image[index].image
    );
    return {...imageProps};
  }


  return (
    <>
      <div className="bg-slate-100 py-36" id="proyectos">
        <h2 className="w-full my-2 pt-10 text-5xl font-thunderBold tracking-wider leading-tight text-center text-gray-800">
          Proyectos / Desarrollos.
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-gradient-to-r from-[#080055] to-[#008ab9] w-40 sm:w-96 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {projects ? (
            projects.data.map((project, index) => {
              return (
                <div key={index}>
                  <div
                    className="rounded overflow-hidden shadow-xl"
                  >
                    {
                      project.isDeployed ?
                      <span className="bg-green-600 text-white absolute z-10 px-3 tracking-widest rounded-md">Desplegado</span>
                      :
                      <span className="bg-red-600 text-white absolute z-10 px-3 tracking-widest rounded-md">No Desplegado</span>
                    }
                    <Image
                      {...getImageProps(index)}
                      layout="responsive"
                      width={1000}
                      height={1000}
                      quality={80}
                      className="object-scale-down z-0"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {project.title}
                      </div>
                      <PortableText
                        value={project.description}
                        components={myPortableTextComponents}
                      />
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {project.tools ? (
                        project.tools.map((tool, index) => {
                          return (
                              <span
                                className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
                                style={{ backgroundColor: `${tool.toolColor}` }}
                                key={index}
                              >
                                {tool.toolName}
                              </span>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                    {
                      project.isDeployed ?
                      <div className="p-5">
                        <a href="#" className="bg-blue-700 p-3 text-white font-semibold rounded-lg transition-all ease-in-out tracking-wider hover:bg-blue-900">Ir al Sitio</a>
                      </div>
                      :
                      <></>
                    }
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
