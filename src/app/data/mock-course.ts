import { Course } from './course.model';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Web Development Essentials',
    description:
      'A comprehensive introduction to building websites and web applications.',
    days: 'Weekends',
    course_duration: '10 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 2,
    name: 'Advanced Python Programming',
    description:
      'Deep dive into Python with advanced libraries and techniques.',
    days: 'Weekends',
    course_duration: '10 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 3,
    name: 'Graphic Design Fundamentals',
    description:
      'Learn the principles of design, color theory, and software tools.',
    days: 'Wed-Fri',
    course_duration: '7 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'In-person',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 4,
    name: 'Digital Marketing Strategies',
    description:
      'Develop effective digital marketing strategies for businesses.',
    days: 'Wed-Fri',
    course_duration: '6 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 5,
    name: 'Artificial Intelligence Basics',
    description:
      'Understand the fundamentals of AI and its real-world applications.',
    days: 'Wed-Fri',
    course_duration: '12 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },

  {
    id: 6,
    name: 'Data Science Workshop',
    description:
      'Hands-on experience in data analysis and visualization techniques.',
    days: 'Tue-Thu',
    course_duration: '8 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 7,
    name: 'Mobile App Development',
    description: 'Create and deploy mobile applications on various platforms.',
    days: 'Mon-Wed',
    course_duration: '9 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 8,
    name: 'Creative Writing Techniques',
    description:
      'Enhance your writing skills for different genres and audiences.',
    days: 'Mon-Wed',
    course_duration: '9 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 9,
    name: 'Photography Masterclass',
    description: 'Expert tips and tricks for professional-level photography.',
    days: 'Mon-Wed',
    course_duration: '9 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'In-person',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 10,
    name: 'Public Speaking Mastery',
    description:
      'Improve your public speaking skills and presentation techniques.',
    days: 'Tue-Thu',
    course_duration: '6 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 11,
    name: 'Cybersecurity Basics',
    description:
      'Learn about protecting systems and networks from digital attacks.',
    days: 'Tue-Thu',
    course_duration: '8 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 12,
    name: '3D Modeling and Animation',
    description:
      'Create stunning 3D models and animations using industry software.',
    days: 'Tue-Thu',
    course_duration: '6 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'In-person',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 13,
    name: 'Business Analytics Overview',
    description:
      'Get insights into business data analysis and decision making.',
    days: 'Wed-Fri',
    course_duration: '5 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 14,
    name: 'Introduction to Robotics',
    description:
      'Explore the world of robotics and its practical applications.',
    days: 'Tue-Thu',
    course_duration: '7 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 15,
    name: 'Virtual Reality Experiences',
    description:
      'Design and experience immersive virtual reality environments.',
    days: 'Weekends',
    course_duration: '5 weeks',
    session_duration: '1 hour',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 16,
    name: 'Game Development with Unity',
    description: 'Learn to develop engaging games using Unity engine.',
    days: 'Weekends',
    course_duration: '5 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'Hybrid',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 17,
    name: 'Yoga and Wellness',
    description:
      'Explore yoga practices and wellness for a healthier lifestyle.',
    days: 'Wed-Fri',
    course_duration: '5 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 18,
    name: 'Culinary Arts for Beginners',
    description: 'Basics of cooking techniques, recipes, and presentation.',
    days: 'Tue-Thu',
    course_duration: '12 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 19,
    name: 'Fitness and Personal Training',
    description:
      'Training programs for fitness enthusiasts and personal trainers.',
    days: 'Weekends',
    course_duration: '5 weeks',
    session_duration: '3 hours',
    location: 'Rivne',
    format: 'Online',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
  {
    id: 20,
    name: 'Music Production Techniques',
    description: 'Produce and mix music using modern software and equipment.',
    days: 'Wed-Fri',
    course_duration: '7 weeks',
    session_duration: '2 hours',
    location: 'Rivne',
    format: 'In-person',
    topics: ['HTML Basics', 'CSS Fundamentals', 'Introduction to JavaScript'],
    instructors: [
      {
        name: 'Іван Іванов',
        bio: 'Experienced Web Developer',
        photoUrl: 'url-to-image',
      },
      { name: 'Петро Петров', bio: 'Frontend Guru', photoUrl: 'url-to-image' },
    ],
    studentReviews: [
      { name: 'Олексій', review: 'Great course!', rating: 5 },
      { name: 'Марія', review: 'Very informative.', rating: 4 },
    ],
  },
];
