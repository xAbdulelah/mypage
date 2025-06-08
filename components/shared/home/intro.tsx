"use client";
import { img_nightsky, img_sky,  welcome } from "@/lib/constants/text";
import { AnimateAstronaut, AnimateText } from "@/components/animation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Intro = () => {
  
  const { theme } = useTheme();

    const [sky, setSky] = useState<string | null>(null);

   useEffect(() => {
    if (theme) {
      setSky(theme === "dark" ? img_nightsky.src : img_sky.src);
    }
  }, [theme]);


  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center justify-between p-8 gap-8 bg-white dark:bg-slate-900 rounded-xl mt-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${sky})`,
        minHeight: "400px",
      }}
    >
      {/* Left: Text Content */}
      <div className="lg:w-2/3 text-center lg:text-left space-y-4">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white">
          {welcome}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          and I specialize in{" "}
          <span className="text-teal-500 font-bold text-2xl">
            <AnimateText />
          </span>
        </p>
        <Link href="/shop">
          <span className="inline-block mt-4 px-5 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
            Explore My Work
          </span>
        </Link>
      </div>

      {/* Right: Profile Image */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <div className="overflow-hidden rounded-lg ">
         <AnimateAstronaut />
        </div>
      </div>
    </section>
  );
};

export default Intro;
