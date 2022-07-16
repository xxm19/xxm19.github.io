// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Pytorch',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Latex',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Markdown',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'OpenCV',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'C/C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Verilog/VHDL',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'ROS',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'SolidWorks',
    competency: 5,
    category: ['Softwares'],
  },
  {
    title: 'AutoCAD',
    competency: 3,
    category: ['Softwares'],
  },
  {
    title: 'Qt Creator',
    competency: 4,
    category: ['Softwares'],
  },
  {
    title: 'Multisim',
    competency: 5,
    category: ['Softwares'],
  },
  {
    title: 'Quartus',
    competency: 2,
    category: ['Softwares'],
  },
  {
    title: '3D Printing',
    competency: 5,
    category: ['Hardwares'],
  },
  {
    title: 'FPGA',
    competency: 2,
    category: ['Hardwares'],
  },
  {
    title: 'Microcontroller',
    competency: 2,
    category: ['Hardwares'],
  },
  
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
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

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
