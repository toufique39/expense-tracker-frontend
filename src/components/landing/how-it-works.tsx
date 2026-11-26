const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up and create your personal finance account.",
  },
  {
    number: "02",
    title: "Record Transactions",
    description: "Add your income and expenses whenever you need.",
  },
  {
    number: "03",
    title: "Track Your Progress",
    description: "Review your balance, budgets, and financial reports.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600">
            Start managing your money in three simple steps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`rounded-2xl bg-white p-6 shadow-sm sm:p-8 ${
                index === steps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-4xl font-extrabold text-indigo-200">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
