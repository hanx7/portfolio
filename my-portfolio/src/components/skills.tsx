import MotionText from ".././components/motion-text";
import MotionDiv from ".././components/motion-div";
import MotionList from ".././components/motion-list";
// import Image from "next/image";
import reactIcon from ".././asset/icons/react.png";
import typescriptIcon from ".././asset/icons/typescript.png";
import javascriptIcon from ".././asset/icons/javascript.png";
import pythonIcon from ".././asset/icons/python.png";
import javaIcon from ".././asset/icons/java.png";
import html5Icon from ".././asset/icons/html5.png";
import tailwindcssIcon from ".././asset/icons/tailwindcss.png";
import nodejsIcon from ".././asset/icons/nodejs.png";
import expressjsIcon from ".././asset/icons/express-js.png";
import postgresIcon from ".././asset/icons/postgres.png";
import gitIcon from ".././asset/icons/git.png";

import githubActionsIcon from "../asset/icons/github-actions.png";
export default function skills() {
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },

        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          icon: reactIcon,
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
      ],
    },
    // {
    //   title: "Tools & Environment",
    //   skills: [
    //     {
    //       name: "macOS",
    //       icon: macosIcon,
    //     },
    //     {
    //       name: "VS Code",
    //       icon: vscodeIcon,
    //     },
    //     {
    //       name: "Arc",
    //       icon: arcIcon,
    //     },
    //     {
    //       name: "Warp Terminal",
    //       icon: warpIcon,
    //     },
    //     {
    //       name: "Postman",
    //       icon: postmanIcon,
    //     },
    //   ],
    // },
    // {
    //   title: "Visual",
    //   skills: [
    //     {
    //       name: "DaVinci Resolve",
    //       icon: davinciResolveIcon,
    //     },
    //     {
    //       name: "Lightroom",
    //       icon: lightroomIcon,
    //     },
    //   ],
    // },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={icon} alt={name}  />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
