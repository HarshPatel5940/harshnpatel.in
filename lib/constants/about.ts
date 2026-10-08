// Education from the supplied resume; graduation status has not been inferred.
interface About {
  course: string;
  school: string;
  year: string;
  description: string;
}

export const about: About[] = [
  {
    course: "BTech Computer Science and Engineering",
    school: "SRM Institute of Science and Technology",
    year: "Started 2022",
    description: "Specialization in Cloud Computing.",
  },
  {
    course: "School education",
    school: "Sindhi Model Senior Secondary School",
    year: "2010 – 2022",
    description: "Physics, Chemistry, Mathematics, and Computer Science.",
  },
];
