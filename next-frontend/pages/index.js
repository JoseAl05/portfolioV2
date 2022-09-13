import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "./components/Nav/Nav";
import Callout from "./components/Callout/Callout";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { groq } from "next-sanity";

import { usePreviewSubscription } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import WorkClients from "./components/WorkClients/WorkClients";
import AboutMe from "./components/AboutMe/AboutMe";

export default function Home({ data, preview, image }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });
  return (
    <>
      <Nav />
      <div className="leading-normal tracking-normal">
        <Head>
          <title>José Pablo Arancibia Linker</title>
          <meta
            name="description"
            content="Mi nombre es José Pablo Arancibia Linker y soy Ingeniero en
                Informática con experiencia en desarrollo full stack incluyendo
                desarrollo front-end y back-end. Me apasiona aprender y ampliar
                continuamente mis conocimientos sobre el desarrollo de software.
                Soy una persona que aprende rápido y siempre está dispuesta a
                asumir nuevos retos. Trabajo duro y estoy comprometido a hacer
                el mejor trabajo posible."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Callout />
        <AboutMe />
        <Profile />
        <Projects projects={data} image={image} />
        <WorkClients />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export async function getServerSideProps({ params, preview = false }) {
  const query = groq`*[_type == 'project']`;
  const image = groq`*[_type == 'project']{image}`;
  const data = await getClient(preview).fetch(query);
  const dataImage = await getClient(preview).fetch(image);


  if (!data) return { notFound: true };



  return {
    props: {
      preview,
      data: { data },
      image: dataImage,
    },
  };
}
