import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { policies, contactDetails } from "../data/policies";

const renderText = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const ContactBox = () => (
  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
    <p>
      <span className="font-semibold text-slate-800">
        {contactDetails.company}
      </span>
    </p>
    <p>
      <span className="font-semibold text-slate-800">Brand:</span>{" "}
      {contactDetails.brand}
    </p>
    <p>
      <span className="font-semibold text-slate-800">Website:</span>{" "}
      <a
        href={`https://${contactDetails.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {contactDetails.website}
      </a>
    </p>
    <p>
      <span className="font-semibold text-slate-800">Business Email:</span>{" "}
      <a
        href={`mailto:${contactDetails.email}`}
        className="text-blue-600 hover:underline"
      >
        {contactDetails.email}
      </a>
    </p>
    <p>
      <span className="font-semibold text-slate-800">Business Phone:</span>{" "}
      <a
        href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
        className="text-blue-600 hover:underline"
      >
        {contactDetails.phone}
      </a>
    </p>
    <p>
      <span className="font-semibold text-slate-800">Business Address:</span>{" "}
      {contactDetails.address}
    </p>
  </div>
);

const Block = ({ block }) => {
  switch (block.type) {
    case "h":
      return (
        <h3 className="pt-1 text-sm font-semibold text-slate-800">
          {block.text}
        </h3>
      );
    case "note":
      return (
        <p className="border-l-4 border-[#07bf69] bg-slate-50 py-3 pl-4 pr-3 text-sm leading-relaxed text-slate-700">
          {renderText(block.text)}
        </p>
      );
    case "list":
      return (
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-600 marker:text-slate-400">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "contact":
      return <ContactBox />;
    default:
      return (
        <p className="text-sm leading-relaxed text-slate-600">
          {renderText(block.text)}
        </p>
      );
  }
};

const PolicyPage = ({ policy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [policy.slug]);

  const otherPolicies = policies.filter((item) => item.slug !== policy.slug);

  return (
    <main key={policy.slug} className="bg-white pt-32 pb-20 md:pt-36">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
          <Link to="/" className="hover:text-[#07bf69] transition-colors">
            Home
          </Link>{" "}
          / <span className="text-slate-500">{policy.title}</span>
        </nav>

        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-slate-900">
          {policy.title}
        </h1>
        <p className="mt-2 text-xs text-slate-400">
          Last updated: {policy.lastUpdated}
        </p>

        {/* Intro */}
        <div className="mt-8 space-y-3">
          {policy.intro.map((text) => (
            <p key={text} className="text-sm leading-relaxed text-slate-600">
              {renderText(text)}
            </p>
          ))}
        </div>

        {/* Sections */}
        {policy.sections.map((section, index) => (
          <section key={section.title} className="mt-10">
            <h2 className="text-base md:text-lg font-semibold text-slate-900">
              {index + 1}. {section.title}
            </h2>
            <div className="mt-3 space-y-3">
              {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}

        {/* Other policies */}
        <div className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <span className="font-semibold text-slate-700">Also read: </span>
          {otherPolicies.map((item, index) => (
            <React.Fragment key={item.slug}>
              {index > 0 && <span className="mx-2 text-slate-300">|</span>}
              <Link
                to={item.path}
                className="text-blue-600 hover:underline"
              >
                {item.title}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PolicyPage;
