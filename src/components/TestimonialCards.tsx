'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const testimonials = [
    {
      quote:
        "Studying at the music school has been a transformative experience for me. The instructors are incredibly knowledgeable and supportive, and they've helped me refine my technique and musicality. I've also made lifelong friends through the community events and performances. Highly recommend!",
      name: "Emily S.",
      title: "Music Enthusiast",
    },
    {
      quote:
        "I've been a student at the music school for several years now, and it's been an amazing journey. The personalized curriculum has allowed me to explore various genres and styles, and I've grown so much as a musician. The performance opportunities have also been invaluable in building my confidence on stage. Truly grateful for this school!",
      name: "Johnathan M.",
      title: "Aspiring Musician",
    },
    {
      quote:
        "Enrolling in music lessons at this school was one of the best decisions I've ever made. The instructors are not only talented musicians but also excellent educators who genuinely care about their students' progress. I've learned so much from them and have become a more confident performer. Can't recommend this school enough!",
      name: "Sophia L.",
      title: "Music Lover",
    },
    {
      quote:
        "As a beginner, I was a bit nervous about starting music lessons, but the instructors at this school made me feel comfortable right from the start. They're patient, encouraging, and always willing to go the extra mile to help me improve. I've grown so much as a musician in just a few months, and I'm excited to continue my musical journey here.",
      name: "Daniel R.",
      title: "Novice Musician",
    },
  ];
  

function MusicSchooltestimonials() {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden' >
       <h2 className='text-3xl font-bold text-center m-10 z-10'> Here our harmony: Voices of success </h2> 
       <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
        </div>
       </div>
    </div>
  )
}

export default MusicSchooltestimonials