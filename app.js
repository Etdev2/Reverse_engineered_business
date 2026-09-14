const ICONS = {
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>',
  edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 16-.8 4.8L8 20l10.7-10.7a2.2 2.2 0 0 0-3.1-3.1L4.9 16.9Z" /><path d="m14 7 3 3" /></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 5 5" /></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M22 12h-3M12 19v3M5 12H2" /></svg>',
  coins: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>',
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" /></svg>',
  briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v5h4M9 13h6M9 17h6" /></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v5c0 5.1-3.3 8.5-8 10-4.7-1.5-8-4.9-8-10V6l8-3Z" /><path d="m8.5 12 2.3 2.3 4.8-5" /></svg>',
  truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8v9H3v-9Z" /><path d="M9 20v-6h6v6" /></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V4l8-2 8 2v17M2 21h20M8 7h1M15 7h1M8 11h1M15 11h1M8 15h1M15 15h1" /></svg>',
  more: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>',
  download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>'
};

const candidates = [
  {
    id: 'ap-exception',
    name: 'AP exception desk',
    short: 'Regional distributors',
    buyer: 'Controller / AP manager',
    buyerType: 'Regional distributors · 50–250 staff',
    icon: 'file', iconTone: 'green',
    pain: 'Invoice exceptions sit between email, ERP, and vendor portals. AP staff chase missing PO data and coding every week.',
    workaround: 'Two AP specialists plus shared inbox rules and a spreadsheet queue.',
    wedge: 'A review-first exception queue that reads the inbox, asks vendors for missing fields, and returns a reconciled ERP-ready packet.',
    whyNow: 'Document extraction and email drafting crossed the reliability threshold for low-risk AP exceptions.',
    revenue: 'Subscription + setup', price: '$1,500 / month', distribution: 'Controller communities + targeted email',
    moat: 'Customer-specific exception history and vendor response patterns', delivery: 'Concierge inbox triage → rules-backed product',
    human: '2.5 hrs / customer / mo', ai: '18 hrs / customer / mo',
    trueScore: 8.8, todayScore: 6.1, burden: 7.0, complexity: 3.0, falsify: '$120 · 10 days', roi: 'VERY HIGH', evidence: 54, status: 'Top 3', statusTone: 'green',
    assumption: 'At least 3 of 10 controllers will pay for a paid exception-triage pilot before a deep ERP integration exists.',
    test: 'Sell a 14-day concierge pilot using forwarded exception emails and a shared review queue.',
    impact: 'A single retained AP specialist budget can fund a high-margin workflow layer.'
  },
  {
    id: 'coi-renewal',
    name: 'COI renewal desk',
    short: 'Commercial subcontractors',
    buyer: 'Operations / compliance manager',
    buyerType: 'Commercial subcontractors · 20–150 staff',
    icon: 'shield', iconTone: 'blue',
    pain: 'Certificates of insurance expire across dozens of jobs. Missing documents delay site access and create compliance exposure.',
    workaround: 'An admin or project coordinator checks PDFs and sends reminder emails from a spreadsheet.',
    wedge: 'Track certificate expiry, flag coverage gaps, and draft the exact follow-up for each vendor.',
    whyNow: 'Reliable extraction of dates, named insureds, and coverage limits from heterogeneous certificates.',
    revenue: 'Per active vendor', price: '$249 / month', distribution: 'Construction associations + brokers',
    moat: 'Historical compliance record embedded in project handoffs', delivery: 'Managed monitoring with human review',
    human: '1.0 hr / customer / mo', ai: '10 hrs / customer / mo',
    trueScore: 8.3, todayScore: 5.9, burden: 6.5, complexity: 4.0, falsify: '$90 · 12 days', roi: 'HIGH', evidence: 48, status: 'Top 3', statusTone: 'green',
    assumption: 'The buyer owns enough vendor compliance volume to feel a monthly deadline risk, not just occasional admin pain.',
    test: 'Review 50 live certificates with five operations managers and ask for a paid deadline-monitoring pilot.',
    impact: 'Recurring compliance deadlines create natural retention if false-positive rates stay low.'
  },
  {
    id: 'freight-dispute',
    name: 'Freight dispute recovery',
    short: 'Mid-market 3PLs',
    buyer: 'Director of finance / claims',
    buyerType: 'Third-party logistics firms · 25–200 staff',
    icon: 'truck', iconTone: 'orange',
    pain: 'Accessorial charges and carrier invoices are disputed manually, so recoverable dollars die in inboxes.',
    workaround: 'Finance analysts compare rate cards, PODs, and invoices and file claims in carrier portals.',
    wedge: 'Find likely invalid accessorials, assemble claim evidence, and price the recovery on a success fee.',
    whyNow: 'Multimodal extraction can compare line-item invoices against rate cards and proof-of-delivery scans.',
    revenue: 'Contingency fee', price: '20% of recovered $', distribution: '3PL finance communities + referrals',
    moat: 'Carrier-specific dispute outcomes and normalized rate-card data', delivery: 'Manual audit with AI evidence assembly',
    human: '4.0 hrs / customer / mo', ai: '26 hrs / customer / mo',
    trueScore: 8.5, todayScore: 5.5, burden: 7.5, complexity: 5.0, falsify: '$150 · 14 days', roi: 'HIGH', evidence: 42, status: 'Top 3', statusTone: 'green',
    assumption: 'Enough claims are recoverable and evidence can be accepted by carriers without a long collections cycle.',
    test: 'Audit 100 historical invoices for one 3PL and submit five real claims before building software.',
    impact: 'The buyer can fund the service from recovered money, reducing new-budget friction.'
  },
  {
    id: 'permit-qa',
    name: 'Permit packet QA',
    short: 'Specialty contractors',
    buyer: 'Permit coordinator / owner',
    buyerType: 'HVAC, solar, and electrical contractors · 10–80 staff',
    icon: 'building', iconTone: 'cyan',
    pain: 'Incomplete permit packets bounce back, adding days to every install and creating rescheduling work.',
    workaround: 'A permit coordinator manually checks jurisdiction rules and re-keys customer and equipment data.',
    wedge: 'Preflight permit packets against jurisdiction-specific checklists before submission.',
    whyNow: 'Structured extraction is good enough to compare a packet to a fixed checklist and explain missing fields.',
    revenue: 'Per packet', price: '$18 / packet', distribution: 'Permit expeditors + trade software',
    moat: 'Jurisdiction checklist corpus and rejection reason history', delivery: 'Human QA with AI preflight',
    human: '3.0 hrs / customer / mo', ai: '21 hrs / customer / mo',
    trueScore: 8.0, todayScore: 5.7, burden: 6.0, complexity: 5.0, falsify: '$75 · 9 days', roi: 'HIGH', evidence: 46, status: 'Watch', statusTone: 'orange',
    assumption: 'Rejection reduction is valuable enough that small contractors will change an established submission habit.',
    test: 'Run a blind preflight on 40 recent rejected and accepted packets with two permit expeditors.',
    impact: 'A narrow workflow can expand only after checklist coverage is earned.'
  },
  {
    id: 'dental-eligibility',
    name: 'Eligibility reconciliation',
    short: 'Dental groups',
    buyer: 'Revenue cycle manager',
    buyerType: 'Multi-location dental groups · 5–30 clinics',
    icon: 'shield', iconTone: 'blue',
    pain: 'Eligibility mismatches cause avoidable denials and front-desk calls before appointments.',
    workaround: 'Front-desk teams use payer portals and call trees to recheck coverage manually.',
    wedge: 'Reconcile scheduled patients against payer responses and surface only actionable mismatches.',
    whyNow: 'AI can classify payer responses, but payer access and healthcare handling add friction.',
    revenue: 'Per location', price: '$350 / location / mo', distribution: 'Dental billing consultants',
    moat: 'Payer-specific response normalization and group-specific denial history', delivery: 'Managed batch processing',
    human: '5.0 hrs / customer / mo', ai: '14 hrs / customer / mo',
    trueScore: 7.9, todayScore: 4.9, burden: 8.0, complexity: 7.0, falsify: '$200 · 14 days', roi: 'MEDIUM', evidence: 31, status: 'Needs scrutiny', statusTone: 'orange',
    assumption: 'Access and compliance burden can be kept within a very small-team operating model.',
    test: 'Interview billing managers and map a de-identified batch workflow before touching PHI.',
    impact: 'Budget exists, but the constraint is access and compliance rather than model capability.'
  },
  {
    id: 'warranty-pack',
    name: 'Warranty claim evidence pack',
    short: 'Equipment rental fleets',
    buyer: 'Fleet / service manager',
    buyerType: 'Regional equipment rental firms · 20–120 staff',
    icon: 'briefcase', iconTone: 'green',
    pain: 'Technicians document failures inconsistently, so warranty reimbursement is missed or delayed.',
    workaround: 'Service managers chase photos, serial numbers, and invoices across mobile messages.',
    wedge: 'Turn technician photos and notes into a manufacturer-ready claim packet.',
    whyNow: 'Image and note extraction can assemble evidence, while the final submission remains review-first.',
    revenue: 'Per approved claim', price: '$35 / claim', distribution: 'Rental associations + service vendors',
    moat: 'Failure evidence library organized by equipment and manufacturer', delivery: 'Concierge claim preparation',
    human: '2.0 hrs / customer / mo', ai: '12 hrs / customer / mo',
    trueScore: 8.1, todayScore: 5.3, burden: 6.5, complexity: 4.0, falsify: '$100 · 12 days', roi: 'HIGH', evidence: 39, status: 'Watch', statusTone: 'orange',
    assumption: 'Claims are frequent enough and recovery is large enough to support a dedicated budget owner.',
    test: 'Process 25 past repair records and compare recoverable dollars with a fleet manager.',
    impact: 'Outcome-based pricing can align with recovered warranty dollars.'
  },
  {
    id: 'moveout',
    name: 'Move-out evidence desk',
    short: 'Multifamily operators',
    buyer: 'Regional property manager',
    buyerType: 'Multifamily operators · 500–5,000 units',
    icon: 'home', iconTone: 'cyan',
    pain: 'Move-out charges require photo review and defensible documentation across a high-volume turnover cycle.',
    workaround: 'On-site teams inspect manually; regional staff recheck files before charging deposits.',
    wedge: 'Organize photo evidence and draft charge explanations for human approval.',
    whyNow: 'Vision models handle repetitive photo grouping, but legal sensitivity keeps review in the loop.',
    revenue: 'Per unit turn', price: '$8 / move-out', distribution: 'Property management associations',
    moat: 'Property-specific evidence and charge policy history', delivery: 'Review-first documentation service',
    human: '6.0 hrs / customer / mo', ai: '35 hrs / customer / mo',
    trueScore: 7.6, todayScore: 4.8, burden: 7.0, complexity: 5.0, falsify: '$100 · 14 days', roi: 'MEDIUM', evidence: 28, status: 'Watch', statusTone: 'gray',
    assumption: 'Operators value consistency enough to pay for a new layer rather than keep the work local.',
    test: 'Review anonymized turn folders with three regional operators and test a paid sample batch.',
    impact: 'High volume is attractive, but charge disputes make false positives expensive.'
  },
  {
    id: 'food-allergen',
    name: 'Supplier allergen monitor',
    short: 'Specialty food makers',
    buyer: 'Quality / regulatory manager',
    buyerType: 'Specialty food manufacturers · 20–150 staff',
    icon: 'file', iconTone: 'orange',
    pain: 'Supplier spec changes arrive as PDFs and emails, making label and allergen review easy to miss.',
    workaround: 'Quality teams maintain shared spreadsheets and request updated declarations quarterly.',
    wedge: 'Compare incoming supplier documents with the approved ingredient record and route only deltas.',
    whyNow: 'Document comparison is reliable for a defined supplier schema with human sign-off.',
    revenue: 'Annual subscription', price: '$4,800 / year', distribution: 'Food safety consultants',
    moat: 'Supplier change history and approved ingredient graph', delivery: 'Managed document monitoring',
    human: '2.5 hrs / customer / mo', ai: '20 hrs / customer / mo',
    trueScore: 8.0, todayScore: 4.7, burden: 7.5, complexity: 5.0, falsify: '$100 · 12 days', roi: 'MEDIUM', evidence: 27, status: 'Needs scrutiny', statusTone: 'gray',
    assumption: 'The quality manager can authorize a workflow before full regulatory software integration.',
    test: 'Compare 100 supplier updates against known label changes with two quality managers.',
    impact: 'Compliance stakes support pricing, but sales cycles may be annual and consultative.'
  },
  {
    id: 'hvac-quote',
    name: 'HVAC quote follow-up',
    short: 'Residential service firms',
    buyer: 'Owner / sales manager',
    buyerType: 'HVAC companies · 10–60 staff',
    icon: 'bolt', iconTone: 'orange',
    pain: 'Quotes go cold after the technician leaves; office staff follow up inconsistently.',
    workaround: 'Dispatchers manually call and text leads from a CRM or phone.',
    wedge: 'Draft context-aware follow-ups from the quote, visit notes, and homeowner questions.',
    whyNow: 'Message drafting is easy, but generic follow-up is crowded and channel-dependent.',
    revenue: 'Per location', price: '$199 / month', distribution: 'HVAC software partners + outbound',
    moat: 'Quote outcome data by service type and local season', delivery: 'Done-for-you message operation',
    human: '3.5 hrs / customer / mo', ai: '9 hrs / customer / mo',
    trueScore: 7.4, todayScore: 4.6, burden: 7.0, complexity: 5.0, falsify: '$80 · 7 days', roi: 'MEDIUM', evidence: 24, status: 'Watch', statusTone: 'gray',
    assumption: 'Incremental close rate is attributable and worth paying for after existing CRM features.',
    test: 'Ask five owners to run 20 historic quotes through a manual follow-up test.',
    impact: 'Fast to validate, but crowded distribution and weak switching costs.'
  },
  {
    id: 'po-ack',
    name: 'PO acknowledgment chase',
    short: 'Small manufacturers',
    buyer: 'Purchasing manager',
    buyerType: 'Discrete manufacturers · 50–300 staff',
    icon: 'calendar', iconTone: 'blue',
    pain: 'Unconfirmed purchase orders create production surprises and manual supplier follow-up.',
    workaround: 'Buyers export an open-PO report, email suppliers, and re-key promised dates.',
    wedge: 'Monitor supplier replies, extract promise dates, and escalate only exceptions.',
    whyNow: 'Email classification and date extraction are reliable in a narrow supplier workflow.',
    revenue: 'Per plant', price: '$700 / month', distribution: 'ERP consultants + manufacturers groups',
    moat: 'Supplier reliability history and plant-specific escalation rules', delivery: 'Shared inbox monitoring',
    human: '1.5 hrs / customer / mo', ai: '16 hrs / customer / mo',
    trueScore: 8.0, todayScore: 5.1, burden: 6.0, complexity: 4.0, falsify: '$80 · 10 days', roi: 'HIGH', evidence: 35, status: 'Watch', statusTone: 'gray',
    assumption: 'Purchasing managers will trust extracted dates enough to put them in planning workflows.',
    test: 'Reconcile 200 open POs from one plant and measure exceptions avoided.',
    impact: 'Existing ERP data makes the first manual version cheap to deliver.'
  },
  {
    id: 'homehealth',
    name: 'Visit-note completeness',
    short: 'Home health agencies',
    buyer: 'Clinical operations manager',
    buyerType: 'Home health agencies · 30–250 clinicians',
    icon: 'file', iconTone: 'cyan',
    pain: 'Missing documentation delays billing and triggers rework between clinicians and QA staff.',
    workaround: 'QA reviewers manually scan notes against payer checklists.',
    wedge: 'Preflight notes against agency-specific completeness rules before billing review.',
    whyNow: 'Language models can classify missing sections, but healthcare data handling is a real barrier.',
    revenue: 'Per clinician', price: '$12 / clinician / mo', distribution: 'Home health consultants',
    moat: 'Agency-specific documentation rules and payer rejection history', delivery: 'Human-in-loop QA',
    human: '7.0 hrs / customer / mo', ai: '38 hrs / customer / mo',
    trueScore: 8.2, todayScore: 4.5, burden: 8.0, complexity: 8.0, falsify: '$200 · 14 days', roi: 'LOW', evidence: 22, status: 'Parked', statusTone: 'gray',
    assumption: 'A compliant deployment can be operated by a solo founder without becoming a healthcare vendor.',
    test: 'Conduct workflow interviews using synthetic notes only; stop if BAAs are required pre-pilot.',
    impact: 'The pain is real, but constraint mismatch makes this a poor first test.'
  },
  {
    id: 'inspection',
    name: 'Stormwater report QA',
    short: 'Civil contractors',
    buyer: 'Project / environmental manager',
    buyerType: 'Civil contractors · 25–200 staff',
    icon: 'building', iconTone: 'green',
    pain: 'Inspection reports need site-specific details and signatures; missing items create compliance rework.',
    workaround: 'Field staff use forms; project managers manually audit PDFs before submission.',
    wedge: 'Check reports for missing evidence and route the exact correction to field staff.',
    whyNow: 'Form and photo completeness checks can be automated without making the compliance decision.',
    revenue: 'Per active project', price: '$450 / month', distribution: 'Environmental consultants',
    moat: 'Project-specific inspection history and jurisdiction rules', delivery: 'Audit service',
    human: '3.0 hrs / customer / mo', ai: '17 hrs / customer / mo',
    trueScore: 7.9, todayScore: 4.8, burden: 6.5, complexity: 5.0, falsify: '$90 · 10 days', roi: 'HIGH', evidence: 30, status: 'Watch', statusTone: 'gray',
    assumption: 'Project managers have budget and authority to add a QA layer rather than accept occasional rework.',
    test: 'Audit 30 historical reports and price a correction-prevention pilot.',
    impact: 'Narrow regulatory checklists make the workflow testable, but regional rules fragment it.'
  },
  {
    id: 'property-billing',
    name: 'Utility bill allocation QA',
    short: 'Property accounting teams',
    buyer: 'Property accounting manager',
    buyerType: 'Multifamily managers · 1,000–20,000 units',
    icon: 'coins', iconTone: 'blue',
    pain: 'Utility invoices and resident allocations rarely reconcile cleanly across properties and vendors.',
    workaround: 'Accounting associates compare bills, meter files, and allocation exports in spreadsheets.',
    wedge: 'Flag allocation anomalies and produce an audit trail before resident billing.',
    whyNow: 'Structured invoice extraction and anomaly detection can handle a fixed property portfolio.',
    revenue: 'Per unit', price: '$0.35 / unit / mo', distribution: 'Utility billing firms',
    moat: 'Property-level consumption baseline and vendor mappings', delivery: 'Monthly reconciliation service',
    human: '4.0 hrs / customer / mo', ai: '24 hrs / customer / mo',
    trueScore: 8.2, todayScore: 5.0, burden: 7.0, complexity: 5.0, falsify: '$120 · 12 days', roi: 'HIGH', evidence: 33, status: 'Watch', statusTone: 'gray',
    assumption: 'Billing firms will permit a new QA layer without seeing it as a threat to their core service.',
    test: 'Reconcile one month of bills for a 500-unit portfolio and quantify corrected dollars.',
    impact: 'Recurring data creates a strong history moat if the channel partner cooperates.'
  },
  {
    id: 'equipment-claims',
    name: 'Equipment damage claims',
    short: 'Rental depots',
    buyer: 'Branch manager',
    buyerType: 'Equipment rental depots · 10–80 staff',
    icon: 'briefcase', iconTone: 'orange',
    pain: 'Returned equipment damage evidence is inconsistent, so depots under-bill or argue with customers.',
    workaround: 'Branch staff take photos and write notes; managers review manually.',
    wedge: 'Turn return photos into a consistent, customer-ready damage evidence packet.',
    whyNow: 'Vision models can group before/after photos, while a manager approves the charge.',
    revenue: 'Per return', price: '$3 / return', distribution: 'Rental software consultants',
    moat: 'Asset-specific condition history and dispute outcomes', delivery: 'Manual photo review',
    human: '2.0 hrs / customer / mo', ai: '25 hrs / customer / mo',
    trueScore: 7.8, todayScore: 4.4, burden: 7.0, complexity: 4.0, falsify: '$90 · 10 days', roi: 'MEDIUM', evidence: 21, status: 'Parked', statusTone: 'gray',
    assumption: 'A small per-return fee clears procurement and produces enough margin at branch scale.',
    test: 'Classify 50 anonymized return folders and ask branch managers to price the recovered claims.',
    impact: 'High volume does not help if the price is too small to sell directly.'
  }
];

const state = {
  view: 'engine',
  filter: 'all',
  search: '',
  selectedId: null,
  modal: null,
  running: false,
  runStep: 0,
  constraints: {
    hours: '15',
    capital: '$1,000',
    refuses: 'Cold calls · regulated money movement'
  },
  toggles: { evidence: true, defaultTest: true, alerts: true },
  lastRun: '14 Sep 2026, 09:42',
  killed: []
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const safe = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
const icon = (name, className = '') => `<span class="inline-icon ${className}">${ICONS[name] || ICONS.info}</span>`;

function candidateById(id) { return candidates.find((candidate) => candidate.id === id); }
function activeCandidates() { return candidates.filter((candidate) => !state.killed.includes(candidate.id)); }
function scoreWidth(score) { return `${Math.min(100, Math.max(0, score * 10))}%`; }
function currentViewLabel() {
  return ({ engine: 'Engine', candidates: 'Candidate queue', validation: 'Validation lab', method: 'Method & rubric', settings: 'Settings' })[state.view] || 'Engine';
}

function render() {
  const container = $('#view-container');
  if (!container) return;
  const renderers = { engine: renderEngine, candidates: renderCandidates, validation: renderValidation, method: renderMethod, settings: renderSettings };
  container.innerHTML = renderers[state.view]();
  $('#breadcrumb-current').textContent = currentViewLabel();
  $('#last-run-label').textContent = `Last run ${state.lastRun}`;
  $$('.nav-item[data-view]').forEach((item) => item.classList.toggle('active', item.dataset.view === state.view));
}

function renderEngine() {
  const alive = activeCandidates();
  const top = alive.find((candidate) => candidate.id === 'ap-exception') || alive.find((candidate) => candidate.status === 'Top 3') || candidates[0];
  const topThree = alive.filter((candidate) => candidate.status === 'Top 3').length;
  return `
    <div class="page-heading">
      <div>
        <div class="eyebrow"><span class="eyebrow-line"></span>REVERSE SEARCH / RUN 07</div>
        <h1>Find the business<br />worth disproving.</h1>
        <p class="heading-copy">Start with exceptional economics. Generate from the constraints, then attack every attractive story until only <strong>cheaply testable truth</strong> remains.</p>
      </div>
      <div class="heading-actions">
        <div class="run-state"><span class="status-dot"></span>DISCOVERY COMPLETE</div>
        <button class="button button-primary" type="button" data-action="run"><span>${ICONS.spark}</span>Run engine</button>
      </div>
    </div>

    <section class="constraint-bar" aria-label="Founder constraints">
      <div class="constraint-intro"><span>FOUNDER INPUTS</span><strong>Locked for this run</strong></div>
      <div class="constraint">
        <div class="constraint-icon">${ICONS.clock}</div>
        <div class="constraint-data"><span class="constraint-label">Hours / week</span><strong class="constraint-value">${safe(state.constraints.hours)} hrs</strong></div>
      </div>
      <div class="constraint">
        <div class="constraint-icon orange">${ICONS.coins}</div>
        <div class="constraint-data"><span class="constraint-label">Risk capital</span><strong class="constraint-value">${safe(state.constraints.capital)}</strong></div>
      </div>
      <div class="constraint wide">
        <div class="constraint-icon">${ICONS.shield}</div>
        <div class="constraint-data"><span class="constraint-label">Refuses to do</span><strong class="constraint-value">${safe(state.constraints.refuses)}</strong></div>
        <button class="constraint-edit" type="button" data-action="edit-constraints" aria-label="Edit founder constraints">${ICONS.edit}</button>
      </div>
    </section>

    <section class="kpi-grid" aria-label="Run summary">
      <div class="kpi good"><div class="kpi-label">Candidates generated</div><div class="kpi-value">18 <em>+12%</em></div><div class="kpi-note">Across 4 buyer clusters</div></div>
      <div class="kpi good"><div class="kpi-label">Top candidates</div><div class="kpi-value">${topThree || 3} <em>ready</em></div><div class="kpi-note">Survived outside-view check</div></div>
      <div class="kpi warn"><div class="kpi-label">Capital to falsify</div><div class="kpi-value">$120 <em>median</em></div><div class="kpi-note">Cheapest first test</div></div>
      <div class="kpi"><div class="kpi-label">Days to signal</div><div class="kpi-value">10 <em>days</em></div><div class="kpi-note">At ${safe(state.constraints.hours)} hours / week</div></div>
    </section>

    <div class="phase-strip" aria-label="Engine phases">
      <div class="phase done"><span class="phase-number">01</span><span>Frontier</span></div><span class="phase-connector done"></span>
      <div class="phase done"><span class="phase-number">02</span><span>Boring money</span></div><span class="phase-connector done"></span>
      <div class="phase done"><span class="phase-number">03</span><span>Synthesis</span></div><span class="phase-connector done"></span>
      <div class="phase active"><span class="phase-number">04</span><span>Destroy</span></div><span class="phase-connector"></span>
      <div class="phase"><span class="phase-number">05</span><span>Falsify</span></div>
    </div>

    <div class="content-grid">
      <section class="panel" aria-labelledby="queue-title">
        <div class="panel-header"><div class="panel-title"><h2 id="queue-title">Candidate queue</h2><span class="count">${alive.length} active</span></div><button class="panel-action" type="button" data-action="open-all">View all ${alive.length} ${ICONS.arrowRight}</button></div>
        <div class="candidate-table-wrap">
          <table class="candidate-table"><thead><tr><th>Opportunity</th><th>If true</th><th>Today</th><th>Falsify for</th><th>Status</th><th></th></tr></thead>
          <tbody>${alive.slice(0, 5).map(candidateRow).join('')}</tbody></table>
        </div>
        <div class="table-footer"><span>Showing 5 of ${alive.length} active ideas · ranked by upside × learnability</span><button type="button" data-action="open-all">Open candidate queue ${ICONS.arrow}</button></div>
      </section>

      <div>
        <section class="panel opportunity-card" aria-labelledby="opportunity-title">
          <div class="panel-header"><div class="test-badge"><span class="status-dot"></span>TEST FIRST</div><button class="icon-button tiny" type="button" aria-label="Opportunity options" data-action="toast" data-toast="This candidate is pinned because its falsification cost is lowest.">${ICONS.more}</button></div>
          <div class="opportunity-body">
            <h2 id="opportunity-title">${safe(top.name)} for ${safe(top.short.toLowerCase())}</h2>
            <p class="opportunity-subtitle">${safe(top.pain.split('. ')[0])}. <mark>Start manually. Automate only after a paid pilot.</mark></p>
            <div class="score-comparison"><div><div class="score-big">${top.trueScore.toFixed(1)}</div><span class="score-caption">Score if true</span></div><div><div class="score-big dim">${top.todayScore.toFixed(1)}</div><span class="score-caption">Score today</span></div><div class="score-gap"><strong>+${(top.trueScore - top.todayScore).toFixed(1)}</strong><span>evidence gap</span></div></div>
            <div class="mini-breakdown"><div><label>Buyer</label><strong>${safe(top.buyer)}</strong></div><div><label>Price</label><strong>${safe(top.price)}</strong></div><div><label>Test cost</label><strong>$120 / 10 days</strong></div><div><label>Evidence</label><strong>${top.evidence}% · medium</strong></div></div>
            <div class="opportunity-footer"><button class="button button-primary" type="button" data-action="test">Open test plan ${ICONS.arrow}</button><button class="opportunity-link" type="button" data-candidate="${top.id}" aria-label="Open opportunity details">${ICONS.info}</button></div>
          </div>
        </section>
        <section class="panel signal-panel"><div class="panel-header"><div class="panel-title"><h2>Next evidence</h2><span class="count">10 days</span></div><button class="panel-action" type="button" data-action="view-validation">Open lab ${ICONS.arrowRight}</button></div><div class="signal-list">
          <div class="signal-row done"><span class="signal-number">1</span><div class="signal-copy"><strong>Map 10 AP exception queues</strong><small>Buyer pain is visible in existing workarounds</small></div><span class="signal-state">DONE</span></div>
          <div class="signal-row"><span class="signal-number">2</span><div class="signal-copy"><strong>Run 10 controller conversations</strong><small>Test urgency and budget before building</small></div><span class="signal-state">NEXT</span></div>
          <div class="signal-row"><span class="signal-number">3</span><div class="signal-copy"><strong>Ask for 3 paid pilots</strong><small>Payment is the only meaningful commitment</small></div><span class="signal-state">LATER</span></div>
        </div></section>
      </div>
    </div>
  `;
}

function candidateRow(candidate) {
  const statusClass = candidate.statusTone === 'green' ? 'tag-green' : candidate.statusTone === 'orange' ? 'tag-orange' : 'tag-gray';
  return `<tr data-candidate="${candidate.id}">
    <td><div class="candidate-name"><span class="candidate-icon ${candidate.iconTone}">${ICONS[candidate.icon] || ICONS.file}</span><div><strong>${safe(candidate.name)}</strong><small>${safe(candidate.short)}</small></div></div></td>
    <td><div class="table-score">${candidate.trueScore.toFixed(1)}<div class="score-bar"><span style="width:${scoreWidth(candidate.trueScore)}"></span></div></div></td>
    <td><div class="table-score">${candidate.todayScore.toFixed(1)}<div class="score-bar"><span style="width:${scoreWidth(candidate.todayScore)};background:var(--orange)"></span></div></div></td>
    <td><span class="table-money">${safe(candidate.falsify)}</span></td>
    <td><span class="tag ${statusClass}">${safe(candidate.status)}</span></td>
    <td>${ICONS.arrowRight}</td>
  </tr>`;
}

function renderCandidates() {
  const filtered = getFilteredCandidates();
  return `
    <div class="section-header">
      <div><div class="eyebrow"><span class="eyebrow-line"></span>PHASE 02 / SYNTHESIS</div><h1>Candidate queue</h1><p class="heading-copy">No idea gets promoted because it sounds good. These are ranked by <strong>upside × cheapness of learning</strong>, with evidence and assumptions kept separate.</p></div>
      <div class="heading-actions"><button class="button button-ghost" type="button" data-action="export">${ICONS.download}Export snapshot</button><button class="button button-primary" type="button" data-action="run">${ICONS.spark}Refresh search</button></div>
    </div>
    <div class="metric-card-grid"><div class="metric-card"><label>Active candidates</label><strong>${activeCandidates().length}</strong><p>Across 8 distinct opportunity shapes</p></div><div class="metric-card"><label>Median evidence</label><strong>32%</strong><p>Score-today stays deliberately low</p></div><div class="metric-card"><label>Ideas killed</label><strong>${state.killed.length + 6}</strong><p>Compliance and complexity removed early</p></div></div>
    <div class="filter-row"><button class="filter-button ${state.filter === 'all' ? 'selected' : ''}" type="button" data-filter="all">All active</button><button class="filter-button ${state.filter === 'top' ? 'selected' : ''}" type="button" data-filter="top">Top 3</button><button class="filter-button ${state.filter === 'watch' ? 'selected' : ''}" type="button" data-filter="watch">Watch</button><button class="filter-button ${state.filter === 'low-complexity' ? 'selected' : ''}" type="button" data-filter="low-complexity">Low complexity</button><div class="search-box">${ICONS.search}<input id="candidate-search" type="search" value="${safe(state.search)}" placeholder="Search buyer, pain, or workflow" /></div></div>
    <section class="panel full-table-panel"><div class="panel-header"><div class="panel-title"><h2>All generated businesses</h2><span class="count">${filtered.length} shown</span></div><span class="eyebrow" style="font-size:9px"><span class="status-dot"></span>FACTS ≠ ESTIMATES</span></div><div class="candidate-table-wrap"><table class="candidate-table full-candidate-table"><thead><tr><th>Opportunity / buyer</th><th>Score if true</th><th>Score today</th><th>Evidence</th><th>Assumption burden</th><th>Cost to falsify</th><th>Status</th><th></th></tr></thead><tbody>${filtered.length ? filtered.map(fullCandidateRow).join('') : `<tr><td colspan="8"><div class="empty-state"><div>${ICONS.search}</div><h3>No candidates match</h3><p>Try a broader search or remove the filter.</p></div></td></tr>`}</tbody></table></div><div class="table-footer"><span>Frozen rubric · 10 dimensions · estimates are not evidence</span><button type="button" data-action="toast" data-toast="The queue is already showing every active candidate in this run.">Why this ranking? ${ICONS.info}</button></div></section>
  `;
}

function fullCandidateRow(candidate) {
  const statusClass = candidate.statusTone === 'green' ? 'tag-green' : candidate.statusTone === 'orange' ? 'tag-orange' : 'tag-gray';
  const complexityClass = candidate.complexity <= 4 ? 'tag-green' : candidate.complexity >= 7 ? 'tag-orange' : 'tag-gray';
  return `<tr data-candidate="${candidate.id}"><td><div class="candidate-name"><span class="candidate-icon ${candidate.iconTone}">${ICONS[candidate.icon] || ICONS.file}</span><div><strong>${safe(candidate.name)}</strong><small>${safe(candidate.buyer)}</small></div></div></td><td><div class="table-score">${candidate.trueScore.toFixed(1)}<div class="score-bar"><span style="width:${scoreWidth(candidate.trueScore)}"></span></div></div></td><td><div class="table-score">${candidate.todayScore.toFixed(1)}<div class="score-bar"><span style="width:${scoreWidth(candidate.todayScore)};background:var(--orange)"></span></div></div></td><td><div class="evidence-cell ${candidate.evidence >= 45 ? 'high' : candidate.evidence >= 30 ? 'medium' : ''}"><div class="score-bar"><span style="width:${candidate.evidence}%;background:${candidate.evidence >= 45 ? 'var(--lime)' : 'var(--orange)'}"></span></div>${candidate.evidence}%</div></td><td><span class="tag ${complexityClass}">${candidate.burden.toFixed(1)} / 10</span></td><td><span class="table-money">${safe(candidate.falsify)}</span></td><td><span class="tag ${statusClass}">${safe(candidate.status)}</span></td><td>${ICONS.arrowRight}</td></tr>`;
}

function getFilteredCandidates() {
  let result = activeCandidates();
  if (state.filter === 'top') result = result.filter((candidate) => candidate.status === 'Top 3');
  if (state.filter === 'watch') result = result.filter((candidate) => candidate.status === 'Watch' || candidate.status === 'Needs scrutiny');
  if (state.filter === 'low-complexity') result = result.filter((candidate) => candidate.complexity <= 4);
  if (state.search.trim()) {
    const query = state.search.toLowerCase();
    result = result.filter((candidate) => [candidate.name, candidate.short, candidate.buyer, candidate.pain, candidate.wedge].join(' ').toLowerCase().includes(query));
  }
  return result;
}

function renderValidation() {
  const top = candidateById('ap-exception');
  return `
    <div class="section-header"><div><div class="eyebrow"><span class="eyebrow-line"></span>PHASE 05 / FALSIFICATION</div><h1>Validation lab</h1><p class="heading-copy">A test is good when it can kill the thesis before software, branding, or hope becomes expensive.</p></div><div class="heading-actions"><div class="run-state"><span class="status-dot"></span>TEST DESIGN READY</div><button class="button button-primary" type="button" data-action="start-test">Start test ${ICONS.arrow}</button></div></div>
    <div class="validation-layout">
      <div>
        <section class="validation-hero"><div class="eyebrow"><span class="eyebrow-line"></span>TEST FIRST · VERY HIGH ROI</div><h2>Will AP managers pay to remove exception chasing?</h2><p>The business only works if the buyer experiences this as recurring budget pain, not a “nice-to-have” productivity improvement. Sell the outcome manually before writing the workflow.</p><div class="validation-meta"><span class="meta-chip">Buyer <strong>${safe(top.buyer)}</strong></span><span class="meta-chip">Sample <strong>10 conversations</strong></span><span class="meta-chip">Cash <strong>$120 max</strong></span><span class="meta-chip">Calendar <strong>10 days</strong></span></div></section>
        <section class="test-steps"><div class="panel-header"><div class="panel-title"><h2>14-day falsification sequence</h2><span class="count">4 steps</span></div><button class="panel-action" type="button" data-action="copy-message">Copy outreach ${ICONS.arrowRight}</button></div>
          <div class="test-step complete"><span class="step-index">${ICONS.check}</span><div><strong>Map live exception queues</strong><p>Collect 10 anonymized examples from controllers; record frequency, labor, and consequences.</p></div><span class="step-status">DONE · 2 HRS</span></div>
          <div class="test-step current"><span class="step-index">2</span><div><strong>Run buyer conversations</strong><p>Ask how the queue is handled today, what gets missed, and which budget owns the pain.</p></div><span class="step-status">NEXT · 5 HRS</span></div>
          <div class="test-step"><span class="step-index">3</span><div><strong>Offer three paid pilots</strong><p>Forward exceptions to a shared inbox. Return an ERP-ready review packet within 24 hours.</p></div><span class="step-status">DAYS 5–8</span></div>
          <div class="test-step"><span class="step-index">4</span><div><strong>Price the continuation</strong><p>Ask for $1,500 per month after the pilot. Payment, not enthusiasm, is the evidence.</p></div><span class="step-status">DAYS 9–10</span></div>
        </section>
      </div>
      <aside class="validation-side"><section class="assumption-card"><div class="eyebrow"><span class="eyebrow-line"></span>LOAD-BEARING ASSUMPTION</div><h3>${safe(top.assumption)}</h3><p>${safe(top.test)}</p><div class="assumption-footer"><span>STOP IF <strong>0 paid pilots</strong></span><span>CONTINUE IF <strong>≥ 2 paid</strong></span></div></section><section class="evidence-card"><h3>Evidence ledger</h3><div class="evidence-line"><span class="line-label">Pain visible</span><div class="wide-bar"><span style="width:76%;background:var(--lime)"></span></div><strong>76%</strong></div><div class="evidence-line"><span class="line-label">Buyer access</span><div class="wide-bar"><span style="width:61%;background:var(--lime)"></span></div><strong>61%</strong></div><div class="evidence-line"><span class="line-label">Willingness</span><div class="wide-bar"><span style="width:28%;background:var(--orange)"></span></div><strong>28%</strong></div><div class="evidence-line"><span class="line-label">Moat signal</span><div class="wide-bar"><span style="width:17%;background:var(--orange)"></span></div><strong>17%</strong></div></section></aside>
    </div>
    <section class="panel" style="margin-top:19px"><div class="panel-header"><div class="panel-title"><h2>Exact outreach</h2><span class="count">Email / LinkedIn</span></div><button class="panel-action" type="button" data-action="copy-message">Copy message ${ICONS.arrow}</button></div><div style="padding:18px 20px;color:var(--text-2);font-size:12px;line-height:1.7;max-width:860px"><span style="color:var(--lime);font-family:var(--mono);font-size:10px">SUBJECT</span><br /><strong style="color:var(--text);font-weight:500">Quick question about your AP exception queue</strong><p style="margin:12px 0 0;color:var(--muted)">“I’m speaking with regional distributors about the invoices that fall out of the normal AP flow. When an invoice is missing a PO or has a coding mismatch, who owns the chase today? I’m offering three teams a paid, 14-day concierge pilot that returns a review-ready exception queue. Worth comparing notes for 15 minutes?”</p></div></section>
  `;
}

function renderMethod() {
  const rubric = [
    ['11', 'Problem severity', 'Expensive, frequent, urgent, or painful?'], ['12', 'Buyer accessibility', 'Can the actual buyer be reached cheaply?'], ['13', 'Willingness to pay', 'Does money already move around the problem?'], ['14', 'Market opportunity', 'Enough realistic activity to matter?'], ['15', 'Scalability & automation', 'Can revenue outrun workload and opex?'], ['16', 'Defensibility / moat', 'Can structural advantages accumulate?'], ['17', 'Distribution advantage', 'Is acquisition repeatable and reachable?'], ['18', 'Unit economics', 'Margin, CAC, retention, and service cost?'], ['19', 'Time to first dollar', 'How fast can payment validate it?'], ['20', 'Execution feasibility', 'Can a tiny team build and operate it?']
  ];
  return `
    <div class="section-header"><div><div class="eyebrow"><span class="eyebrow-line"></span>PHASE -1 / RUBRIC LOCK</div><h1>The rules do not move.</h1><p class="heading-copy">The engine optimizes the business, not the score. Definitions and anchors stay frozen so a weak candidate cannot talk its way into a 9.</p></div><div class="heading-actions"><span class="lock-pill">${ICONS.lock}DEFAULT RUBRIC LOCKED</span></div></div>
    <div class="method-grid"><section class="locked-card"><span class="lock-pill">${ICONS.lock}NO EXTERNAL RUBRIC SUPPLIED</span><h2>Evidence before optimism.</h2><p>Every candidate receives a score-if-true and a score-today. The gap is the work still required to earn the thesis. Assumption burden and complexity are penalties, not hidden edits to the dimensions.</p><div class="settings-note" style="margin-top:20px"><strong>Anti-Goodhart check.</strong> If improving a score requires extra buyers, products, integrations, regulatory functions, or unsupported assumptions, the concept gets worse.</div></section><section class="rubric-card"><div class="panel-header"><div class="panel-title"><h2>Frozen 10-dimension rubric</h2><span class="count">1–10 anchors</span></div><span style="color:var(--muted);font:9px var(--mono)">LOCKED · SEP 2026</span></div><div class="rubric-list">${rubric.map(([number, title, copy]) => `<div class="rubric-item"><span class="rubric-number">${number}</span><div><strong>${title}</strong><p>${copy}</p></div></div>`).join('')}</div></section></div>
    <section class="panel method-phases"><div class="panel-header"><div class="panel-title"><h2>How a run works</h2><span class="count">8 phases</span></div><span class="eyebrow" style="font-size:9px"><span class="status-dot"></span>NO SCORE INFLATION</span></div><div class="phase-card-list"><div class="phase-card"><span>01 · FRONTIER</span><h3>Find capability shifts</h3><p>Separate now, soon, and cheapening capabilities. Never smuggle future reliability into today's business.</p></div><div class="phase-card"><span>02 · BORING MONEY</span><h3>Follow existing spend</h3><p>Find ugly workflows with invoices, staff, consultants, or outsourced services already attached.</p></div><div class="phase-card"><span>03 · SYNTHESIS</span><h3>Make distinct candidates</h3><p>One buyer, one pain, one wedge. Combine at least four specialist findings.</p></div><div class="phase-card"><span>04 · OUTSIDE VIEW</span><h3>Check base rates</h3><p>Look at competitors, prices, sales cycles, substitutes, and failure modes before scoring.</p></div><div class="phase-card"><span>05 · DESTROY</span><h3>Debate the thesis</h3><p>Bull and bear label every claim as evidence or assumption. Unresolved claims become tests.</p></div><div class="phase-card"><span>06 · FALSIFY</span><h3>Buy cheap information</h3><p>Under 14 days, under $200, with the smallest sample that can expose a fatal flaw.</p></div></div></section>
  `;
}

function renderSettings() {
  return `
    <div class="section-header"><div><div class="eyebrow"><span class="eyebrow-line"></span>WORKSPACE SETTINGS</div><h1>Keep the search honest.</h1><p class="heading-copy">Founder constraints are the only personal inputs. Everything else must be earned from evidence.</p></div><div class="heading-actions"><div class="run-state"><span class="status-dot"></span>SYNCED</div></div></div>
    <div class="settings-grid"><section class="settings-card"><div class="panel-header"><div class="panel-title"><h2>Founder constraints</h2><span class="count">3 inputs</span></div></div><form class="settings-form" id="settings-form"><div class="input-row"><div class="form-group"><label for="settings-hours">Hours available / week</label><div class="input-wrap"><input class="form-input" id="settings-hours" name="hours" value="${safe(state.constraints.hours)}" inputmode="numeric" /><span class="input-suffix">hrs</span></div></div><div class="form-group"><label for="settings-capital">Capital that can be lost</label><input class="form-input" id="settings-capital" name="capital" value="${safe(state.constraints.capital)}" /></div></div><div class="form-group"><label for="settings-refuses">Things you refuse to do</label><textarea class="form-textarea" id="settings-refuses" name="refuses">${safe(state.constraints.refuses)}</textarea></div><button class="button button-primary" type="submit">Save founder inputs ${ICONS.check}</button></form></section><section class="settings-card"><div class="panel-header"><div class="panel-title"><h2>Engine behavior</h2><span class="count">Defaults</span></div></div><div style="padding:2px 18px 10px"><div class="toggle-row"><div class="toggle-copy"><strong>Show evidence ledger</strong><span>Keep estimates visually distinct from facts.</span></div><button class="toggle ${state.toggles.evidence ? 'on' : ''}" type="button" data-toggle="evidence" aria-label="Toggle evidence ledger"><span></span></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Bias toward cheap tests</strong><span>Rank by upside × cost to learn.</span></div><button class="toggle ${state.toggles.defaultTest ? 'on' : ''}" type="button" data-toggle="defaultTest" aria-label="Toggle cheap test bias"><span></span></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Warn on complexity creep</strong><span>Flag new integrations and labor dependencies.</span></div><button class="toggle ${state.toggles.alerts ? 'on' : ''}" type="button" data-toggle="alerts" aria-label="Toggle complexity warnings"><span></span></button></div></div></section></div>
    <section class="panel" style="margin-top:19px"><div class="panel-header"><div class="panel-title"><h2>Data policy</h2><span class="count">Read-only</span></div></div><div style="padding:18px 20px;display:flex;gap:14px;align-items:flex-start;color:var(--muted);font-size:11px;line-height:1.55"><span style="color:var(--lime)">${ICONS.shield}</span><p style="margin:0;max-width:720px">This demo workspace uses illustrative candidate data. The engine labels claims as evidence or estimate and does not treat AI capability, market size, or enthusiasm as proof of willingness to pay.</p></div></section>
  `;
}

function openModal(type, data = {}) {
  state.modal = { type, ...data };
  renderModal();
}

function closeModal() {
  state.modal = null;
  $('#modal-root').innerHTML = '';
}

function modalShell(title, subtitle, body, footer = '') {
  return `<div class="modal-backdrop" data-action="close-modal"></div><div class="modal" role="dialog" aria-modal="true" aria-label="${safe(title)}"><div class="modal-header"><div><h2>${safe(title)}</h2><p>${safe(subtitle)}</p></div><button class="close-button" type="button" data-action="close-modal" aria-label="Close">${ICONS.close}</button></div><div class="modal-body">${body}${footer ? `<div class="modal-footer">${footer}</div>` : ''}</div></div>`;
}

function renderModal() {
  const root = $('#modal-root');
  if (!state.modal) { root.innerHTML = ''; return; }
  if (state.modal.type === 'constraints') {
    root.innerHTML = modalShell('Founder inputs', 'Only these constraints shape the search. Do not add an advantage the founder did not provide.', `<form id="constraints-form"><p class="modal-section-label">INPUTS</p><div class="input-row"><div class="form-group"><label for="modal-hours">Hours available / week</label><div class="input-wrap"><input class="form-input" id="modal-hours" name="hours" value="${safe(state.constraints.hours)}" inputmode="numeric" required /><span class="input-suffix">hrs</span></div></div><div class="form-group"><label for="modal-capital">Capital at risk</label><input class="form-input" id="modal-capital" name="capital" value="${safe(state.constraints.capital)}" required /></div></div><div class="form-group"><label for="modal-refuses">Things you refuse to do</label><textarea class="form-textarea" id="modal-refuses" name="refuses" required>${safe(state.constraints.refuses)}</textarea></div><div class="settings-note">The engine will penalize opportunities that need more than <strong>${safe(state.constraints.hours)} founder hours / week</strong> or your stated risk capital.</div><div class="modal-footer"><button class="button button-ghost" type="button" data-action="close-modal">Cancel</button><button class="button button-primary" type="submit">Save inputs ${ICONS.check}</button></div></form>`);
    return;
  }
  if (state.modal.type === 'run') {
    const phases = ['Capability frontier', 'Boring money workflows', 'Candidate synthesis', 'Outside-view check', 'Bull / bear destruction'];
    const step = state.runStep;
    const phaseMarkup = phases.map((phase, index) => `<div class="run-modal-phase ${index < step ? 'complete' : index === step ? 'current' : ''}"><span class="phase-check">${index < step ? ICONS.check : index === step && state.running ? '<span class="loader"></span>' : index + 1}</span><span>${phase}</span>${index < step ? '<span style="margin-left:auto;color:var(--lime);font:9px var(--mono)">DONE</span>' : index === step && state.running ? '<span style="margin-left:auto;color:var(--orange);font:9px var(--mono)">RUNNING</span>' : ''}</div>`).join('');
    const intro = state.running ? 'Specialists are working independently. Scores stay blank until the outside-view check is complete.' : step >= phases.length ? 'Run complete. The candidate queue has been ranked by upside and cost to learn.' : 'Five independent passes will generate, compare, and attack the business thesis.';
    root.innerHTML = modalShell(state.running ? 'Running reverse search' : step >= phases.length ? 'Run complete' : 'Run reverse search', intro, `<div>${phaseMarkup}</div>${step >= phases.length ? '<div class="settings-note" style="margin-top:15px"><strong>Discovery complete.</strong> Three candidates survived to the validation lab. No score was raised without a structural reason.</div>' : ''}`, step >= phases.length ? `<button class="button button-primary" type="button" data-action="close-modal">Review candidates ${ICONS.arrow}</button>` : state.running ? '' : `<button class="button button-ghost" type="button" data-action="close-modal">Not now</button><button class="button button-primary" type="button" data-action="start-run">Start run ${ICONS.spark}</button>`);
    return;
  }
  if (state.modal.type === 'kill') {
    const candidate = candidateById(state.modal.id);
    root.innerHTML = modalShell('Kill this candidate?', 'A dead candidate is a successful outcome when it saves founder time.', `<div class="settings-note" style="border-color:rgba(255,129,122,.32);background:rgba(255,129,122,.05);color:var(--text-2)"><strong style="color:var(--red)">${safe(candidate.name)}</strong><br />This will remove the idea from active rankings and record it as killed by the founder.</div><div class="modal-footer"><button class="button button-ghost" type="button" data-action="close-modal">Keep it</button><button class="button button-danger" type="button" data-action="confirm-kill" data-id="${candidate.id}">Kill candidate ${ICONS.close}</button></div>`);
  }
}

function openDrawer(id) {
  state.selectedId = id;
  const candidate = candidateById(id);
  if (!candidate) return;
  $('#drawer-root').innerHTML = `<div class="drawer-backdrop" data-action="close-drawer"></div><aside class="drawer" role="dialog" aria-modal="true" aria-label="${safe(candidate.name)} details"><div class="drawer-header"><div class="drawer-header-top"><div class="eyebrow"><span class="eyebrow-line"></span>${candidate.status === 'Top 3' ? 'TOP 3' : 'CANDIDATE'} · OUTSIDE VIEW</div><button class="close-button" type="button" data-action="close-drawer" aria-label="Close">${ICONS.close}</button></div><h2>${safe(candidate.name)}<br /><span style="color:var(--text-2);font-size:.72em;font-weight:500">for ${safe(candidate.short.toLowerCase())}</span></h2><p>${safe(candidate.pain)}</p></div><div class="drawer-body"><div class="drawer-score-row"><div class="drawer-score"><label>If true</label><strong>${candidate.trueScore.toFixed(1)}</strong></div><div class="drawer-score"><label>Today</label><strong>${candidate.todayScore.toFixed(1)}</strong></div><div class="drawer-score"><label>Assumption burden</label><strong>${candidate.burden.toFixed(1)}</strong></div></div><div class="drawer-section"><h3>Business shape</h3><div class="drawer-detail"><label>Exact buyer</label><span>${safe(candidate.buyerType)}</span></div><div class="drawer-detail"><label>Current workaround</label><span>${safe(candidate.workaround)}</span></div><div class="drawer-detail"><label>Proposed wedge</label><span>${safe(candidate.wedge)}</span></div><div class="drawer-detail"><label>Why now</label><span>${safe(candidate.whyNow)}</span></div></div><div class="drawer-section"><h3>Economics</h3><div class="drawer-detail"><label>Revenue model</label><span>${safe(candidate.revenue)} · <span class="positive">${safe(candidate.price)}</span></span></div><div class="drawer-detail"><label>Distribution</label><span>${safe(candidate.distribution)}</span></div><div class="drawer-detail"><label>Delivery</label><span>${safe(candidate.delivery)}</span></div><div class="drawer-detail"><label>Human / AI</label><span>${safe(candidate.human)} · ${safe(candidate.ai)}</span></div></div><div class="drawer-section"><h3>Why it might be real</h3><div class="drawer-detail"><label>Potential moat</label><span class="positive">${safe(candidate.moat)}</span></div><div class="drawer-detail"><label>What must be true</label><span class="warning">${safe(candidate.assumption)}</span></div><div class="drawer-detail"><label>Cheapest test</label><span>${safe(candidate.test)} <strong style="display:block;color:var(--orange);font:10px var(--mono);margin-top:6px">${safe(candidate.falsify)} · ${safe(candidate.roi)} ROI</strong></span></div></div><div class="drawer-footer"><button class="button button-primary" type="button" data-action="test">Test this candidate ${ICONS.arrow}</button><button class="button button-danger" type="button" data-action="kill-candidate" data-id="${candidate.id}">${ICONS.close} Kill</button></div></div></aside>`;
}

function closeDrawer() {
  state.selectedId = null;
  $('#drawer-root').innerHTML = '';
}

function startRun() {
  if (state.running) return;
  state.running = true;
  state.runStep = 0;
  renderModal();
  const timer = setInterval(() => {
    state.runStep += 1;
    renderModal();
    if (state.runStep >= 5) {
      clearInterval(timer);
      state.running = false;
      state.lastRun = 'just now';
      renderModal();
      render();
      setTimeout(() => { if (state.modal && state.modal.type === 'run') closeModal(); showToast('Run complete · 3 candidates are ready to test.'); }, 850);
    }
  }, 520);
}

function showToast(message) {
  const region = $('#toast-region');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${ICONS.check}<span>${safe(message)}</span>`;
  region.appendChild(toast);
  setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 260); }, 3000);
}

function handleClick(event) {
  const actionTarget = event.target.closest('[data-action]');
  const viewTarget = event.target.closest('[data-view]');
  const filterTarget = event.target.closest('[data-filter]');
  const candidateTarget = event.target.closest('[data-candidate]');
  const toggleTarget = event.target.closest('[data-toggle]');

  if (filterTarget) {
    state.filter = filterTarget.dataset.filter;
    render();
    return;
  }
  if (toggleTarget) {
    const key = toggleTarget.dataset.toggle;
    state.toggles[key] = !state.toggles[key];
    render();
    showToast(`${key === 'evidence' ? 'Evidence ledger' : key === 'defaultTest' ? 'Cheap-test bias' : 'Complexity warnings'} ${state.toggles[key] ? 'enabled' : 'disabled'}.`);
    return;
  }
  if (viewTarget && !actionTarget) {
    state.view = viewTarget.dataset.view;
    state.filter = 'all';
    render();
    return;
  }
  if (candidateTarget && !actionTarget) {
    openDrawer(candidateTarget.dataset.candidate);
    return;
  }
  if (!actionTarget) return;
  const action = actionTarget.dataset.action;
  if (action === 'toast') showToast(actionTarget.dataset.toast || 'Saved.');
  if (action === 'save') showToast('Run saved to Regional ops / v1.');
  if (action === 'edit-constraints') openModal('constraints');
  if (action === 'close-modal') closeModal();
  if (action === 'close-drawer') closeDrawer();
  if (action === 'run') openModal('run');
  if (action === 'start-run') startRun();
  if (action === 'open-all') { state.view = 'candidates'; render(); }
  if (action === 'view-validation' || action === 'test' || action === 'start-test') { closeDrawer(); state.view = 'validation'; render(); if (action !== 'view-validation') showToast('Test plan opened · the first action is 10 buyer conversations.'); }
  if (action === 'copy-message') {
    const message = 'I’m speaking with regional distributors about invoices that fall out of the normal AP flow. When an invoice is missing a PO or has a coding mismatch, who owns the chase today? I’m offering three teams a paid, 14-day concierge pilot. Worth comparing notes for 15 minutes?';
    if (navigator.clipboard) navigator.clipboard.writeText(message).catch(() => {});
    showToast('Outreach message copied.');
  }
  if (action === 'export') showToast('Snapshot prepared · export is available after the first saved run.');
  if (action === 'kill-candidate') openModal('kill', { id: actionTarget.dataset.id });
  if (action === 'confirm-kill') {
    state.killed.push(actionTarget.dataset.id);
    const killed = candidateById(actionTarget.dataset.id);
    closeModal(); closeDrawer(); render();
    showToast(`${killed.name} killed and removed from active rankings.`);
  }
}

document.addEventListener('click', handleClick);
document.addEventListener('submit', (event) => {
  if (event.target.id === 'constraints-form' || event.target.id === 'settings-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    state.constraints.hours = String(form.get('hours') || '15').replace(/[^0-9]/g, '') || '15';
    const capital = String(form.get('capital') || '$1,000').trim();
    state.constraints.capital = capital.startsWith('$') ? capital : `$${capital}`;
    state.constraints.refuses = String(form.get('refuses') || 'Nothing specified').trim();
    if (state.modal?.type === 'constraints') closeModal();
    render();
    showToast('Founder inputs saved · rerun the engine to update the search.');
  }
});
document.addEventListener('input', (event) => {
  if (event.target.id === 'candidate-search') {
    state.search = event.target.value;
    const cursor = event.target.selectionStart;
    render();
    const input = $('#candidate-search');
    if (input) { input.focus(); input.setSelectionRange(cursor, cursor); }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { if (state.modal) closeModal(); else if (state.selectedId) closeDrawer(); }
});

render();
