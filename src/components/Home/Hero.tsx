import Form from "../Form/Form";
import Steps from "./Steps";
import { useRecoilState } from "recoil";
import { stepState } from "../Recoil/atoms";

export default function Hero() {
  const [step, setStepState] = useRecoilState(stepState);

  return (
    <>
      <div className="mx-auto mt-4 max-w-7xl px-4 pb-4 sm:mt-8 sm:px-6 lg:mt-12 lg:h-screen">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:row-span-2 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
                Boka din målare
              </span>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">
                  Få en offert på måleri
                </span>
                <span className="inline-block text-blue-600">
                  kostnadsfritt
                </span>{" "}
                <span className=" text-green-600">direkt</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Med bara några få klick kan du få en offert på din måleri direkt
              på skärmen eller på mail. Vi kommer och tittar på arbetet inom 72
              timmar och du bokar önskad tid själv.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <Steps />
              {step === 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => setStepState(1)}
                    className={
                      "mt-3 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    }
                  >
                    Skapa offert
                  </button>
                  <p className="mt-3 mb-4 text-sm text-gray-500">
                    Offerten är endast en indikation på kostnad.{` `}
                    <a href="#" className="font-medium text-gray-900 underline">
                      Våra Villkor
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="sm:mx-auto lg:col-span-6 lg:mt-0 lg:flex lg:w-full  ">
            {step === 0 && (
              <>
                <span className="sr-only">Se hur vi målar</span>
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="relative inset-0 top-0 hidden lg:block"
                >
                  <source
                    src="https://joy.videvo.net/videvo_files/video/free/2021-05/large_watermarked/210518_05_Camera%20DIY_4k_012_preview.mp4"
                    type="video/mp4"
                  />
                </video>
              </>
            )}

            {step != 0 && (
              <div className="inset-0 top-0 w-full">
                <Form />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
