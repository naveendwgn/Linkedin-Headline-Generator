'use client';
import React, { useState} from "react";
import { FaGithub } from 'react-icons/fa';
import { HiFire } from 'react-icons/hi';

export default function Home() {

  const [description, setDescription] = useState('');
  const [headline, setHeadline] = useState('');

  async function generateHeadline() {

    const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    const APIBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You will be provided with a short description of what a person does, his skills, work, experience etc. and your task is to generate linkedin headline based on that. Provide your answer in format divided by | only. Also try to keep it short and simple to the point headline no full sentences needed. Try adding emojis from these options(🧑‍💻⭐🚀) when needed ( in some generations). Some notable information- use *@* in place of *at* You can take format inspiration from examples below - 1. SDE @ Microsoft | 300k+ Subs on YT | Teacher | NSIT 2. SDE @LGSI | Ex-SWE Intern @HashedIn By Deloitte | Final Year Undergraduate 3. SWE @Google | Former Intern - Uber, Oracle, Zeta Suite | Student at IIIT Allahabad 4. Web Developer || Web Designer || UI/UX Designer || Freelance || 2 ⭐ @codechef 5. Student at National Institute of Technology ,NIT Raipur 6. OPJU'23 | DRDO | ML | DL | FRONT-END | PYTHON | C++"
        },
        {
          "role": "user",
          "content": description
        }
      ],
        "temperature": 0.8,
        "max_tokens": 64,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
    }

      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(APIBody)
      }).then((data)=>{
        return data.json();
      }).then((data)=>{
        setHeadline(data.choices[0].message.content.trim());
      })
  }

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
          <FaGithub className="fill-current h-8 w-8 mr-2" />
        </a>
        <a href="https://naveendwgn.github.io/" className="flex items-center flex-shrink-0 text-white mr-6">
          <HiFire className="fill-current h-8 w-8 mr-2" />
        </a>
      </nav>

      <main className="flex min-h-screen flex-col items-center p-16">
        <h1 className="text-5xl font-bold text-center">
          Generate your Linkedin Headline <br/> with ease using <br/>
          GPT-3.5
        </h1>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="mt-16 px-3 py-3 rounded-lg mb-4 bg-[#fafafa] text-black w-full max-w-lg"
          required
          placeholder="e.g. I am B.tech CSE undergrad and an intern at Google"
        />
        <button 
            onClick={generateHeadline}
            className='bg-[#5090da] text-[#ffffff] px-5 py-2 rounded-lg mt-6 hover:bg-[#67b6f2]'
            >Generate
            </button>
            {
              headline !== '' ?
              <div className="mt-10 px-3 py-3 rounded-lg mb-4 bg-[#fafafa] text-black w-full max-w-lg">
                {headline}
              </div>
              :
              null
            }
      </main>
      <footer className="flex items-center justify-center bg-black p-6">
        <p className="text-white text-center">
          Made with ❤️ by <a href="https://naveendwgn.github.io/" className="text-[#5090da]">Naveen Dewangan</a>
        </p>
      </footer>
    </>
  )
}
