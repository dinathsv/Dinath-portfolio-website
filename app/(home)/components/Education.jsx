"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { config } from '@/config'
import { HiAcademicCap, HiCalendar } from 'react-icons/hi'

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

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
}

const Education = () => {
    const education = config.education || []

    if (!education || education.length === 0) {
        return null
    }

    return (
        <section className="pt-8 pb-24" id="education">
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
                            <HiAcademicCap className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Educational Background
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                Education
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                My academic journey and professional certifications
                            </p>
                        </motion.div>
                    </div>

                    <div className="max-w-7xl mx-auto relative px-4 md:px-8">
                        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-[1.5px] bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent -translate-x-1/2 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                        
                        <div className="md:hidden absolute left-[31px] top-8 bottom-8 w-[1.5px] bg-gradient-to-b from-blue-500/40 via-blue-400/20 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.4)]" />

                        <motion.div
                            variants={containerAnimation}
                            className="space-y-12"
                        >
                            {education.map((edu, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className={`relative flex flex-col md:flex-row justify-between items-start w-full group ${!isLeft ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 rounded-full bg-zinc-950/50 backdrop-blur-md border border-zinc-800 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110">
                                        <HiAcademicCap className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                                    </div>

                                    <div className={`w-full md:w-[47%] pl-16 md:pl-0 ${isLeft ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                                        <div className="bg-zinc-950/20 backdrop-blur-none border border-transparent rounded-2xl p-6 md:p-8 hover:bg-zinc-900/20 transition-all duration-300 relative overflow-hidden group-hover:border-zinc-800/50">
                                            
                                            <div className="relative z-10">
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-white mb-1">
                                                            {edu.degree}
                                                        </h3>
                                                        <p className="text-primary/80 font-medium">
                                                            {edu.institution}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-wrap items-center gap-2 text-sm">
                                                        <div className="flex items-center gap-2 text-white/70">
                                                            <HiCalendar className="w-4 h-4" />
                                                            <span>{edu.period}</span>
                                                        </div>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                                            edu.status === 'Pursuing'
                                                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                                : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                                        }`}>
                                                            {edu.status}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-white/60 mb-4">
                                                    <span>📚 {edu.field}</span>
                                                    {edu.grade && (
                                                        <>
                                                            <span className="hidden sm:block">•</span>
                                                            <span className="text-amber-400">Grade: {edu.grade}</span>
                                                        </>
                                                    )}
                                                </div>

                                                {edu.description && (
                                                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                                                        {edu.description}
                                                    </p>
                                                )}

                                                {edu.activities && edu.activities.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                                        {edu.activities.map((activity, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20"
                                                            >
                                                                {activity}
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
    )
}

export default Education

