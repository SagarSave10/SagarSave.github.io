const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Programming & Data Analysis', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Programming & Data Analysis', 'Languages'],
  },
  {
    title: 'Ansys Workbench',
    competency: 3,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'Ansys Fluent',
    competency: 4,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'Autodesk Fusion 360',
    competency: 4,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'SolidWorks',
    competency: 5,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'COMSOL Multiphysics',
    competency: 5,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'PowerBI',
    competency: 4,
    category: ['Programming & Data Analysis'],
  },
  {
    title: 'Excel',
    competency: 2,
    category: ['Programming & Data Analysis'],
  },
  {
    title: 'Six Sigma',
    competency: 4,
    category: ['Analytical & Quality Tools'],
  },
  {
    title: 'Root Cause Analysis',
    competency: 4,
    category: ['Analytical & Quality Tools'],
  },
  {
    title: 'Design of Experiments (DOE)',
    competency: 3,
    category: ['Analytical & Quality Tools'],
  },
  {
    title: 'Failure Mode Effect and Analysis',
    competency: 2,
    category: ['Analytical & Quality Tools'],
  },
  {
    title: 'Cadence',
    competency: 3,
    category: ['Modeling & Simulation Tool'],
  },
  {
    title: 'Photolithography',
    competency: 3,
    category: ['Semiconductor Fabrication Processes'],
  },
  {
    title: 'Deep Reactive Ion Etching DRIE',
    competency: 3,
    category: ['Semiconductor Fabrication Processes'],
  },
  {
    title: 'Clean Room Handling',
    competency: 3,
    category: ['Semiconductor Fabrication Processes'],
  },
  {
    title: 'SAP',
    competency: 2,
    category: ['Programming & Data Analysis'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
