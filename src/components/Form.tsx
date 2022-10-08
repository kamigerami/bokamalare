function Form() {
  return (
    <>
      <form>
        <Typ />
      </form>
    </>
  );
}

function Typ() {
  return (
    <div>
      <label htmlFor="konsument" className="flex mt-1 w-1/2 sm:ml-6 sm:justify-center md:ml-0 md:justify-start text-xs leading-7 text-gray-400">
        Privatperson eller Företag
      </label>
      <select
        id="konsument"
        name="konsument"
        className="mt-1 w-1/2 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        <option>Privatperson</option>
        <option>Företag</option>
      </select>
      <button className="mt-1 ml-2 rounded-md border border-transparent bg-indigo-600 py-2 px-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">
        Nästa steg 
      </button>
      </div>
  );
}

function Antal({}: Props) {
  return (
    <>
      <label htmlFor="antal" className="text-sm leading-7 text-gray-400">
        Antal
      </label>
      <input
        id="antal"
        type="text"
        name="antal"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      ></input>
    </>
  );
}

{
  /* <button className="mt-6 flex rounded border-0 bg-purple-600 py-2 px-8 text-lg text-white hover:bg-purple-700 focus:outline-none">
    Gratis offert
  </button> */
}

export default Form;
