"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
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
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    const experiences = config.experiences || [];

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
        <section className="pt-24 pb-8" id="experience">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <div className="max-w-2xl mx-auto text-center space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <HiBriefcase className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Professional Experience
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Work Experience
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                A journey through my professional career and key achievements
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-[1400px] w-full mx-auto relative px-4 lg:px-12">
                        {/* Mobile straight line */}
                        <div className="md:hidden absolute left-[31px] top-8 bottom-8 w-[1.5px] bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.4)] z-0" />

                        <motion.div
                            variants={containerAnimation}
                            className="space-y-12"
                        >
                            {experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className={`relative flex flex-col md:flex-row justify-between items-start w-full group ${!isLeft ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* True S-Curve Line Segment for Desktop */}
                                    {index !== experiences.length - 1 && (
                                        <div className={`hidden md:block absolute top-[16px] -bottom-[64px] w-[50%] border-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.4)] z-0 pointer-events-none ${
                                            isLeft 
                                                ? 'left-1/2 border-r-[1.5px] border-t-[1.5px] border-b-[1.5px] rounded-r-[100px]' 
                                                : 'right-1/2 border-l-[1.5px] border-t-[1.5px] border-b-[1.5px] rounded-l-[100px]'
                                        }`} />
                                    )}

                                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-zinc-950/50 backdrop-blur-md border border-zinc-800 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110">
                                        <HiBriefcase className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                                    </div>

                                    <div className={`w-full md:w-[47%] pl-16 md:pl-0 ${isLeft ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                                        <div className="bg-zinc-950/20 backdrop-blur-none border border-transparent rounded-[2.5rem] p-8 md:p-10 hover:bg-zinc-900/20 transition-all duration-300 relative overflow-hidden group-hover:border-zinc-800/50 z-10">
                                            
                                            <div className="relative z-10">
                                                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-3 mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-1">
                                                            {exp.position}
                                                        </h3>
                                                        <p className="text-primary/80 font-medium">
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-white/70">
                                                        <HiCalendar className="w-4 h-4" />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                </div>

                                                {exp.location && (
                                                    <p className="text-sm text-white/60 mb-4">
                                                         {exp.location}
                                                    </p>
                                                )}

                                                {exp.description && (
                                                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                                                        {exp.description}
                                                    </p>
                                                )}

                                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                                    <ul className="space-y-2">
                                                        {exp.responsibilities.map((responsibility, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                                                <span className="text-white/40 mt-1.5">▸</span>
                                                                <span>{responsibility}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {exp.technologies && exp.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                                        {exp.technologies.map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:w-[47%]" />
                                </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;

