import { Profile } from './profile.model';

export const PROFILE: Profile = {
  name: 'VALENTINA DEI',
  position: 'fullstack developer',
  description:
    "As a web developer, my expertise lies in HTML, CSS, JS, and React. I have a strong passion for development, and I believe that practice and hard work are crucial to achieving outstanding results. In my work, I prioritize the end goal and ensure that my output meets the client's expectations.",
  contact: [
    {
      type: 'phone',
      value: '+38 063 88 69 028',
      icon: 'phone',
    },
    {
      type: 'email',
      value: 'safonik@Vgmail.com',
      icon: 'email',
    },
    {
      type: 'telegram',
      value: 'https://t.me/ValentinaDei',
      icon: 'message',
    },
    {
      type: 'location',
      value: 'Rivne, Ukraine',
      icon: 'place',
    },
  ],
  skills: [
    {
      value: 'HTML',
      color: '#FFC300',
    },
    {
      value: 'CSS & Saas',
      color: '#DEB887',
    },
    {
      value: 'JavaScript',
      color: '#00FFFF',
    },

    {
      value: 'React',
      color: '#DFFF00',
    },
    {
      value: 'ReactNative',
      color: '#FF5733',
    },
    {
      value: 'Redux',
      color: '#FF5733',
    },
    {
      value: 'Node.js',
      color: '#DE3163',
    },
    {
      value: 'MongoDB',
      color: '#DE3163',
    },
    {
      value: 'Express',
      color: '#FFC300',
    },
    {
      value: 'REST API',
      color: '#DC143C',
    },
    {
      value: 'Webpack & Parcel',
      color: '#DC143C',
    },
    {
      value: 'GIT',
      color: '#9FE2BF',
    },
  ],
  education: [
    {
      year: '2023',
      course: 'Practical React',
      institution: 'SoftServe',
    },
    {
      year: '2022-2023',
      course: 'Fullstack Development',
      institution: 'IT School GoIT',
    },
    {
      year: '2004-2009',
      course: 'Economic Cybernetic',
      institution: 'Rivne State Humanities University',
    },
  ],
  links: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/valentina-dei/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ValentinaDej/',
    },
  ],
  languages: [
    {
      language: 'Ukrainian',
      proficiency: 'native',
    },
    {
      language: 'English',
      proficiency: 'intermediate',
    },
  ],
};
