export type RumForm = {
  langd: number;
  bredd: number;
  hojd: number;
};
export type BostadsForm = {
  dorrar: number;
  fonster: number;
  kvm: number;
};

export type ArbetsObjektForm = {
  arbetsobjekt: string;
  rum?: RumForm;
  bostad?: BostadsForm;
  pris?: number;
};

export type KundgruppForm = {
  kundgrupp: string;
};

export type StepProps = {
  stepState: number;
  setStepState?: React.Dispatch<React.SetStateAction<number>>;
};
