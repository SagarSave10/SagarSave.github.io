/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Electric Vehicle Center- University of Michigan',
    position: 'Research Associate',
    url: 'https://evc.engin.umich.edu/',
    startDate: '2025-05-01',
    summary: 'Conducting research on next-gen SiC-based power modules for EV traction inverters, focusing on 3D package design, thermal/CFD simulation, and manufacturability in collaboration with six industry partners.',
    highlights: [
      'Leading research on next-generation power modules for traction inverters in electric vehicles, in collaboration with six industrial partners.',
      'Investigating the integration of wide-bandgap semiconductor components (SiC) to enhance switching performance, thermal stability, and power density.',
      'Designing and simulating 3D package architectures using SolidWorks and COMSOL Multiphysics to optimize mechanical, thermal, and electrical behavior of high-power modules.',
      'Evaluating thermal management strategies using CFD and thermomechanical stress simulations to ensure device reliability under real-world EV operating conditions.',
      'Collaborating with cross-disciplinary teams to benchmark packaging technologies, assess manufacturability constraints, and propose scalable solutions aligned with future automotive standards.',
      'Supporting documentation, modeling, and layout design activities while contributing to the development of technology roadmaps for high-efficiency inverter systems.',
    ],
  },
  {
    name: 'Royal Enfield (A unit of Eicher motors)',
    position: 'Assitant Manager- Cost Management',
    url: 'https://www.royalenfield.com/us/en/our-world/since-1901/',
    startDate: '2021-10-04',
    endDate: '2024-06-11',
    summary: 'Led and delivered over 15 concurrent cost reduction projects across proprietary mechanical and electrical components. Worked in a fast-paced OEM environment, owning end-to-end responsibility for project execution, supplier coordination, and cross-functional alignment to meet cost, quality, and timeline goals.',
    highlights: [
      'Spearheaded more than 15 cost reduction and VAVE initiatives for proprietary projects to meet strategic business targets.',
      'Collaborated cross-functionally with design, purchasing, and supplier quality teams to streamline the cost planning process from concept to production.',
      'Achieved a 45% cost reduction in Catalytic Converter VAVE, saving ₹640 million annually in vehicle material costs.',
      'Initiated PCB centralization for ICE motorcycles, achieving a 30% reduction in total electronic components through integration.',
      'Generated RFQs and analyzed supplier quotations for accuracy and competitiveness, leading to an average 12% reduction in component costs.',
      'Performed root cause analysis of defective drivetrain components using structured problem-solving and DOE methods; implemented data-driven design modifications that improved manufacturing throughput.',
      'Maintained supplier master data for 50+ vendors and audited pricing accuracy across procurement categories and Collaborated with logistics to analyze inventory movement and reduce stockouts at regional warehouses.',
    ],
  },
  {
    name: 'Michigan Dining, University of Michigan',
    position: 'Sustainability Intern',
    url: 'https://dining.umich.edu/sustainability/',
    startDate: '2024-08-19',
    summary: 'Supported campus dining sustainability initiatives through procurement strategy, waste reduction, stakeholder engagement, and data-driven reporting, with a focus on circular systems and DEI-aligned sourcing.',
    highlights: [
      'Led sustainable procurement initiatives, including drafting contract language, identifying credible third-party certifications, and compiling a vendor demographics report to support diversity, equity, and inclusion in sourcing practices.',
      'Built and coordinated a cross-functional team of 12 sustainability interns to advance key goals in waste reduction, composting, and recycling; supported the development of long-term strategy plans in alignment with university-wide sustainability commitments.',
      'Designed and implemented outreach strategies, managing digital and physical communications to increase campus engagement and visibility of dining sustainability efforts.',
      'Developed Sustainaility planning guide and AI-integrated sustainability reporting tools using Google Apps Script to auto-generate PDF reports for stakeholders based on form submissions, with personalized recommendations for sourcing, waste, and menu optimization.',
      'Researched and piloted vinyl and nitrile glove recycling, conducting a life cycle assessment (LCA) to quantify carbon impacts and evaluating Terracycle’s closed-loop recycling solution for non-compostable PPE in food service.',
    ],
  },
  {
    name: 'Rapid Prototyping Consultant',
    position: 'Founder of Self-Initiated Venture.',
    startDate: '2021-12-01',
    endDate: '2024-06-15',
    highlights: [
      'Provided end-to-end additive manufacturing solutions encompassing design research, iterative development, and in-house rapid prototyping services.',
      'Conducted design and failure analysis of prototypes to identify key improvements in manufacturability and performance, leveraging iterative testing methodologies.',
      'Collaborated with engineers to optimize prototyping processes using selective laser melting and FDM, applying failure mode analysis to enhance product development.',
    ],
  },

];

export default work;
