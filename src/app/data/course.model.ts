export interface Course {
  id: number;
  name: string;
  description: string;
  days: string;
  course_duration: string;
  session_duration: string;
  location: string;
  format: string;
  topics: string[];
  instructors: { name: string; bio: string; photoUrl: string }[];
  studentReviews: { name: string; review: string; rating: number }[];
}
