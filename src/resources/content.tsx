import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Peter",
  lastName: "Udtujan",
  name: `Peter Udtujan`,
  role: "Artist & Developer",
  avatar: "/images/Pedro.png",
  email: "tonecolabs@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/trujan7",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/peterudtujan",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/pitostudios",
    essential: true,
  },

  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=tonecolabs@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting interactive art that puts you in control.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Click Me</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    <Text as="span" size="xl" weight="strong">TONECO Labs | Pito Studios </Text>
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Backed by the technical foundation of TONECO Labs, Pito Studios is a digital creation hub focused on crafting bold, interactive experiences. Their work spans game development, illustration, and multimedia design setting the art in motion, so the player can take control.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TONECO Labs | Pito Studios",
        timeframe: "2022 - Present",
        role: "Artist & Developer (Self Employed)",
        achievements: [
          <>
            Designed Print Layouts, Game and Web UIs, and Digital Illustrations/Concept Art.
          </>,
          <>
            Developed Static and Dynamic Websites using Laravel stack & Next.js stack.
          </>,
          <>
             Developed Mobile, PC, and Console Video Games using Roblox Studio and Unity Engine.
          </>,
        ],
        //images: [
          // optional: leave the array empty if you don't want to display images
         // {
         //   src: "/images/projects/project-01/cover-01.jpg",
         //   alt: "Once UI Project",
         //   width: 16,
         //   height: 9,
        //  },
      //  ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jose Rizal University",
        description: <>BSBA Major in Computer Science.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Games",
  title: "Keep updated with TONECO Lab's developments...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Illustrations",
  title: `Work gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    /*{
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },*/
    /*{
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },*/
    {
      src: "/images/gallery/vertical2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    /*{
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },*/
    /*{
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },*/
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
