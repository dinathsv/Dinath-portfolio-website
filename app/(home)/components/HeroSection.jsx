/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiDownload } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';

const leftLines = [
  { left: '10%', duration: 3, delay: 0 },
  { left: '30%', duration: 4.5, delay: 1.2 },
  { left: '50%', duration: 2.5, delay: 0.5 },
  { left: '70%', duration: 4, delay: 2 },
  { left: '90%', duration: 3.5, delay: 0.8 },
];

const rightLines = [
  { left: '10%', duration: 3.2, delay: 0.3 },
  { left: '30%', duration: 4, delay: 1.5 },
  { left: '50%', duration: 2.8, delay: 0.1 },
  { left: '70%', duration: 3.6, delay: 1.8 },
  { left: '90%', duration: 4.2, delay: 0.9 },
];

const MatrixRain = ({ linesData, isLeft }) => {
  return (
    <div className={`absolute top-0 bottom-0 ${isLeft ? 'left-2 md:left-8' : 'right-2 md:right-8'} w-16 md:w-32 pointer-events-none z-0 overflow-hidden`}
      style={{
        maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
      }}
    >
      {linesData.map((line, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] md:w-[2px] h-[150px] md:h-[200px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent"
          style={{
            left: line.left,
            top: '-250px'
          }}
          animate={{
            y: ['0vh', '120vh']
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "linear",
            delay: line.delay
          }}
        />
      ))}
    </div>
  );
};

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
      <MatrixRain linesData={leftLines} isLeft={true} />
      <MatrixRain linesData={rightLines} isLeft={false} />

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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center justify-between w-full max-w-7xl mx-auto relative"
          >
            <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full max-w-2xl mx-auto lg:mx-0">
              <motion.div
                variants={itemAnimation}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 shadow-sm"
              >
                <span className="text-xs font-medium tracking-wide text-zinc-400">&lt;/&gt; Welcome to my portfolio</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  variants={itemAnimation}
                  className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-tight whitespace-normal lg:whitespace-nowrap"
                >
                  Hi, I'm {config.developer.name}
                </motion.h1>
                <motion.div variants={itemAnimation} className="pt-1">
                  <h2 className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium tracking-wide text-sm sm:text-base">
                    Aspiring Data Scientist
                  </h2>
                </motion.div>
              </div>

              <motion.p
                variants={itemAnimation}
                className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed mx-auto md:mx-0"
              >
               Passionate about transforming data into actionable insights. Specializing in <span className="font-semibold text-zinc-200">machine learning</span>, <span className="font-semibold text-zinc-200">statistical analysis</span>, and <span className="font-semibold text-zinc-200">data visualization</span>. Building intelligent solutions that drive decision-making.
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

        <motion.div
          variants={itemAnimation}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] pointer-events-none" />

          <div className="relative w-full max-w-[320px] lg:max-w-[400px] aspect-[4/5] flex items-end justify-center mx-auto lg:mx-0 z-10 group">
            
            <div 
              className="relative w-full h-full z-10"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            >
               <Image 
                 src="/Dinath.png" 
                 alt={config.developer.name}
                 fill
                 className="object-cover object-top opacity-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                 priority
               />
            </div>
          </div>
        </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;