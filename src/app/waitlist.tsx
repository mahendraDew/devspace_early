"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
export function Waitlist() {
  return (
    <div className="h-[40rem] w-full rounded-md dark:bg-gray-950  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  text-gray-950 dark:text-gray-50 text-center font-sans font-bold">
          want early access?
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2  text-center relative z-10">
          <span className="text-neutral-500 max-w-lg mx-auto my-2  text-center relative z-10">
            just dm me on twitter{' '}
            <a
                href="https://twitter.com/mahendra_dew"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 dark:hover:text-gray-50 underline hover:text-gray-900"
            >
                @mahendra_dew
            </a>
            {' '}for early access!!
          </span>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
