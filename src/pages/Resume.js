import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Awards from '../components/Resume/Awards';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';
import award from '../data/resume/award';

const sections = [
  'Education',
  'Awards',
  'Courses',
  'Experience',
  'Skills',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Xiaomeng Xu's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Awards data={award} />
      <Courses data={courses} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Resume;
