'use client';
import { useEffect, useState } from 'react';
import { skills } from '@/lib/constants/text'; 
import Image from 'next/image';
import astronaut from "@/public/images/background/astronaut .png";

export const AnimateText = () => {
  const words = skills.split(' ');
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 70);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          setCharIndex((prev) => prev - 1);
        } else {
          setWordIndex((prev) => (prev + 1) % words.length);
          setCharIndex(0);
        }
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return <span>{displayText}</span>;
};


export const AnimateAstronaut = () => {
  return (
    <div className=" w-[600px] h-[400px]"> {/* container with fixed area */}
      <Image
        src={astronaut}
        width={300}
        height={300}
        alt="astronaut"
        className="absolute transform scale-x-[-1] animate-diagonal"
      />
    </div>
  );
};

export const AnimateLabel = ({ x, label }: { x: string, label: string }) => {
  const y = x === "1" ? 20 : -20;
  const color = x==="1" ?  "bg-cyan-200 text-cyan-900 dark:bg-cyan-800"    : "bg-violet-200 text-violet-900 dark:bg-violet-800"

  return (
    <span
      className={`${color} dark:text-white px-4 py-2 rounded-full font-semibold shadow animate-floatUpDown inline-block`}
      style={{
        '--x': '0px',
        '--y': `${y}px`,
          animationDuration: "2s",
      } as React.CSSProperties}
    >
      {label}
    </span>
  );
};

