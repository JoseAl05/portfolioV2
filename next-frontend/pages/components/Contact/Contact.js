import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      if (res.ok) {
        setIsLoading(false);
        toast.success("Mensaje Enviado Correctamente!");
      }
      if (res.status === 500) {
        setIsLoading(false);
        toast.error("Ocurrio un error, por favor intente nuevamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ fullname: "", email: "", subject: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <>
      {/* <div className="bg-gray-100 w-full">
            <h1 className="text-black text-4xl font-thunderBold text-center pt-5">¿Necesitas una pagina web?</h1>
            <h2 className="text-black text-2xl font-thunderMedium text-center pt-5">No dudes en contactarme!</h2>
        </div> */}
      <div className="bg-gray-300" id="contacto">
        <Toaster />
        <div className="py-8 lg:py-40 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            ¿Necesitas una pagina web?
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-600  sm:text-xl">
            ¿Necesitas una pagina web para tu negocio?, ¿Deseas crear un
            portfolio para exponer tus experiencias y proyectos?. Envia un
            mensaje para poder contactarme!.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Ingrese su E-mail. Ej: nombre@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Asunto
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                {...register("subject", { required: true })}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Ingrese el motivo de su mensaje."
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                {...register("message", { required: true })}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Deje su mensaje..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#080055] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
