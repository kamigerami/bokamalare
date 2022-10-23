import { useState } from "react";
import Calendar from "react-calendar";
import { useForm } from "react-hook-form";
import { RumForm, StepProps } from "../../global";

import FormButton from "../FormButton";

export const Bokning = (props: StepProps) => {
  const state = props.state;
  const setState = props.setState;

  const [value, onChange] = useState(new Date());

  const handlePrevious = () => {
    setState({ formDetails: { ...state.formDetails }, steps: stepState - 1 });
  };
  return (
    <>
      <div className="relative mt-4 mb-2 flex flex-col items-center justify-between ">
        <div className="space-y-1 text-sm font-medium">
          <h3 className="text-gray-900">
            Välj datum du vill att vi ska börja måla
          </h3>
        </div>
      </div>

      <Calendar onChange={onChange} value={value} className="mx-auto mb-2" />
      <FormButton
        type="button"
        className="focus-outline-none bg-gray-400 outline-none ring-0 hover:bg-blue-400"
        onClick={handlePrevious}
      >
        Tillbaka
      </FormButton>

      <FormButton
        type="submit"
        onClick={() => alert(JSON.stringify(state.formDetails))}
      >
        Boka
      </FormButton>
    </>
  );
};
