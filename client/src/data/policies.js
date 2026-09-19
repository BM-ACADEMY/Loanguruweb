// Text wrapped in **double asterisks** is rendered bold by PolicyPage.

export const contactDetails = {
  company: "OnePulse Corporate Services Private Limited",
  brand: "Loan Guru",
  website: "www.loanguru4u.com",
  email: "info@loanguru4u.com",
  phone: "+91 74184 55463",
  address:
    "5th Floor Modern Tower Door No.23, West Cott Road, Royapettah, Chennai - 600014, Tamil Nadu, India",
};

const p = (text) => ({ type: "p", text });
const note = (text) => ({ type: "note", text });
const h = (text) => ({ type: "h", text });
const list = (items) => ({ type: "list", items });
const contact = () => ({ type: "contact" });

export const privacyPolicy = {
  slug: "privacy",
  path: "/privacy-policy",
  title: "Privacy Policy",
  label: "PRIVACY",
  lastUpdated: "10 September 2026",
  summary:
    "How we collect, use, store and protect the information you share with us.",
  intro: [
    "**OnePulse Corporate Services Private Limited**, operating under the brand name **Loan Guru**, respects your privacy and is committed to protecting the personal information you provide to us.",
    "This Privacy Policy explains how we collect, use, store, process, and protect information when you visit **www.loanguru4u.com**, contact us, submit an enquiry, or use our services.",
  ],
  sections: [
    {
      title: "Information We Collect",
      blocks: [
        p(
          "Depending on the services you request, we may collect information including:"
        ),
        h("Personal Information"),
        list([
          "Full name",
          "Mobile number",
          "Email address",
          "Residential/business address",
          "Date of birth where required for a service",
          "Other contact information",
        ]),
        h("Business and Financial Information"),
        p(
          "Where necessary for loan consultancy or documentation services, we may request information such as:"
        ),
        list([
          "Business details",
          "Business registration information",
          "Income information",
          "Banking-related information",
          "Financial statements",
          "ITR-related information",
          "Business transaction information",
          "Loan requirements",
          "Existing financial obligations",
          "Documents required for preparing loan applications or project reports",
        ]),
        p(
          "We will request only information reasonably necessary for providing the relevant service."
        ),
      ],
    },
    {
      title: "How We Collect Information",
      blocks: [
        p("Information may be collected through:"),
        list([
          "Website enquiry forms",
          "Phone calls",
          "WhatsApp",
          "Email",
          "Online payment forms",
          "Customer interactions",
          "Documents submitted by customers",
          "Social media enquiries",
          "Other authorized communication channels",
        ]),
      ],
    },
    {
      title: "How We Use Your Information",
      blocks: [
        p("We may use your information to:"),
        list([
          "Respond to enquiries",
          "Understand your loan requirements",
          "Provide consultancy services",
          "Prepare documentation and project reports",
          "Assist with loan applications",
          "Communicate regarding your service",
          "Process payments",
          "Issue invoices and receipts",
          "Provide customer support",
          "Respond to complaints and requests",
          "Comply with applicable legal and regulatory requirements",
          "Maintain business and transaction records",
          "Improve our services and website",
        ]),
      ],
    },
    {
      title: "Sharing of Information",
      blocks: [
        note("We do not sell your personal information as a business practice."),
        p(
          "Where necessary to provide the requested service, information may be shared with relevant third parties, such as:"
        ),
        list([
          "Banks",
          "NBFCs",
          "Financial institutions",
          "Government authorities or portals",
          "Service providers",
          "Technology providers",
          "Payment service providers",
          "Professional advisers",
          "Other authorized parties involved in providing the requested service",
        ]),
        p(
          "Information will be shared only where reasonably necessary for the relevant purpose or where required or permitted by applicable law."
        ),
      ],
    },
    {
      title: "Payment Information",
      blocks: [
        p(
          "Online payments may be processed through third-party payment service providers."
        ),
        p(
          "We may receive transaction-related information necessary to confirm and reconcile a payment."
        ),
        p(
          "We do not intend to store complete debit/credit card details on our own systems."
        ),
        p(
          "Payment processing is subject to the terms and privacy practices of the applicable payment service provider."
        ),
      ],
    },
    {
      title: "Cookies and Website Technologies",
      blocks: [
        p("Our website may use cookies or similar technologies to:"),
        list([
          "Improve website functionality",
          "Understand website usage",
          "Improve user experience",
          "Measure website performance",
          "Support marketing and analytics activities where applicable",
        ]),
        p(
          "You may control cookies through your browser settings, although disabling certain cookies may affect website functionality."
        ),
      ],
    },
    {
      title: "Data Security",
      blocks: [
        p(
          "We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction."
        ),
        p(
          "However, no internet transmission or electronic storage system can be guaranteed to be completely secure."
        ),
      ],
    },
    {
      title: "Data Retention",
      blocks: [
        p(
          "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining business records, resolving disputes, complying with legal obligations, and protecting our legitimate business interests."
        ),
        p(
          "The retention period may vary depending on the type of information and applicable legal requirements."
        ),
      ],
    },
    {
      title: "Third-Party Websites",
      blocks: [
        p(
          "Our website may contain links to third-party websites, services, portals, or platforms."
        ),
        p(
          "We are not responsible for the privacy practices, security, or content of third-party websites."
        ),
        p(
          "Customers should review the privacy policies of third-party services before submitting information to them."
        ),
      ],
    },
    {
      title: "Customer Rights and Requests",
      blocks: [
        p("Subject to applicable law, customers may contact us regarding:"),
        list([
          "Access to personal information",
          "Correction of inaccurate information",
          "Questions about processing",
          "Withdrawal of consent where applicable",
          "Privacy-related complaints",
        ]),
        p(
          "Requests may be submitted using the contact details provided below."
        ),
      ],
    },
    {
      title: "Children’s Privacy",
      blocks: [
        p("Our services are intended for adults and businesses."),
        p(
          "We do not knowingly collect personal information from children for the purpose of providing financial consultancy services."
        ),
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      blocks: [
        p(
          "We may update this Privacy Policy periodically to reflect changes in our services, technology, business practices, or applicable legal requirements."
        ),
        p(
          "The latest version will be published on this page with the updated date."
        ),
      ],
    },
    {
      title: "Contact Us",
      blocks: [p("For privacy-related questions or requests:"), contact()],
    },
  ],
};

export const refundPolicy = {
  slug: "refund",
  path: "/refund-cancellation-policy",
  title: "Refund & Cancellation Policy",
  label: "REFUNDS",
  lastUpdated: "11 September 2026",
  summary:
    "When refunds and cancellations apply to our consultancy and documentation services.",
  intro: [
    "This Refund & Cancellation Policy applies to services provided by **OnePulse Corporate Services Private Limited** under the brand name **Loan Guru** through **www.loanguru4u.com** and other authorized communication channels.",
  ],
  sections: [
    {
      title: "Nature of Our Services",
      blocks: [
        p(
          "Loan Guru provides loan consultancy, documentation assistance, project report preparation, and loan application support services."
        ),
        p(
          "The fees paid by customers are towards the professional services, documentation, preparation, processing, and assistance provided by Loan Guru."
        ),
        note(
          "Payment of a service fee does **not guarantee loan approval, sanction, or disbursement** by any bank, NBFC, financial institution, or government authority."
        ),
      ],
    },
    {
      title: "Service Fee",
      blocks: [
        p(
          "The applicable service fee will be communicated to the customer before payment."
        ),
        p(
          "Customers are encouraged to understand the scope of services and the applicable refund and cancellation terms before making payment."
        ),
      ],
    },
    {
      title: "Cancellation Before Documentation Is Created",
      blocks: [
        p(
          "A customer may request cancellation before the documentation or project report preparation process has commenced."
        ),
        p(
          "Any refund request received before substantial work has started will be reviewed by Loan Guru based on the status of the service and any work already performed."
        ),
      ],
    },
    {
      title: "No Refund After Documentation Has Been Created",
      blocks: [
        note(
          "**Once the customer’s documentation, project report, application documents, cover letter, financial documentation, or other agreed service deliverables have been prepared or substantially completed, the service fee will be non-refundable.**"
        ),
        p(
          "This is because the service fee covers the professional work, preparation, processing, verification, formatting, and other resources involved in creating and preparing the customer’s documentation."
        ),
        p(
          "Therefore, once documentation has been created, prepared, or substantially processed, **Loan Guru will not be liable to provide a refund of the service fee**, even if the customer subsequently decides not to proceed with the loan application."
        ),
      ],
    },
    {
      title: "Loan Rejection and Refund",
      blocks: [
        p("Loan Guru does not guarantee loan approval."),
        p(
          "If a customer’s loan application is rejected, declined, delayed, or not sanctioned by a bank, NBFC, financial institution, or other lending authority, the service fee paid to Loan Guru will **not be refundable once the agreed documentation/service has been completed or substantially completed**."
        ),
        p(
          "The lending institution independently determines loan eligibility, approval, sanction amount, interest rate, tenure, and disbursement."
        ),
      ],
    },
    {
      title: "Customer Cancellation After Documentation",
      blocks: [
        p(
          "If a customer decides to discontinue the service after documentation or project report preparation has commenced or been completed, the amount paid will generally **not be refundable**."
        ),
        p("This includes situations where the customer:"),
        list([
          "Changes their mind about applying for the loan",
          "Decides not to proceed with the application",
          "Chooses another lender or service provider",
          "Becomes unwilling or unable to provide further documents",
          "Does not respond to follow-up requests",
          "Decides not to continue after receiving the prepared documentation",
        ]),
      ],
    },
    {
      title: "Customer-Provided Information",
      blocks: [
        p(
          "Customers are responsible for providing accurate and genuine information and documents."
        ),
        p(
          "If the customer provides incomplete, inaccurate, misleading, or invalid information, any resulting delay, rejection, or inability to proceed with the application will not create an automatic right to a refund."
        ),
      ],
    },
    {
      title: "Duplicate Payments",
      blocks: [
        p(
          "If a customer accidentally makes a duplicate payment for the same service, the duplicate transaction may be reviewed and refunded after verification."
        ),
        p("Customers should notify us as soon as possible regarding duplicate payments."),
      ],
    },
    {
      title: "Failed or Unsuccessful Payment Transactions",
      blocks: [
        p(
          "If an amount has been debited from a customer’s account but the payment has not been successfully received or confirmed by Loan Guru, the customer should contact us with the transaction details."
        ),
        p("The transaction will be verified and appropriate action will be taken."),
      ],
    },
    {
      title: "Refund Request Process",
      blocks: [
        p(
          "Any eligible refund request should be submitted through our official email or customer-support channel."
        ),
        p("The customer should provide:"),
        list([
          "Full name",
          "Registered mobile number",
          "Email address",
          "Invoice number",
          "Payment reference/transaction ID",
          "Date of payment",
          "Reason for the refund request",
        ]),
        p(
          "Loan Guru may request additional information to verify the transaction and service status."
        ),
      ],
    },
    {
      title: "Refund Processing",
      blocks: [
        p(
          "Where a refund is approved, it will normally be processed through the original payment method, wherever technically possible."
        ),
        p(
          "The time taken for the refunded amount to appear in the customer’s account may depend on the relevant bank, payment gateway, card network, UPI provider, or other payment service provider."
        ),
      ],
    },
    {
      title: "Important Clarification",
      blocks: [
        p(
          "The payment made to Loan Guru is a **professional service fee for consultancy, documentation, project report preparation, and/or application assistance**."
        ),
        p("It is not a payment for obtaining a guaranteed loan."),
        note(
          "**Loan approval is solely at the discretion of the respective lender or financial institution.**"
        ),
      ],
    },
    {
      title: "Changes to This Policy",
      blocks: [
        p(
          "OnePulse Corporate Services Private Limited reserves the right to update this Refund & Cancellation Policy from time to time."
        ),
        p(
          "The latest version will be published on this page with the applicable “Last Updated” date."
        ),
      ],
    },
    {
      title: "Contact Us",
      blocks: [
        p("For refund or cancellation-related queries:"),
        contact(),
      ],
    },
  ],
};

export const termsConditions = {
  slug: "terms",
  path: "/terms-and-conditions",
  title: "Terms & Conditions",
  label: "TERMS",
  lastUpdated: "10 September 2026",
  summary:
    "The terms that apply when you use our website or purchase our services.",
  intro: [
    "Welcome to **Loan Guru**, a brand operated by **OnePulse Corporate Services Private Limited**.",
    "By accessing or using our website **www.loanguru4u.com**, contacting us, submitting an enquiry, or purchasing any service from us, you agree to comply with and be bound by these Terms & Conditions.",
    "Please read these Terms carefully before using our website or purchasing our services.",
  ],
  sections: [
    {
      title: "About Loan Guru",
      blocks: [
        p(
          "Loan Guru is a financial consultancy and loan documentation assistance service operated by **OnePulse Corporate Services Private Limited**."
        ),
        p(
          "We assist customers with loan-related documentation, project reports, application assistance, and related consultancy services."
        ),
        note(
          "Loan Guru is **not a bank, Non-Banking Financial Company (NBFC), or lending institution**, unless expressly stated otherwise."
        ),
      ],
    },
    {
      title: "Nature of Our Services",
      blocks: [
        p("Our services may include:"),
        list([
          "Loan application assistance",
          "Loan documentation assistance",
          "Preparation of project reports",
          "Business and financial documentation support",
          "Assistance with government/business loan application processes",
          "Guidance regarding applicable loan schemes",
          "Application submission assistance",
          "Follow-up and documentation coordination",
          "Other related consultancy services",
        ]),
        p(
          "The exact services provided to a customer may depend on the customer’s requirements and the service package selected."
        ),
      ],
    },
    {
      title: "No Guarantee of Loan Approval",
      blocks: [
        note(
          "Loan Guru does **not guarantee or promise loan sanction, approval, disbursement, interest rate, loan amount, tenure, or any other decision of a bank, NBFC, government authority, or financial institution**."
        ),
        p(
          "All loan approvals and financial decisions are made solely by the concerned lender or financial institution based on its own eligibility criteria, policies, verification procedures, credit assessment, documentation, and applicable regulations."
        ),
        p(
          "Payment of our consultancy or documentation fee does not constitute a guarantee of loan approval."
        ),
      ],
    },
    {
      title: "Customer Information and Documents",
      blocks: [
        p(
          "Customers are responsible for providing accurate, complete, genuine, and up-to-date information and documents."
        ),
        p("Customers must not provide:"),
        list([
          "False information",
          "Forged documents",
          "Misleading information",
          "Documents belonging to another person without authorization",
          "Incorrect financial information",
        ]),
        p(
          "If incorrect, incomplete, misleading, or fraudulent information is provided, we may suspend or terminate the service without liability."
        ),
      ],
    },
    {
      title: "Customer Responsibility",
      blocks: [
        p("The customer is responsible for:"),
        list([
          "Providing required documents within the requested timeframe",
          "Reviewing information before submission",
          "Ensuring that all information supplied is accurate",
          "Responding to requests for additional documents",
          "Providing valid contact information",
          "Cooperating with banks, financial institutions, and authorities where required",
        ]),
        p(
          "Delays caused by incomplete documents, incorrect information, customer non-cooperation, lender processing, technical issues, or government/bank procedures are outside our control."
        ),
      ],
    },
    {
      title: "Service Fees",
      blocks: [
        p(
          "Applicable service fees will be communicated to the customer before payment."
        ),
        p(
          "The customer agrees to pay the applicable service/documentation/consultancy fee for the selected service."
        ),
        p(
          "Any applicable taxes, government charges, lender charges, or third-party charges will be communicated separately where applicable."
        ),
      ],
    },
    {
      title: "Payment",
      blocks: [
        p(
          "Payments may be collected through payment methods made available by us, including online payment facilities."
        ),
        p(
          "A payment confirmation or invoice may be issued after successful payment."
        ),
        p(
          "A successful payment does not mean that a loan has been approved or sanctioned."
        ),
      ],
    },
    {
      title: "Service Commencement",
      blocks: [
        p(
          "Services may commence after confirmation of payment and/or receipt of the required documents from the customer."
        ),
        p(
          "The time required to complete a service may vary depending on the nature of the service, document availability, customer cooperation, lender requirements, and other external factors."
        ),
      ],
    },
    {
      title: "Third-Party Services",
      blocks: [
        p(
          "Loan applications may involve banks, NBFCs, government portals, financial institutions, payment service providers, or other third parties."
        ),
        p(
          "Loan Guru does not control the internal policies, processing time, decisions, systems, or service availability of third parties."
        ),
      ],
    },
    {
      title: "Website Information",
      blocks: [
        p(
          "We make reasonable efforts to keep the information on our website accurate and updated."
        ),
        p(
          "However, information regarding government schemes, eligibility criteria, interest rates, lender policies, documentation requirements, and financial products may change from time to time."
        ),
        p(
          "Customers should verify the applicable terms and eligibility requirements before proceeding."
        ),
      ],
    },
    {
      title: "Intellectual Property",
      blocks: [
        p(
          "The content available on www.loanguru4u.com, including logos, brand names, graphics, text, designs, images, videos, and other materials, is owned by or licensed to **OnePulse Corporate Services Private Limited**, unless otherwise stated."
        ),
        p(
          "No content may be copied, reproduced, modified, distributed, or commercially used without prior written permission."
        ),
      ],
    },
    {
      title: "Prohibited Use",
      blocks: [
        p("You agree not to:"),
        list([
          "Use the website for unlawful purposes",
          "Submit fraudulent information",
          "Attempt unauthorized access to the website",
          "Introduce malicious software",
          "Misuse our brand, content, or materials",
          "Interfere with the operation of the website",
          "Use our services for fraudulent activities",
        ]),
      ],
    },
    {
      title: "Limitation of Liability",
      blocks: [
        p(
          "To the extent permitted by applicable law, OnePulse Corporate Services Private Limited shall not be responsible for losses arising from:"
        ),
        list([
          "Loan rejection by a lender",
          "Changes in lender policies",
          "Delays caused by banks, NBFCs, government authorities, or third parties",
          "Customer-provided incorrect information",
          "Technical interruptions beyond our reasonable control",
          "Delays caused by incomplete documentation",
          "Changes in government schemes or eligibility requirements",
        ]),
        p(
          "Nothing in these Terms is intended to exclude any liability that cannot legally be excluded."
        ),
      ],
    },
    {
      title: "Privacy",
      blocks: [
        p(
          "Personal information collected from customers will be handled in accordance with our **Privacy Policy**."
        ),
        p(
          "By using our services, you acknowledge that you have read and understood our Privacy Policy."
        ),
      ],
    },
    {
      title: "Cancellation and Refunds",
      blocks: [
        p(
          "Cancellation and refund requests are governed by our **Refund & Cancellation Policy** published on this website."
        ),
        p(
          "Customers are encouraged to review the policy before making payment."
        ),
      ],
    },
    {
      title: "Changes to These Terms",
      blocks: [
        p("We may update these Terms & Conditions from time to time."),
        p(
          "Updated terms will be published on this page with a revised “Last Updated” date."
        ),
        p(
          "Your continued use of our website or services after changes are published constitutes acceptance of the updated Terms."
        ),
      ],
    },
    {
      title: "Governing Law",
      blocks: [
        p(
          "These Terms & Conditions shall be governed by the applicable laws of India."
        ),
        p(
          "Subject to applicable law, disputes shall be subject to the jurisdiction of the appropriate courts having jurisdiction over the place of business of OnePulse Corporate Services Private Limited."
        ),
      ],
    },
    {
      title: "Contact Us",
      blocks: [
        p("For questions regarding these Terms & Conditions, please contact:"),
        contact(),
      ],
    },
  ],
};

export const policies = [termsConditions, privacyPolicy, refundPolicy];
