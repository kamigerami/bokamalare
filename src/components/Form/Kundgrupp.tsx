import { SubmitHandler, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { KundgruppForm } from "../../global";
import FormButton from "../FormButton";
import { stepState, kundgruppState } from "../Recoil/atoms";

export const Kundgrupp = () => {
  const setState = useSetRecoilState(stepState);
  const setKundgruppState = useSetRecoilState(kundgruppState);

  const handlePrevious = () => {
    setState((oldState) => oldState - 1);
  };

  const { handleSubmit, register } = useForm<KundgruppForm>();

  const onSubmit: SubmitHandler<KundgruppForm> = (data) => {
    setState((oldState) => oldState + 1);
    setKundgruppState(data.kundgrupp);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mt-4 flex flex-col items-center">
        <div className="flex flex-col  items-center justify-center text-sm font-medium">
          <h3 className="text-gray-900">Välj kundgrupp</h3>
          <label className="mt-1 items-start text-xs leading-7 text-gray-400">
            Privatperson eller företagskund
          </label>
        </div>
        <p className="max-auto w-1/2 pt-4 text-sm text-gray-500">
          Beroende på om du väljer att ta in en offert som privatperson eller
          företagskund skiljer sig offerten en del.
          <br></br>
          <br></br>
          Företag betalar inte någon moms medan privatpersoner får använda sig
          av ROT och RUT vilket ger dig 30% rabatt på offerten.
        </p>

        <ul role="list" className="py-6">
          <select
            className="mx-1 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            {...register("kundgrupp")}
          >
            <option value="privatperson">Privatperson</option>
            <option value="företag">Företag</option>
          </select>

          <div className="mb-2 flex items-center justify-between  pt-6 text-gray-900">
            <FormButton
              type="button"
              className="focus-outline-none bg-gray-400 outline-none ring-0 hover:bg-blue-400"
              onClick={handlePrevious}
            >
              Tillbaka
            </FormButton>

            <FormButton type="submit">Nästa</FormButton>
          </div>
        </ul>
      </div>
    </form>
  );
};
