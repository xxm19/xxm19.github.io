import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Xiaomeng Xu via email @ xiaomengxu0830@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p>xiaomengxu0830@gmail.com</p>
        <p>xxm19@mails.tsinghua.edu.cn</p>
        <p>xuxm@stanford.edu</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
