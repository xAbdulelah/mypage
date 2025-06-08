"use client";

import { useEffect, useState } from "react";
import InfoSection from "../section";
import ShowCase from "../showcase";
import { MySkills,networkEngineerCertifications,fullStackCertifications } from "@/lib/constants/text";
import { useTheme } from "next-themes";

const SkillsShow = () => {
  const { theme } = useTheme();
  const [gradient, setGradient] = useState<string | null>(null);
  useEffect(() => {
    if (theme) {
      setGradient(theme === "dark" ? "animate-gradient" : "animate-gradient1");
    }
  }, [theme]);

  return (
    <>
      <InfoSection
        title={MySkills[1].skill}
        description={MySkills[1].description}
        labels={MySkills[1].label}
      />
      <div
        className={`flex flex-col items-center  ${gradient} py-10 mt-7`}
      >
        <h2 className="text-4xl font-bold text-white mb-5">Certificate</h2>

        <div className="w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-1">
          {networkEngineerCertifications.map((course, index) => (
            <ShowCase
              key={index}
              img={course.img}
              title={course.name}
              description={course.description}
              label={course.label}
            />
          ))}
        </div>
      </div>
      <InfoSection
        title={MySkills[0].skill}
        description={MySkills[0].description}
        labels={MySkills[0].label}
      />

            <div
        className={`flex flex-col items-center  ${gradient} py-10 mt-7`}
      >
        <h2 className="text-4xl font-bold text-white mb-5">Certificate</h2>

        <div className="w-11/12 grid grid-cols-1 xl:grid-cols-2 gap-1">
          {fullStackCertifications.map((course, index) => (
            <ShowCase
              key={index}
              img={course.img}
              title={course.name}
              description={course.description}
              label={course.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsShow;
