import { useRecoilValue } from "recoil";
import {stepState} from "../Recoil/atoms";

const Steps = () => {
  const step = useRecoilValue(stepState);

  console.log("state step is", JSON.stringify(step));

  // const steps = [
  //   {
  //     step: 1,
  //     id: "Steg 1",
  //     name: "Kundgrupp",
  //     status:
  //       stepState > 1 ? "complete" : stepState === 1 ? "current" : "upcoming",
  //   },
  //   {
  //     step: 2,
  //     id: "Steg 2",
  //     name: "Mått",
  //     status:
  //       stepState > 2 ? "complete" : stepState === 2 ? "current" : "upcoming",
  //   },
  //   {
  //     step: 3,
  //     id: "Steg 3",
  //     name: "Offert",
  //     status:
  //       stepState > 3 ? "complete" : stepState === 3 ? "current" : "upcoming",
  //   },
  //   {
  //     step: 4,
  //     id: "Steg 4",
  //     name: "Bokning",
  //     status:
  //       stepState > 4 ? "complete" : stepState === 4 ? "current" : "upcoming",
  //   },
  // ];

  return <> </>;
};
//   return (
//     <nav aria-label="Progress">
//       <ol role="list" className="flex space-y-0 space-x-8">
//         {steps.map((step) => (
//           <li key={step.name} className="flex-1">
//             {step.status === "complete" ? (
//               <button className="group flex flex-col  border-l-0 border-t-4 border-blue-600 py-2 pl-0 pt-4 pb-0 hover:border-blue-800">
//                 <span className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
//                   {step.id}
//                 </span>
//                 <span className="text-sm font-medium">{step.name}</span>
//               </button>
//             ) : step.status === "current" ? (
//               <>
//                 <button
//                   className="flex flex-col border-l-0 border-t-4 border-blue-600 py-2 pl-0 pt-4 pb-0"
//                   aria-current="step"
//                 >
//                   <span className="text-sm font-medium text-blue-600">
//                     {step.id}
//                   </span>
//                   <span></span>
//                   <span className="text-sm font-medium">{step.name}</span>
//                 </button>
//               </>
//             ) : (
//               <button className="group flex flex-col  border-l-0 border-t-4 border-gray-200 py-2 pl-0 pt-4 pb-0 hover:border-gray-300">
//                 <span></span>
//                 <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
//                   {step.id}
//                 </span>
//                 <span className="text-sm font-medium">{step.name}</span>
//               </button>
//             )}
//           </li>
//         ))}
//       </ol>
//     </nav>
//   );
// }

export default Steps;
