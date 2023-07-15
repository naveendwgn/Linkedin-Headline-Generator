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

      <main className="flex min-h-screen flex-col items-center p-16">
        <h1 className="text-5xl font-bold text-center">
          Generate your Linkedin Headline <br/> with ease using <br/>
          GPT-4
        </h1>
        <input
          type="text"
          className="mt-16 px-3 py-3 rounded-lg mb-4 bg-[#fafafa] text-black w-full max-w-lg"
          required
          placeholder="e.g. I am B.tech CSE undergrad and an intern at Google"
        />
        <button 
            className='bg-[#ba50da] text-[#ffffff] px-5 py-2 rounded-lg mt-6 hover:bg-[#d267f2]'
            >Generate
            </button>
      </main>
    </>
  )
}
