import Link from "next/link";
import {
  ArrowRight,
  Scissors,
  Ruler,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description:
      "Outfits carefully crafted according to your measurements, style and preferences.",
  },
  {
    icon: Sparkles,
    title: "Traditional Embroidery",
    description:
      "Beautiful embroidery details that bring character and elegance to every outfit.",
  },
  {
    icon: Ruler,
    title: "Perfect Fitting",
    description:
      "Your measurements are carefully considered to create a comfortable and refined fit.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Craftsmanship",
    description:
      "We focus on quality fabrics, finishing and attention to detail in every piece.",
  },
];

const featuredDesigns = [
  {
    name: "Classic Senator",
    category: "Senator Wear",
  },
  {
    name: "Royal Agbada",
    category: "Agbada",
  },
  {
    name: "Modern Kaftan",
    category: "Kaftan",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#151515]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(176,138,62,0.18),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b46a]">
              <span className="h-px w-10 bg-[#b08a3e]" />
              Traditional Craftsmanship
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Crafted for
              <span className="block text-[#d4b46a]">Your Style.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Premium traditional and contemporary clothing, carefully
              tailored to your measurements, personality and occasion.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/designs"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d4b46a] px-7 py-4 text-sm font-bold text-[#151515] transition hover:bg-[#b08a3e] hover:text-white"
              >
                Explore Designs
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d4b46a] hover:text-[#d4b46a]"
              >
                Start Your Order
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-right lg:block">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            UMTAZ CLOTHING
          </p>
          <p className="mt-1 text-xs text-white/50">
            Tradition · Style · Excellence
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b08a3e]">
            The UMTAZ Experience
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#151515] sm:text-5xl">
            Where tradition meets modern style.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">
            At UMTAZ Clothing, we believe great clothing is more than fabric
            and stitches. It is about identity, confidence and the way you
            present yourself. Every outfit is made with care and attention
            to detail.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b08a3e]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-[#151515] sm:text-5xl">
                Tailored with purpose.
              </h2>
            </div>

            <Link
              href="/services"
              className="group flex items-center gap-2 text-sm font-semibold text-[#151515]"
            >
              View all services
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="bg-white p-8 transition hover:bg-[#f8f5ef]"
                >
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="text-[#b08a3e]"
                  />

                  <h3 className="mt-7 text-lg font-semibold text-[#151515]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="bg-[#151515] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4b46a]">
                Featured Designs
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
                Discover your next look.
              </h2>
            </div>

            <Link
              href="/designs"
              className="group flex items-center gap-2 text-sm font-semibold text-white"
            >
              View all designs
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredDesigns.map((design, index) => (
              <Link
                href="/designs"
                key={design.name}
                className="group relative flex aspect-[4/5] overflow-hidden rounded-2xl bg-[#242424]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-auto w-full bg-gradient-to-t from-black/80 to-transparent p-7 pt-24">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d4b46a]">
                    {design.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {design.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-white/60 transition group-hover:text-white">
                    View design
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f8f5ef] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b08a3e]">
              Simple Process
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[#151515] sm:text-5xl">
              From idea to outfit.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["01", "Choose a Design", "Browse our designs and choose the style you love."],
              ["02", "Submit Measurements", "Provide your measurements or visit us for fitting."],
              ["03", "We Craft", "Our tailors carefully cut, sew and finish your outfit."],
              ["04", "Wear With Confidence", "Collect your completed outfit and enjoy the fit."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative">
                <span className="text-5xl font-bold text-[#b08a3e]/20">
                  {number}
                </span>

                <h3 className="mt-4 text-lg font-semibold text-[#151515]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/55">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b08a3e] px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Your next outfit starts here
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Ready to create something exceptional?
            </h2>
          </div>

          <Link
            href="/designs"
            className="shrink-0 rounded-full bg-[#151515] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#151515]"
          >
            Start Your Order
          </Link>
        </div>
      </section>
    </>
  );
}