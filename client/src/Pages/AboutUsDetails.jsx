import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Briefcase,
  FileText,
  HandHelping,
  CircleCheck,
  Award,
  Receipt,
  FileCheck,
  Target,
  Route,
  UserCheck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const IMAGE_URL =
  "https://t4.ftcdn.net/jpg/02/85/24/41/360_F_285244154_w7VBev0f73f0JP2LIha5NPI6sv0rsXaf.jpg";

const services = [
  "Loan application assistance",
  "Business loan documentation",
  "Project report preparation",
  "MSME loan assistance",
  "Government scheme-related loan guidance",
  "Financial documentation support",
  "Application submission assistance",
  "Follow-up and coordination support",
];

const transparency = [
  { icon: <Receipt size={20} />, text: "Applicable service charges" },
  { icon: <FileCheck size={20} />, text: "Documentation requirements" },
  { icon: <Target size={20} />, text: "Service scope" },
  { icon: <Route size={20} />, text: "Application procedures" },
  { icon: <UserCheck size={20} />, text: "Customer responsibilities" },
  { icon: <RotateCcw size={20} />, text: "Refund and cancellation conditions" },
];

const SectionHeading = ({ label, title, center = false, light = false }) => (
  <div className={center ? "text-center" : ""}>
    <span
      className={`block h-[3px] w-10 bg-[#07bf69] ${center ? "mx-auto" : ""}`}
    />
    <p className="mt-3 text-xs font-bold tracking-[0.2em] text-[#07bf69] uppercase">
      {label}
    </p>
    <h2
      className={`mt-2 text-2xl md:text-3xl font-extrabold ${
        light ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h2>
  </div>
);

const AboutUsDetails = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="about-details" className="overflow-x-clip">
      {/* Page banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 pt-40 pb-20 md:pt-44 md:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
          }}
        />
        <div className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-[#07bf69]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#07bf69] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#07bf69]/40 bg-[#07bf69]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-[#07bf69]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#07bf69]" />
              ABOUT LOAN GURU
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              About <span className="text-[#07bf69]">Us</span>
            </h1>
            <p className="mt-4 max-w-xl text-base md:text-lg text-slate-300">
              Loan Consultancy &amp; Documentation Assistance — clear,
              professional and transparent support for your financing needs.
            </p>
          </div>

          <div
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm md:max-w-xs"
            data-aos="fade-left"
          >
            <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-400">
              A BRAND OF
            </p>
            <p className="mt-1 font-semibold text-white">
              OnePulse Corporate Services Private Limited
            </p>
          </div>
        </div>
      </section>

      {/* 1. Who we are */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative md:min-h-[22rem] flex flex-col md:block">
            <img
              src={IMAGE_URL}
              alt="Loan consultancy"
              className="order-1 w-full h-56 md:h-[22rem] md:w-[62%] md:ml-auto object-cover rounded-xl shadow-xl"
              data-aos="fade-left"
            />
            <div
              className="order-2 -mt-8 mx-4 md:mx-0 md:mt-0 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[52%] rounded-xl bg-slate-900 p-7 md:p-9 text-white shadow-2xl"
              data-aos="fade-right"
            >
              <span className="block h-[3px] w-10 bg-[#07bf69]" />
              <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-[#07bf69]">
                WHO WE ARE
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight">
                Loan Consultancy &amp; Documentation Assistance.
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300">
                <span className="font-semibold text-white">Loan Guru</span> is
                a financial consultancy and loan documentation assistance
                brand operated by{" "}
                <span className="font-semibold text-white">
                  OnePulse Corporate Services Private Limited
                </span>
                .
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                Our objective is to make the loan application and
                documentation process easier to understand for individuals,
                entrepreneurs, and businesses seeking suitable financing
                options.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Briefcase size={18} className="text-[#07bf69]" />
                  <span className="text-[10px] tracking-widest text-slate-300">
                    CONSULTANCY
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FileText size={18} className="text-[#07bf69]" />
                  <span className="text-[10px] tracking-widest text-slate-300">
                    DOCUMENTATION
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <HandHelping size={18} className="text-[#07bf69]" />
                  <span className="text-[10px] tracking-widest text-slate-300">
                    ASSISTANCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What we do */}
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16 items-start">
          <div data-aos="fade-right">
            <SectionHeading label="Our Services" title="What We Do" />
            <p className="mt-5 text-slate-600 leading-relaxed">
              We assist customers with the preparation and organization of
              documentation required for applicable loan applications. Our
              services may include:
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
            {services.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm border border-slate-200"
              >
                <CircleCheck
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-[#07bf69]"
                />
                <span className="text-sm md:text-base text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Approach & Role (timeline) */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="relative">
            <span className="absolute top-2 bottom-2 left-[5px] md:left-1/2 md:-translate-x-1/2 w-px bg-gradient-to-b from-[#07bf69] via-[#07bf69]/40 to-transparent" />

            <div
              className="relative pl-9 md:pl-0 md:w-1/2 md:pr-12 md:text-right"
              data-aos="fade-right"
            >
              <span className="absolute top-2 left-0 md:left-auto md:right-0 md:translate-x-1/2 h-[11px] w-[11px] rotate-45 bg-[#07bf69]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Our <span className="text-[#07bf69]">Approach</span>
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We believe that customers should clearly understand the
                documentation, process, requirements, and responsibilities
                involved before proceeding with a loan application.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Our team works with customers to organize relevant
                information and prepare documentation based on the
                requirements of the applicable lender or scheme.
              </p>
            </div>

            <div
              className="relative mt-12 pl-9 md:pl-12 md:ml-[50%] md:w-1/2 md:mt-16"
              data-aos="fade-left"
            >
              <span className="absolute top-2 left-0 md:-translate-x-1/2 h-[11px] w-[11px] rotate-45 bg-[#07bf69]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Our <span className="text-[#07bf69]">Role</span>
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Loan Guru acts as a{" "}
                <span className="font-semibold text-slate-900">
                  consultancy and documentation assistance service
                </span>
                . We are not the lending institution and do not
                independently sanction or disburse loans.
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Loan approval, sanction amount, interest rate, tenure, and
                disbursement are determined by the respective bank, NBFC,
                financial institution, or competent authority according to
                its policies and eligibility criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Transparent service */}
      <section className="bg-slate-100 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">
          <div data-aos="fade-right">
            <SectionHeading label="No Surprises" title="Transparent Service" />
            <p className="mt-5 text-slate-600 leading-relaxed">
              We aim to provide clear information about:
            </p>
            <div className="mt-8 rounded-xl bg-slate-900 p-6 text-white shadow-xl">
              <ShieldCheck size={26} className="text-[#07bf69]" />
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-300">
                We encourage customers to review our{" "}
                <span className="font-semibold text-white">
                  Terms &amp; Conditions
                </span>
                ,{" "}
                <span className="font-semibold text-white">
                  Privacy Policy
                </span>
                , and{" "}
                <span className="font-semibold text-white">
                  Refund &amp; Cancellation Policy
                </span>{" "}
                before making a payment.
              </p>
            </div>
          </div>

          <ul
            className="rounded-xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-200 overflow-hidden"
            data-aos="fade-left"
          >
            {transparency.map((item, index) => (
              <li
                key={item.text}
                className="group flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 transition-colors hover:bg-slate-50"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#07bf69]/10 text-[#07bf69] transition-colors group-hover:bg-[#07bf69] group-hover:text-white">
                  {item.icon}
                </span>
                <span className="flex-1 font-semibold text-slate-800">
                  {item.text}
                </span>
                <span className="text-sm font-bold tracking-widest text-slate-300 group-hover:text-[#07bf69] transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Commitment */}
      <section className="bg-white py-16 md:py-24">
        <div
          className="mx-auto max-w-3xl px-6 md:px-10 text-center"
          data-aos="fade-up"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-900">
            <Award size={26} className="text-[#07bf69]" />
          </span>
          <div className="mt-5">
            <SectionHeading
              label="Our Promise"
              title="Our Commitment"
              center
            />
          </div>
          <p className="mt-5 text-slate-600 leading-relaxed md:text-lg">
            Our goal is to provide professional, transparent, and organized
            assistance throughout the documentation and application process
            while helping customers better understand their financing
            requirements.
          </p>
        </div>
      </section>

      {/* Brand strip */}
      {/* <section className="bg-slate-950 py-10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
          <p className="text-lg md:text-xl font-bold text-white">Loan Guru</p>
          <p className="mt-1 text-slate-400">
            A brand of OnePulse Corporate Services Private Limited
          </p>
          <p className="mt-3 text-slate-400">
            Website:{" "}
            <a
              href="https://www.loanguru4u.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#07bf69] hover:underline"
            >
              www.loanguru4u.com
            </a>
          </p>
        </div>
      </section> */}
    </main>
  );
};

export default AboutUsDetails;
