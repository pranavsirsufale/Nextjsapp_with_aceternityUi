"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: "Expert Music Instruction",
      description:
        "Receive expert guidance from our team of experienced music instructors. Whether you're a beginner or advanced musician, our instructors tailor lessons to your skill level and musical interests. From mastering technique to exploring music theory, we're here to help you achieve your musical goals.",
    },
    {
      title: "Interactive Learning Environment",
      description:
        "Immerse yourself in an interactive learning environment designed to enhance your musical journey. Our classrooms are equipped with state-of-the-art technology and instruments, fostering creativity and collaboration among students. Engage in hands-on activities, group discussions, and live performances to deepen your understanding and appreciation of music.",
    },
    {
      title: "Performance Opportunities",
      description:
        "Showcase your talent and gain confidence through our performance opportunities. Whether it's a recital, ensemble performance, or community event, we provide platforms for you to share your music with others. Develop stage presence, refine your performance skills, and experience the thrill of performing live.",
    },
    {
      title: "Personalized Curriculum",
      description:
        "Experience a personalized curriculum tailored to your musical interests and aspirations. Our instructors work closely with you to create a customized learning plan that aligns with your goals and preferences. Whether you're interested in classical, jazz, rock, or pop music, we adapt our curriculum to suit your individual needs.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Practice and learn in our state-of-the-art facilities equipped with top-notch equipment and resources. Our studios, practice rooms, and performance spaces are designed to optimize your learning experience and inspire creativity. Enjoy access to high-quality instruments, recording equipment, and soundproofing to ensure a professional environment for your musical journey.",
    },
    {
      title: "Community Engagement",
      description:
        "Become part of a vibrant musical community where you can connect with fellow students, instructors, and music enthusiasts. Engage in workshops, masterclasses, and jam sessions to expand your musical horizons and forge meaningful relationships. Whether you're collaborating on projects or attending events, our community provides endless opportunities for growth and inspiration.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Enjoy the flexibility of scheduling lessons and activities that fit your busy lifestyle. We offer a range of scheduling options to accommodate students of all ages and commitments. Whether you prefer daytime, evening, or weekend lessons, we strive to make learning music convenient and accessible for you. With our flexible scheduling, you can pursue your passion for music without compromising on your other responsibilities.",
    },
    {
      title: "Comprehensive Music Education",
      description:
        "Gain a comprehensive music education that goes beyond technical skills to encompass music history, composition, and performance etiquette. Our curriculum is designed to foster well-rounded musicians who understand the cultural and historical context of music. Explore different genres, styles, and traditions as you develop a deeper appreciation for the art of music.",
    },
  ];
  


function WhyChooseUs() {
  return (
    <div className='w-full'>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs