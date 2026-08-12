export interface Course {
  name: string
}

export interface University {
  name: string
  shortName: string
  slug: string
  logo: string
  description: string
  campus: string
  attendance: string
  intakes: string[]
  courses: Course[]
}

export const universities: University[] = [
  {
    name: "Anglia Ruskin University (ARU London)",
    shortName: "ARU London",
    slug: "aru",
    logo: "/logos/universities/aru.svg",
    description:
      "ARU London offers a wide range of undergraduate and postgraduate degrees designed to prepare students for successful careers. With a focus on employability and real-world learning, ARU London is part of the renowned Anglia Ruskin University, a globally recognised institution.",
    campus: "London",
    attendance: "2 days per week",
    intakes: ["September", "January", "May"],
    courses: [
      { name: "Accounting and Finance" },
      { name: "Business Management" },
      { name: "Business and Marketing" },
      { name: "Computer Science" },
      { name: "Health and Social Care" },
      { name: "International Business Management" },
      { name: "Law" },
    ],
  },
  {
    name: "Global Banking School (GBS)",
    shortName: "GBS",
    slug: "gbs",
    logo: "/logos/universities/gbs.svg",
    description:
      "Global Banking School provides career-focused education in banking, finance, business, and technology. With multiple campuses across the UK, GBS is committed to widening access to higher education and helping students from all backgrounds achieve their potential.",
    campus: "London, Birmingham, Manchester, Leeds",
    attendance: "2 days per week",
    intakes: ["September", "January", "May"],
    courses: [
      { name: "Accounting and Financial Management" },
      { name: "Business and Tourism Management" },
      { name: "Business and Events Management" },
      { name: "Business and Human Resource Management" },
      { name: "Business and Marketing Management" },
      { name: "Business Management" },
      { name: "Construction Management" },
      { name: "Digital Technologies" },
      { name: "Health, Wellbeing and Social Care" },
      { name: "Project Management" },
    ],
  },
  {
    name: "University of Central Lancashire (UCLan)",
    shortName: "UCLan",
    slug: "uclan",
    logo: "/logos/universities/uclan.svg",
    description:
      "UCLan is a modern, international university with a proud history dating back to 1828. The UCLan London campus brings the same quality of teaching and student support to the capital, offering a range of undergraduate and postgraduate programmes.",
    campus: "London",
    attendance: "2 days per week",
    intakes: ["September", "January", "May"],
    courses: [
      { name: "Business and Management" },
      { name: "Business and Marketing" },
      { name: "Cyber Security" },
      { name: "Data Science" },
      { name: "Finance and Accounting" },
      { name: "Health and Social Care" },
      { name: "Law" },
      { name: "Software Engineering" },
    ],
  },
  {
    name: "London School of Commerce",
    shortName: "LSC",
    slug: "lsc",
    logo: "/logos/universities/lsc.png",
    description:
      "London School of Commerce offers a diverse portfolio of programmes in business, computing, hospitality, and healthcare. With a strong international community and industry-focused curriculum, LSC prepares students for global careers.",
    campus: "London",
    attendance: "2 days per week",
    intakes: ["September", "February", "June"],
    courses: [
      { name: "Accounting" },
      { name: "Business Studies" },
      { name: "Computer Science" },
      { name: "Hospitality Management" },
      { name: "Information Technology" },
      { name: "Management" },
      { name: "MBA" },
      { name: "Public Health" },
    ],
  },
  {
    name: "Regent College London",
    shortName: "Regent College",
    slug: "regent",
    logo: "/logos/universities/regent.svg",
    description:
      "Regent College London is a modern higher education provider offering a wide range of undergraduate and postgraduate programmes. With a student-centred approach and strong industry links, Regent College is committed to transforming lives through education.",
    campus: "London",
    attendance: "2 days per week",
    intakes: ["September", "January", "May"],
    courses: [
      { name: "Accounting and Finance" },
      { name: "Business Management" },
      { name: "Construction Management" },
      { name: "Health and Social Care" },
      { name: "Law" },
      { name: "Marketing" },
      { name: "Project Management" },
    ],
  },
]

export function getUniversityBySlug(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug)
}
