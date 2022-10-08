import Form from './Form';
import Steps from './Steps';

export default function Hero() {
  return (

    <main className="mx-auto max-w-7xl px-4 mt-4 sm:mt-8 sm:px-6 lg:mt-12">
        <svg
          className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-red-400 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
          width={364}
          height={384}
          viewBox="0 0 364 384"
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
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
        <h1>
          <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
            Boka din målare
          </span>
          <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            <span className="block text-gray-900">Få en offert på måleri</span>
            <span className="inline-block text-blue-600">kostnadsfritt</span>{" "}
            <span className=" text-green-600">direkt</span>
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Med bara några få klick kan du få en offert på din måleri direkt på skärmen eller på mail.
          Vi kommer och tittar på arbetet inom 72 timmar och du bokar önskad tid själv.
        </p>
        <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
          <Steps />
            <Form/>
          <p className="mt-3 text-sm text-gray-500">
            Offerten är endast en indikation på kostnad.{` `}
            <a href="#" className="font-medium text-gray-900 underline">
            Våra Villkor
            </a>
            .
          </p>
        </div>
      </div>
      <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">

        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">

            <span className="sr-only">Se hur vi målar</span>
            <video className="w-full ring-1 ring-blue-600" autoPlay muted playsInline loop>
                <source src="https://joy.videvo.net/videvo_files/video/free/2021-05/large_watermarked/210518_05_Camera%20DIY_4k_012_preview.mp4" 
                type="video/mp4" />
            </video>
           
        </div>
      </div>
    </div>
  </main>

  );
}
