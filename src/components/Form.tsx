import { useState } from "react";
import Calendar from "react-calendar";
import OrderSummary from "./OrderSummary";

function Form(props: { formStep: number; FormButtons: () => JSX.Element }) {
  const formStep = props.formStep;
  const FormButtons = props.FormButtons;

  return (
    <>
      <form>
        <section
          aria-labelledby="summary-heading"
          className="flex-col justify-between rounded-sm bg-gray-50 lg:flex"
        >
          {formStep === 1 && <Kundgrupp />}
          {formStep === 2 && <Matt />}
          {formStep === 3 && <OrderSummary />}
          {formStep === 4 && <Bokning />}
          {formStep !== 0 && (
            <div className="mb-4 px-4">
              <FormButtons />
            </div>
          )}
        </section>
      </form>
    </>
  );
}

function Kundgrupp() {
  return (
    <>
      <div className="mt-2 flex flex-col items-center ">
        <div className="flex flex-col  items-center justify-center text-sm font-medium">
          <h3 className="text-gray-900">Välj kundgrupp</h3>
          <label
            htmlFor="langd"
            className="mt-1 items-start text-xs leading-7 text-gray-400"
          >
            Privatperson eller företagskund
          </label>
        </div>
        <p className="max-auto w-1/2 pt-4 text-sm text-gray-500">
          Beroende på om du väljer att ta in en offert som privatperson eller
          företagskund skiljer sig offerten en del. Företag betalar inte någon
          moms medan privatpersoner får använda sig av ROT och RUT vilket ger
          dig 30% rabatt på offerten.
        </p>

        <ul role="list" className="py-6">
          <select
            id="kundgrupp"
            name="kundgrupp"
            className="mx-1 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          >
            <option>Privatperson</option>
            <option>Företag</option>
          </select>

          <div className="mb-2 flex items-center justify-between  pt-6 text-gray-900">
            <div className="flex flex-col justify-between space-y-4"></div>
          </div>
        </ul>
      </div>
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
      <div className="mt-2 flex flex-col items-center justify-between ">
        <div className="space-y-1 text-sm font-medium">
          <h3 className="text-gray-500">Jag vill måla om i</h3>
        </div>
      </div>
      <ul role="list" className="flex-auto  overflow-y-auto px-6">
        {/* Rum eller bostad */}
        <li>
          <input
            className="mr-2"
            type="checkbox"
            id="rum"
            name="rum"
            value="rum"
          />
          <label
            htmlFor="rum"
            className="mt-1 space-x-1 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
          >
            ett rum
          </label>
        </li>
        <li>
          <input
            className="mr-2"
            type="checkbox"
            id="bostad"
            name="bostad"
            value="bostad"
          />
          <label
            htmlFor="bostad"
            className="mt-1 space-x-1 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
          >
            hela bostaden
          </label>
        </li>

        {/* Yta ett rum */}
        <label
          htmlFor="langd"
          className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
        >
          Längd i meter
        </label>
        <input
          id="langd"
          type="text"
          name="langd"
          className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
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
          className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          onChange={(e) => setBredd(parseInt(e.target.value))}
        ></input>
        <label
          htmlFor="hojd"
          className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start"
        >
          Höjd i meter
        </label>
        <input
          id="hojd"
          type="text"
          name="hojd"
          className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          onChange={(e) => setHojd(parseInt(e.target.value))}
        ></input>

        {/* Yta ett rum end */}
        
        <div className="mb-2 flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt className="space-y-6 text-sm font-medium">Pris</dt>
          <dd className="text-base">
            {" "}
            {vaggYta(langd, hojd, bredd) * pris} kr
          </dd>
        </div>
      </ul>
    </>
  );
}

function Bokning() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="mt-2 mb-2 flex flex-col items-center justify-between ">
        <div className="space-y-1 text-sm font-medium">
          <h3 className="text-gray-900">
            Välj datum du vill att vi ska komma och titta på jobbet
          </h3>
        </div>
      </div>

      <Calendar onChange={onChange} value={value} className="mx-auto mb-2" />
    </>
  );
}

export default Form;
