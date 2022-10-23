import { atom } from "recoil";

export const stepState = atom({
  key: "stepState",
  default: 0,
});

export const kundgruppState = atom({
  key: "kundgruppState",
  default: "",
});

export const arbetsobjektState = atom({
  key: "arbetsobjektState",
  default: "",
});

export const prisState = atom({
  key: "prisState",
  default: 0,
});

export const rumState = atom({
  key: "rumState",
  default: {
    langd: 0,
    bredd: 0,
    hojd: 0,
  },
});

export const bostadState = atom({
  key: "bostadState",
  default: {
    kvm: 0,
    fonster: 0,
    dorrar: 0,
  },
});