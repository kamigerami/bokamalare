import { useState } from "react";
import Form from "./Form";
import OrderSummary from "./OrderSummary";

export default function Hero() {
  const [formStep, setFormStep] = useState<number>(1);

  const formButtons = () => {
    return (
      <>
        <button
          type="button"
          onClick={() => setFormStep(formStep === 1 ? formStep : formStep - 1)}
          className={` ${formStep === 1 && "hidden"} ${
            formStep === 4 && "bg-gray-400 outline-none"
          } "mt-1 sm:text-sm" ml-2 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          Tillbaka
        </button>
        <button
          type="button"
          onClick={() => setFormStep(formStep + 1)}
          className={` ${
            formStep >= 4 && "hidden"
          } "mt-1 sm:text-sm" ml-2 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          disabled={formStep >= 4}
        >
          Nästa steg
        </button>
        <button
          type="button"
          onClick={() => alert("Bokning klar")}
          className={` ${
            formStep < 4 && "hidden"
          } "mt-1 sm:text-sm" ml-2 rounded-md border border-transparent bg-green-600 py-2 px-3 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
        >
          Boka nu
        </button>
      </>
    );
  };

  return (
    <main className="mx-auto mt-4 max-w-7xl px-4 pb-4 sm:mt-8 sm:px-6 lg:mt-12 lg:h-screen">
      <svg
        className="absolute bottom-0 right-0 hidden translate-x-1/2  transform text-blue-400 lg:top-0 lg:mt-28 xl:block xl:translate-x-0 xl:transform-none"
        width={546}
        height={384}
        viewBox="0 0 546 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width={364}
          height={384}
          fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
        />
      </svg>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:row-span-2 lg:text-left">
          <h1>
            <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
              Boka din målare
            </span>
            <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">
                Få en offert på måleri
              </span>
              <span className="inline-block text-blue-600">kostnadsfritt</span>{" "}
              <span className=" text-green-600">direkt</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Med bara några få klick kan du få en offert på din måleri direkt på
            skärmen eller på mail. Vi kommer och tittar på arbetet inom 72
            timmar och du bokar önskad tid själv.
          </p>
          <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
            <Form formStep={formStep} formButtons={formButtons} />
          </div>
        </div>

        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative mx-auto mt-12 w-full rounded-lg shadow-lg lg:max-w-md">
            {formStep != 3 && (
              <>
                <span className="sr-only">Se hur vi målar</span>
                <video
                  className="w-full ring-1 ring-blue-600"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source
                    src="https://joy.videvo.net/videvo_files/video/free/2021-05/large_watermarked/210518_05_Camera%20DIY_4k_012_preview.mp4"
                    type="video/mp4"
                  />
                </video>
              </>
            )}
            {formStep === 3 && (
              <OrderSummary />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}