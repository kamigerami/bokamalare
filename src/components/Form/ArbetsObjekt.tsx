import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ArbetsObjektForm } from "../../global";
import FormButton from "../FormButton";
import {
  arbetsobjektState,
  bostadState,
  prisState,
  rumState,
  stepState,
} from "../Recoil/atoms";

export const ArbetsObjekt = () => {
  const setState = useSetRecoilState(stepState);
  const setArbetsObjektState = useSetRecoilState(arbetsobjektState);
  const setRumState = useSetRecoilState(rumState);
  const setBostadState = useSetRecoilState(bostadState);
  const setPrisState = useSetRecoilState(prisState);

  const handlePrevious = () => {
    setState((oldState) => oldState - 1);
  };

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<ArbetsObjektForm>({
    defaultValues: {
      pris: 0,
    },
  });

  const watchAll = watch();

  const onSubmit: SubmitHandler<ArbetsObjektForm> = (data) => {
    setState((oldState) => oldState + 1);
    if (watchAll.rum) {
      console.log("rum selected");
      setRumState({
        langd: data.rum!.langd,
        bredd: data.rum!.bredd,
        hojd: data.rum!.hojd,
      });
      setArbetsObjektState("rum");
      setPrisState(calculateRoomPrice()!);
    }
    if (watchAll.bostad) {
      console.log("bostad selected");
      setBostadState({
        kvm: data.bostad!.kvm,
        fonster: data.bostad!.fonster,
        dorrar: data.bostad!.dorrar,
      });
      setArbetsObjektState("bostad");
      setPrisState(calculateRoomPrice()!);
    }
  };

  function calculateRoomPrice() {
    if (
      watchAll.rum &&
      watchAll.rum.langd > 0 &&
      watchAll.rum.bredd > 0 &&
      watchAll.rum.hojd > 0
    ) {
      console.log("calculate room price");
      const roomPrice =
        watchAll.rum.langd * watchAll.rum.hojd * watchAll.rum.bredd * 1500;
      return roomPrice;
    }

    if (
      watchAll.bostad &&
      watchAll.bostad.kvm > 0 &&
      watchAll.bostad.fonster &&
      watchAll.bostad.dorrar
    ) {
      console.log("calculate bostad price");
      const bostadPrice =
        watchAll.bostad.kvm * 1500 +
        watchAll.bostad.fonster * 500 +
        watchAll.bostad.dorrar * 1000;
      return bostadPrice;
    }
  }

  console.log("watchAll", watchAll);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative mt-4 flex flex-col items-center justify-between ">
        <div className="space-y-1 text-sm font-medium">
          <h3 className="text-gray-500">Jag vill måla om i</h3>
        </div>
      </div>
      <ul role="list" className="flex-auto px-6">
        {/* Rum eller bostad */}
        <li>
          <input
            className="mr-2"
            type="checkbox"
            {...register("rum")}
            disabled={watchAll.bostad ? true : false}
          />
          <label className="mt-1 space-x-1 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
            ett rum
          </label>
        </li>
        <li>
          <input
            className="mr-2"
            type="checkbox"
            {...register("bostad")}
            disabled={watchAll.rum ? true : false}
          />

          <label className="mt-1 space-x-1 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
            hela bostaden
          </label>
        </li>
        {watchAll.rum && (
          <>
            {/* rum */}

            <label className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              Längd i meter
            </label>
            <input
              type="number"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("rum.langd", {
                required: {
                  value: true,
                  message: "Längd måste anges",
                },
                min: 0,
                deps: ["rum.bredd", "rum.hojd", "rum"],
              })}
              min="0"
            ></input>
            <p className="text-xs text-red-500">
              {errors.rum?.langd && errors.rum.langd.message}
            </p>
            <label className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              Bredd i meter
            </label>
            <input
              type="number"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("rum.bredd", {
                required: {
                  value: true,
                  message: "Bredd måste anges",
                },
                min: 0,
                deps: ["rum.langd", "rum.hojd", "rum"],
              })}
              min="0"
            ></input>
            <p className="text-xs text-red-500">
              {errors.rum?.bredd && errors.rum.bredd.message}
            </p>
            <label className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              Höjd i meter
            </label>
            <input
              type="number"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("rum.hojd", {
                required: {
                  value: true,
                  message: "Höjd måste anges",
                },
                min: 0,
                deps: ["rum.bredd", "rum.langd", "rum.rum"],
              })}
              min="0"
            ></input>
            <p className="text-xs text-red-500">
              {errors.rum?.hojd && errors.rum.hojd.message}
            </p>
          </>
        )}
        {/* bostad */}
        {watchAll.bostad && (
          <>
            <label className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              kvadratmeter
            </label>
            <input
              type="number"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("bostad.kvm", {
                required: {
                  value: true,
                  message: "Kvadratmeter måste anges",
                },
                min: 0,
              })}
              min="0"
            ></input>
            <p className="text-xs text-red-500">
              {errors.bostad?.kvm && errors.bostad?.kvm.message}
            </p>
            <label className="mt-1 flex w-1/2 text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              Antal fönster
            </label>
            <input
              type="number"
              placeholder="0"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("bostad.fonster", { min: 0 })}
              min="0"
            ></input>

            <label className="mt-1 flex text-xs leading-7 text-gray-400 sm:ml-6 sm:justify-center lg:ml-0 lg:justify-start">
              Antal dörrar
            </label>
            <input
              type="number"
              placeholder="0"
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("bostad.dorrar", { min: 0 })}
              min="0"
            ></input>
          </>
        )}
        {/* pris */}
        <div className="mb-2 flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
          <dt className="space-y-6 text-sm font-medium">Pris</dt>
          <dd className="text-base">
            {calculateRoomPrice()}
            kr
            {/* <input
              className="mt-1 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              {...register("pris")}
            ></input> */}
          </dd>
        </div>
      </ul>

      <FormButton
        type="button"
        className="focus-outline-none bg-gray-400 outline-none ring-0 hover:bg-blue-400"
        onClick={handlePrevious}
      >
        Tillbaka
      </FormButton>

      <FormButton type="submit">Nästa</FormButton>
    </form>
  );
};
