"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className='flex flex-col px-[96px] py-[96px] justify-center items-center gap-[48px]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='flex flex-col items-center justify-center gap-[4px]'
      >
        <h6 className='text-[#A1A1AA] text-[14px] font-normal'>
          #1 Marketplace for Landing Pages
        </h6>
        <div className='flex flex-col items-center justify-center gap-[16px]'>
          <h1
            id="hero-title"
            className='text-[64px] sm:text-[72px] leading-[80px] sm:leading-[96px] text-center font-semibold'
          >
            Your One-Stop Marketplace for Premium Landing Pages
          </h1>
          <p className='text-[18px] sm:text-[20px] max-w-[946px] text-center font-normal text-[#52525B]'>
            Discover expertly crafted landing pages from trusted designers, all in one place. Simplify your search, find the perfect design, and launch your business with confidence.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className='flex flex-row items-center gap-[24px] justify-center'
      >
        <button
          className='w-[150px] px-[16px] py-[14px] flex items-center justify-center text-base font-medium bg-[#09090B] text-[#FAFAFA] rounded-[10px] transition-all duration-300 hover:bg-[#18181B] hover:scale-105'
        >
          Check Store
        </button>
        <button
          className='px-[16px] py-[14px] flex items-center justify-center text-base font-medium border border-[#52525B] text-[#27272A] rounded-[10px] transition-all duration-300 hover:border-[#18181B] hover:text-[#18181B] hover:scale-105'
        >
          Custom Request
        </button>
      </motion.div>
    </section>
  )
}