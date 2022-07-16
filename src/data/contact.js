import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/xxm19',
    label: 'Github',
    icon: faGithub,
  },

  {
    link: 'https://profiles.stanford.edu/xiaomeng-xu',
    label: 'Stanford Profile',
    icon: faBookmark,
  },
  {
    link: 'mailto:xiaomengxu0830@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
