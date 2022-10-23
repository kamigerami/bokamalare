import Offert from "./Offert";
import { Kundgrupp } from "./Kundgrupp";
import { ArbetsObjekt } from "./ArbetsObjekt";
import { Bokning } from "./Bokning";
import {
  arbetsobjektState,
  bostadState,
  kundgruppState,
  prisState,
  rumState,
  stepState,
} from "../Recoil/atoms";
import { useRecoilValue } from "recoil";

const Form = () => {
  const step = useRecoilValue(stepState);
  const kundgrupp = useRecoilValue(kundgruppState);
  const arbetsobjekt = useRecoilValue(arbetsobjektState);
  const rum = useRecoilValue(rumState);
  const bostad = useRecoilValue(bostadState);
  const pris = useRecoilValue(prisState);

  const allValues = {
    step,
    kundgrupp,
    arbetsobjekt,
    pris,
    rum,
    bostad,
  };

  const RenderSteps = (): JSX.Element => {
    switch (step) {
      case 1:
        return <Kundgrupp />;
      case 2:
        return <ArbetsObjekt />;
      case 3:        
        return <Offert />;
      // case 4:
      //   return <Bokning />;
    }
    return <></>;
  };

  return (
    <>
      <section
        aria-labelledby="summary-heading"
        className="relative flex-col justify-between rounded-sm lg:flex"
      >
        <RenderSteps />
        <p>RECOIL {JSON.stringify(allValues)}</p>
        {/* keep kundgrupp, objekt, mått, pris, rotavdrag -> date ->  */}
      </section>
    </>
  );
};

export default Form;
