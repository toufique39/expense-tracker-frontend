import {
  Wallet,
  ChartPie,
  Target,
  ArrowLeftRight,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Income Tracking",
    description: "Record and monitor all your income sources in one place.",
  },
  {
    icon: ArrowLeftRight,
    title: "Expense Management",
    description: "Track daily expenses and organize your spending.",
  },
  {
    icon: ChartPie,
    title: "Financial Analytics",
    description: "Understand your financial habits through visual reports.",
  },
  {
    icon: Target,
    title: "Budget Planning",
    description: "Set monthly budgets and monitor your spending limits.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Everything You Need to Manage Money
          </h2>
          <p className="mt-4 text-gray-600">
            Simple tools to help you understand and control your finances.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg sm:p-7"
              >
                <div className="inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600 sm:leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
