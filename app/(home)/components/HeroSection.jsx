/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiDownload } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative bg-[#0B0B0C] overflow-hidden font-sans">
      {/* Subtle Dot Mesh Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="container mx-auto px-6 z-10 relative">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 relative"
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <motion.div
                variants={itemAnimation}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-xs font-medium tracking-wide text-zinc-400">&lt;/&gt; Welcome to my portfolio</span>
              </motion.div>

          <div className="space-y-3">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-tight"
            >
              Hi, I'm {config.developer.name}
            </motion.h1>
            <motion.h2
              variants={itemAnimation}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-zinc-400/90 tracking-wide"
            >
              Aspiring Data Scientist
            </motion.h2>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-base sm:text-lg text-[#A1A1AA] leading-[1.6] max-w-2xl mx-auto md:mx-0"
          >
           Passionate about transforming data into actionable insights. Specializing in machine learning, statistical analysis, and data visualization. Building intelligent solutions that drive decision-making.
          </motion.p>

          <motion.div
            variants={itemAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
          >
            <Link href={"/projects"}>
              <button
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-sm font-semibold transition-all duration-300"
              >
                View Projects
              </button>
            </Link>

            <a
              href="/Dinath_Sivaranjan_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-white text-sm font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Profile Image Container */}
        <motion.div
          variants={itemAnimation}
          className="flex-1 flex justify-center md:justify-end w-full relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-white/[0.03] blur-[80px] rounded-full pointer-events-none" />

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mx-auto md:mx-0 z-10 bg-[#121214]">
            <Image 
              src="/Dinath.jpg" 
              alt={config.developer.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;