import { useState } from "react";
import Steps from "./Steps";
import Calendar from "react-calendar";

function Form(props: { formStep: number; formButtons: () => JSX.Element }) {
  const formStep = props.formStep;
  const FormButtons = props.formButtons;
  return (
    <>
      <form>
        <div>
          <Steps formStep={formStep} />
          {formStep === 1 && <Kundgrupp />}
          {formStep === 2 && <Matt />}
          {formStep === 3 && <Offert />}
          {formStep === 4 && <Bokning />}
          <FormButtons />
        </div>
      </form>
    </>
  );
}

function Kundgrupp() {
  return (
    <>
      <label
        htmlFor="kundgrupp"
        className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
      >
        Kundgrupp
      </label>
      <select
        id="kundgrupp"
        name="kundgrupp"
        className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      >
        <option>Privatperson</option>
        <option>Företag</option>
      </select>
    </>
  );
}

function Matt() {
  // const [matt, setMatt] = useState<number>(0);
  const [langd, setLangd] = useState<number>(0);
  const [bredd, setBredd] = useState<number>(0);
  const [hojd, setHojd] = useState<number>(0);

  const pris = 1500;
  const vaggYta = (langd: number, hojd: number, bredd: number) => {
    return langd * hojd * bredd;
  };

  return (
    <>
      <label
        htmlFor="langd"
        className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
      >
        Längd i meter
      </label>
      <input
        id="langd"
        type="text"
        name="langd"
        className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        onChange={(e) => setLangd(parseInt(e.target.value))}
      ></input>
      <label
        htmlFor="bredd"
        className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
      >
        Bredd i meter
      </label>
      <input
        id="bredd"
        type="text"
        name="bredd"
        className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        onChange={(e) => setBredd(parseInt(e.target.value))}
      ></input>
      <label
        htmlFor="hojd"
        className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
      >
        Höjd i meter
      </label>
      <input
        id="hojd"
        type="text"
        name="hojd"
        className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        onChange={(e) => setHojd(parseInt(e.target.value))}
      ></input>

      <p className="my-4">
        Pris:{" "}
        <span className="font-bold">
          {vaggYta(langd, hojd, bredd) * pris} kr
        </span>
      </p>
    </>
  );
}

function Offert() {
  return (
    <>
      <p className="mt-3 mb-4 text-sm text-gray-500">
        Offerten är endast en indikation på kostnad.{` `}
        <a href="#" className="font-medium text-gray-900 underline">
          Våra Villkor
        </a>
        .
      </p>
    </>
  );
}

function Bokning() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <label
        htmlFor="Bokning"
        className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
      >
        Bokning
      </label>
      <Calendar onChange={onChange} value={value} className="mx-auto mb-2" />
    </>
  );
}

export default Form;
