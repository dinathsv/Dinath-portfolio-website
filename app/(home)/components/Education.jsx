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

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={containerAnimation}
                            className="space-y-8"
                        >
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="relative"
                                >
                                    <div className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-xl bg-black border border-white/30 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                                <HiAcademicCap className="w-6 h-6 text-white" />
                                            </div>
                                            {index !== education.length - 1 && (
                                                <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-4" />
                                            )}
                                        </div>

                                        <div className="flex-1 pb-8">
                                            <div className="bg-black border border-white/30 rounded-2xl p-6 backdrop-blur-md shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_10px_rgba(255,255,255,0.05)] hover:border-white/60 transition-all duration-300 group relative overflow-hidden hover:shadow-[0_4px_6px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)]">
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                                                </div>
                                                
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                                </div>
                                                
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
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education

