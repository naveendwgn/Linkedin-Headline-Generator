## ProHeadline - Linkedin Headline Generator

This is a simple tool to generate your next Linkedin headline. It uses GPT-3.5 Turbo to generate the headline depending upon the short description provided by the user.

## User Interface
<img width="1080" alt="Screenshot 2023-07-15 180301" src="https://github.com/naveendwgn/Linkedin-Headline-Generator/assets/114351583/1a73c826-795a-4c09-83ed-a028ac9252ec">

## Old UI
<img width="1080" alt="image" src="https://github.com/naveendwgn/Linkedin-Headline-Generator/assets/114351583/94968e11-6c52-4f7e-8e8c-e58fb65179cc">

## Prompt Engineering

<img width="1080" alt="Screenshot 2023-07-15 203239" src="https://github.com/naveendwgn/Linkedin-Headline-Generator/assets/114351583/fb05c4f8-7051-4fe9-8b79-9cae79b954da">

## BTS Story

While i was exploring through OpenAI's examples section, playing and testing out various example presets it has in the playground(OpenAI allows you test various models it has) and was wondering what other things i could do and make a project out of it. Now while i was in linkedin thought why not try generating Linkedin Headlines.

So i went ahead and started with a simple prompt and tried generating headlines. Now OpenAI's API has this advanced features where you can have multiple prompts which is in the form of two roles 1. System and 2. User.

The system prompt is basically fine tuning the model with providing instructions to what to do and what not to do, control output lengths and get relevant and accuarte results.

The user prompt is the prompt you would input on the frontend, describing yourself, your work, skils etc.

I initialized the Next.js and made the API call and voila definitely got the output i was expecting.

Fine tuning/optimizing the prompts was fun part for one of the instructions i basically copied some of my linkedin connections headlines and pasted into the system prompt for it to take insipiration from those headlines.

## Tach Stack

- Next.js
- Tailwind CSS
- GPT-4
- Vercel
