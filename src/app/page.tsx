'use client';
import React from "react";
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
          <FaGithub className="fill-current h-8 w-8 mr-2" />
        </a>
        <a href="https://naveendwgn.github.io/" className="flex items-center flex-shrink-0 text-white mr-6">
          <CiGlobe className="fill-current h-8 w-8 mr-2" />
        </a>

      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <h1 className="text-4xl font-bold text-center">
          Generate your Linkedin Headline <br/> with ease using GPT-4
        </h1>
        
      </main>
    </>
  )
}
