/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { HiCode, HiArrowRight, HiDownload } from 'react-icons/hi';
import { config } from '@/config';
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundPresets } from '@/components/ui/background-effects';
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
    <section className="min-h-[calc(100vh-140px)] flex items-center justify-center relative">
      <BackgroundPresets.Minimal />

      <div className="container mx-auto px-6">
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative"
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <motion.div
            variants={itemAnimation}
            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
          >
            <HiCode className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>



          <div className="space-y-4">
            <motion.h1
              variants={itemAnimation}
              className="text-4xl md:text-7xl font-bold tracking-tight"
            >
              <motion.span
                variants={textAnimation}
                className="block text-primary mb-2"
              >
                Hi, I'm {config.developer.name}
              </motion.span>
              <motion.span
                variants={textAnimation}
                className="block text-white/60 text-2xl md:text-4xl"
              >
                Aspiring Data Scientist
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemAnimation}
            className="text-base sm:text-md text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
           Passionate about transforming data into actionable insights. Specializing in machine learning, statistical analysis, and data visualization. Building intelligent solutions that drive decision-making.
          </motion.p>

          <motion.div
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-6"
          >
            <Link href={"/projects"}>
              <Button
                variant="expandIcon"
                Icon={HiArrowRight}
                iconPlacement="right"
                className="rounded-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 font-semibold"
              >
                View Projects
              </Button>
            </Link>

            <Button
              asChild
              variant="ringHover"
              Icon={HiDownload}
              iconPlacement="left"
              className="rounded-full px-6 py-6 text-base font-semibold"
            >
              <a
                href="/Dinath_Sivaranjan_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download my resume here👆
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Profile Image Container */}
        <motion.div
          variants={itemAnimation}
          className="flex-1 flex justify-center md:justify-end w-full"
        >
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mx-auto md:mx-0"
            style={{
              maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
            }}
          >
            <Image 
              src="/Dinath.jpg" 
              alt={config.developer.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

     

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -z-10 inset-0 pointer-events-none"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
        <SkillsShowcase />
      </div>
    </section>
  );
};

export default HeroSection;