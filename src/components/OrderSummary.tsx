import { Disclosure } from "@headlessui/react";

const subtotal = "$108.00";
const taxes = "$9.92";

const total = "$141.92";
const products = [
  {
    id: 1,
    name: "Offert på målning",
    href: "#",
    price: "$36.00",
    imageSrc:
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    imageAlt: "Färg, målarfärger, penslar och roller mot en vägg",
  },
];

export default function Example() {
  return (
    <>
      <main className="lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
        <h1 className="sr-only">Checkout</h1>

        {/* Mobile order summary */}
        <section
          aria-labelledby="order-heading"
          className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
        >
          <Disclosure as="div" className="mx-auto max-w-lg">
            {({ open }) => (
              <>
                <div className="flex items-center justify-between">
                  <h2
                    id="order-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Offert
                  </h2>
                  <Disclosure.Button className="font-medium text-indigo-600 hover:text-indigo-500">
                    {open ? (
                      <span>Dölj specifikation</span>
                    ) : (
                      <span>Visa specifikation</span>
                    )}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel>
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 border-b border-gray-200"
                  >
                    {products.map((product) => (
                      <li key={product.id} className="flex space-x-6 py-6">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                        />
                        <div className="flex flex-col justify-between space-y-4">
                          <div className="space-y-1 text-sm font-medium">
                            <h3 className="text-gray-900">{product.name}</h3>

                            <p className="text-gray-500">Fast pris.</p>
                            <p className="text-gray-500">
                              Svanenmärkt målarfärg.
                            </p>
                            <p className="text-gray-500">
                              Intäckning, skrapning och spackling.{" "}
                            </p>
                            <p className="text-gray-500">
                              2-3 strykningar, klimatkompenserade transporter,
                              städning och återvinning av byggavfall.{" "}
                            </p>
                            <p className="text-gray-500">
                              Klart på 3 veckor och 5 års garanti på vårt
                              arbete!
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <form className="mt-10 flex space-x-4">
                    <label
                      htmlFor="rotavdrag-mobile"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rotavdrag
                    </label>

                    <input
                      type="checkbox"
                      id="rotavdrag-mobile"
                      name="rotavdrag-mobile"
                      className="block border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </form>

                  <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                    <div className="flex justify-between">
                      <dt>Summa ex. moms</dt>
                      <dd className="text-gray-900">{subtotal}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Moms</dt>
                      <dd className="text-gray-900">{taxes}</dd>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                      <dt>Summa ink. moms</dt>
                      <dd className="text-base">{total}</dd>
                    </div>
                  </dl>
                </Disclosure.Panel>

                <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                  <span className="text-base">Total</span>
                  <span className="text-base">{total}</span>
                </p>
              </>
            )}
          </Disclosure>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex"
        >
          <ul
            role="list"
            className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6"
          >
            {products.map((product) => (
              <li key={product.id} className="flex space-x-6 py-6">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                />
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-1 text-sm font-medium">
                    <h3 className="text-gray-900">{product.name}</h3>

                    <p className="text-gray-500">Fast pris.</p>
                    <p className="text-gray-500">Svanenmärkt målarfärg.</p>
                    <p className="text-gray-500">
                      Intäckning, skrapning och spackling.{" "}
                    </p>
                    <p className="text-gray-500">
                      2-3 strykningar, klimatkompenserade transporter, städning
                      och återvinning av byggavfall.{" "}
                    </p>
                    <p className="text-gray-500">
                      Klart på 3 veckor och 5 års garanti på vårt arbete!
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
            <form className="flex space-x-4">
              <label
                htmlFor="rotavdrag"
                className="block text-sm font-medium text-gray-700"
              >
                Rotavdrag
              </label>
              <input
                type="checkbox"
                id="rotavdrag"
                name="rotavdrag"
                className="block border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </form>

            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Summa ex. moms</dt>
                <dd className="text-gray-900">{subtotal}</dd>
              </div>

              <div className="flex justify-between">
                <dt>Moms</dt>
                <dd className="text-gray-900">{taxes}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt>Summa ink. moms</dt>
                <dd className="text-base">{total}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  );
}
