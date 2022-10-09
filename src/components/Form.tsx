import { useState } from 'react';
import Steps from './Steps';
import Calendar from 'react-calendar';

function Form() {
  const [formStep, setFormStep] = useState<number>(1);

  return (
    <>
      <form>
      <div>
        <Steps formStep={formStep} />
        {formStep === 1 && <Kundgrupp />}
        {formStep === 2 && <Matt/>}
        {formStep === 3 && <Offert />}
        {formStep === 4 && <Bokning />}
        <button 
          type="button"
          onClick={() => setFormStep(formStep === 1 ? formStep : formStep - 1)}
        className={` ${formStep === 1 && "hidden" } ${formStep === 4 && "outline-none bg-gray-400" } "mt-1 ml-2 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"`}
      
        >
        Tillbaka
        </button>
        <button 
          type="button"
          onClick={() => setFormStep(formStep + 1)}
        className={` ${formStep >= 4 && "hidden" } "mt-1 ml-2 rounded-md border border-transparent bg-blue-600 py-2 px-3 text-base font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"`}
        disabled={formStep >= 4}
        >
          
        Nästa steg
      </button>

      <button 
          type="button"
          onClick={() => alert("Bokning klar")}
        className={` ${formStep < 4 && "hidden" } "mt-1 ml-2 rounded-md border border-transparent bg-green-600 py-2 px-3 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:text-sm"`}
        >
       Boka nu
      </button>
      </div>
      </form>
    </>
  );
}

function Kundgrupp() {
  return (
    <>
      <label htmlFor="kundgrupp" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start text-xs leading-7 text-gray-400">
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
      

      <label htmlFor="langd" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start text-xs leading-7 text-gray-400">
        Längd i meter
      </label>
      <input 
         id="langd"
          type="text"
          name="langd"
          className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          onChange={(e) => setLangd(parseInt(e.target.value))}

        ></input>
              <label htmlFor="bredd" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start text-xs leading-7 text-gray-400">
        Bredd i meter
      </label>
        <input
          id="bredd"
          type="text"
          name="bredd"
          className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          onChange={(e) => setBredd(parseInt(e.target.value))}

        ></input>
              <label htmlFor="hojd" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start text-xs leading-7 text-gray-400">
        Höjd i meter
      </label>
        <input
          id="hojd"
          type="text"
          name="hojd"
          className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          onChange={(e) => setHojd(parseInt(e.target.value))}
        ></input>

        <p className='my-4'>Pris: <span className='font-bold'>{vaggYta(langd, hojd, bredd) * pris} kr</span></p>

      </>
  );
}


function Offert() {
  return (
    <>
      
      <p className="mt-3 text-sm text-gray-500 mb-4">
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
      <label htmlFor="Bokning" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start text-xs leading-7 text-gray-400">
        Bokning
      </label>
      <Calendar onChange={onChange} value={value} className="mx-auto mb-2"/>
      </>
  );
}



export default Form;
