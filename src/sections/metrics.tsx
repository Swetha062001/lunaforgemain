import Container from "../components/container";


const metrics = [
  {
    value: "70%",
    label: "API Performance Improvement",
  },
  {
    value: "90+",
    label: "PageSpeed Scores",
  },
  {
    value: "SEO",
    label: "First Architecture",
  },
  {
    value: "Real",
    label: "Production Systems",
  },
];

export default function Metrics() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-4xl font-semibold tracking-tight">
                {metric.value}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}