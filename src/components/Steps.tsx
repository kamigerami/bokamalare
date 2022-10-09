
function Steps(props: { formStep: any }) {

  const formStep = props.formStep;

  const steps = [
    { step: 1,id: "Steg 1", name: "Kundgrupp", status: formStep > 1 ? "complete" : formStep === 1 ? "current" : "upcoming" },
    {step: 2, id: "Steg 2", name: "Mått", status: formStep > 2 ? "complete" : formStep === 2 ? "current" : "upcoming"},
    { step: 3,id: "Steg 3", name: "Offert", status: formStep > 3 ? "complete" : formStep === 3 ? "current" : "upcoming" },
    { step: 4,id: "Steg 4", name: "Bokning",  status:  formStep > 4 ? "complete" : formStep === 4 ? "current" : "upcoming" },
  ];
  
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex space-y-0 space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="flex-1">
            {step.status === "complete" ? (
              <button className="group flex flex-col  border-blue-600 py-2 hover:border-blue-800 border-l-0 border-t-4 pl-0 pt-4 pb-0">
                <span className="text-sm font-medium text-blue-600 group-hover:text-blue-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            ) : step.status === "current" ? (
              <>
                <button
                  className="flex flex-col border-blue-600 py-2 border-l-0 border-t-4 pl-0 pt-4 pb-0"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-blue-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </button>
              </>
            ) : (
              <button
                className="group flex flex-col  border-gray-200 py-2 hover:border-gray-300 border-l-0 border-t-4 pl-0 pt-4 pb-0"
              >
                <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Steps;
