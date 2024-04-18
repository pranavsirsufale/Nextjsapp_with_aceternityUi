'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinars() {

    const featuredWebinars = [
        {
          title: "Mastering Machine Learning",
          description: "Join us as we dive deep into the world of machine learning, covering advanced techniques and practical applications. Whether you're a novice or an experienced practitioner, this webinar series will equip you with the knowledge and skills needed to excel in the field of artificial intelligence.",
          slug: "mastering-machine-learning",
          isFeatured: true
        },
        {
          title: "The Art of Negotiation",
          description: "Negotiation is a crucial skill in both personal and professional settings. In this comprehensive webinar series, we'll explore the art and science of negotiation, from understanding negotiation styles to mastering persuasion techniques. Whether you're negotiating a business deal or resolving conflicts in your personal life, this webinar will provide you with valuable insights and strategies.",
          slug: "the-art-of-negotiation",
          isFeatured: true
        },
        {
          title: "Effective Time Management",
          description: "Time is our most precious resource, yet many of us struggle to manage it effectively. In this practical webinar series, you'll learn proven methods for maximizing productivity and minimizing time-wasting activities. From prioritization techniques to task delegation strategies, we'll cover everything you need to know to take control of your time and achieve your goals.",
          slug: "effective-time-management",
          isFeatured: false
        },
        {
          title: "Digital Marketing Strategies for Success",
          description: "In today's digital age, having a strong online presence is essential for business success. In this dynamic webinar series, we'll explore the latest trends and best practices in digital marketing. From social media advertising to search engine optimization, you'll learn how to attract and engage your target audience effectively. Whether you're a small business owner or a marketing professional, this webinar will help you stay ahead of the competition.",
          slug: "digital-marketing-strategies",
          isFeatured: true
        },
        {
          title: "Digital Marketing Strategies for Success",
          description: "In today's digital age, having a strong online presence is essential for business success. In this dynamic webinar series, we'll explore the latest trends and best practices in digital marketing. From social media advertising to search engine optimization, you'll learn how to attract and engage your target audience effectively. Whether you're a small business owner or a marketing professional, this webinar will help you stay ahead of the competition.",
          slug: "digital-marketing-strategies",
          isFeatured: true
        },
        {
          title: "Digital Marketing Strategies for Success",
          description: "In today's digital age, having a strong online presence is essential for business success. In this dynamic webinar series, we'll explore the latest trends and best practices in digital marketing. From social media advertising to search engine optimization, you'll learn how to attract and engage your target audience effectively. Whether you're a small business owner or a marketing professional, this webinar will help you stay ahead of the competition.",
          slug: "digital-marketing-strategies",
          isFeatured: true
        },
        // Add more featured webinars here if needed
      ];
      

  return (
    <div
    className='p-12 bg-gray-900'
    >
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-green-400'>FEATURED WEBINARS</h2>
                <p className='text-3xl font-bold sm:text-4xl'> ENHANCE YOUR MUSICAL JOURNEY </p>
            </div>
            <div className='mt-10'>
            <HoverEffect items={featuredWebinars.map(webinar =>(
                {
                    titile : webinar.title ,
                    description : webinar.description,
                    link : '/'
                }
            ))} />
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='px-4 py-2 rounded border'
                 >
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars