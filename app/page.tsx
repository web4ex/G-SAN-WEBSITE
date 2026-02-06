"use client"

import { Mail, Phone, MapPin, CheckCircle, Wrench, Thermometer, Wind, ShieldCheck, Clock, Droplets, ChevronDown, Award, PencilRuler, Bath, Compass, RefreshCw } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const ProjectCard = ({ project }: { project: any }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % project.images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [project.images]);

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden snap-center group cursor-pointer border border-zinc-100 shadow-xl"
        >
            {project.images ? (
                project.images.map((media: string, i: number) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {media.endsWith('.mp4') ? (
                            <video
                                src={media}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <Image
                                src={media}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        )}
                    </div>
                ))
            ) : (
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity z-10"></div>

            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-full mb-4">
                    <Award className="w-3 h-3" />
                    {project.cat}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                {project.desc && (
                    <p className="text-gray-300 text-base mb-4 line-clamp-2">{project.desc}</p>
                )}
                <div className="flex items-center gap-2 text-red-500 text-sm font-bold tracking-wide uppercase">
                    <MapPin className="w-4 h-4" />
                    {project.loc}
                </div>
            </div>

            {/* Slide Indicators */}
            {project.images && project.images.length > 1 && (
                <div className="absolute top-4 right-4 flex gap-1 z-20">
                    {project.images.map((_: any, i: number) => (
                        <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-300 shadow-sm ${i === index ? 'w-6 bg-red-600' : 'w-2 bg-white/50'}`}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default function Home() {
    const { scrollY } = useScroll();
    const [openJob, setOpenJob] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-white font-sans text-black selection:bg-red-600 selection:text-white overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 py-3 px-6 md:px-12 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="relative z-10 w-28 md:w-36">
                        {/* Logo - Transparent PNG, smaller size */}
                        <Image src="/logo-header.png" alt="G-San Logo" width={140} height={60} className="w-full h-auto object-contain" />
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-white/90 uppercase">
                        <a href="#services" className="hover:text-red-500 transition-colors">Dienstleistungen</a>
                        <a href="#projects" className="hover:text-red-500 transition-colors">Projekte</a>
                        <a href="#team" className="hover:text-red-500 transition-colors">Team</a>
                        <a href="#contact" className="hover:text-red-500 transition-colors">Kontakt</a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION WITH BACKGROUND VIDEO - RED/BLACK THEME */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 grayscale-[0.5]"
                    >
                        <source src="/hero.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Red/Black Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
                </div>

                <div className="relative z-20 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-red-500 font-bold tracking-wider text-xs mb-8 backdrop-blur-md uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            G-San Gebäudetechnik
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white tracking-tight drop-shadow-2xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-white">
                                QUALITÄT
                            </span> <br />
                            IN PERFEKTION.
                        </h1>

                        <p className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-lg drop-shadow-md font-light">
                            Moderne Lösungen für Sanitär, Heizung und Lüftung – Technik auf höchstem Niveau.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                24/7 Notdienst
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#services"
                                className="px-8 py-4 bg-transparent text-white rounded-full font-bold text-lg transition-all border border-white/30 hover:border-white hover:bg-white hover:text-black flex items-center justify-center backdrop-blur-sm"
                            >
                                Lösungen entdecken
                            </motion.a>
                        </div>
                    </motion.div>

                    <div className="hidden md:block"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-20"
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </section>

            {/* Intro Stats Section - Red/Black/White */}
            <section className="relative z-30 -mt-20 pb-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-0 bg-white shadow-2xl rounded-3xl overflow-hidden border-b-4 border-red-600">
                        {[
                            { icon: Clock, title: "Schnell Vor Ort", desc: "Express Notfalldienst in Zürich & Umgebung" },
                            { icon: ShieldCheck, title: "Geprüfte Qualität", desc: "Zertifiziert nach Schweizer Standards" },
                            { icon: CheckCircle, title: "Alles Inklusive", desc: "Transparente Preise, keine versteckten Kosten" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-10 bg-white group hover:bg-zinc-50 transition-colors border-r border-gray-100 last:border-0 relative overflow-hidden"
                            >
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-red-700 transition-colors relative z-10">{item.title}</h3>
                                <p className="text-gray-500 text-base leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services */}
            <section id="services" className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="max-w-2xl">
                            <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4">Unsere Expertise</h4>
                            <h2 className="text-5xl font-black text-black leading-tight">
                                PRÄZISION <span className="text-red-600">.</span> <br />
                                IN JEDEM DETAIL <span className="text-red-600">.</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-lg max-w-md text-right mt-6 md:mt-0">
                            Wir verbinden Funktionalität mit Ästhetik. Für Ergebnisse, die überzeugen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 1. Planung und Umbau */}
                        <div className="relative bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                            {/* Video Background */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/G-SAN 2.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-zinc-50/90 group-hover:bg-zinc-50/60 transition-colors duration-500 z-10"></div>
                            </div>

                            <div className="relative z-20">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-red-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <PencilRuler className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-6 text-black group-hover:text-black/90">Planung und Umbau</h3>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-black font-medium transition-colors">
                                    Von der Planung bis zur Umsetzung: Wir bieten professionelle Lösungen für Neubauten und Umbauprojekte, individuell und zuverlässig.
                                </p>
                            </div>
                        </div>

                        {/* 2. Badezimmersanierung */}
                        <div className="relative bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                            {/* Video Background */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/G-SAN 1.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-zinc-50/90 group-hover:bg-zinc-50/60 transition-colors duration-500 z-10"></div>
                            </div>

                            <div className="relative z-20">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-red-600 shadow-sm group-hover:scale-110 transition-transform">
                                    <Bath className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2 text-black group-hover:text-black/90">Badezimmersanierung</h3>
                                <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-6 group-hover:text-red-700">Sanitär, Heizung und Lüftung</h4>
                                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-black font-medium transition-colors">
                                    Aus alt wird neu: Wir übernehmen sämtliche Arbeiten rund um Sanitär, Heizung und Lüftung bei Ihrer Badezimmersanierung – sauber, termingerecht und fachgerecht.
                                </p>
                            </div>
                        </div>

                        {/* 3. Wasserenthärtung (Large) */}
                        <div className="md:col-span-2 bg-black text-white rounded-3xl overflow-hidden group min-h-[600px] border border-zinc-800 flex flex-col md:flex-row">

                            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                                    <Droplets className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2">Wasserenthärtung &</h3>
                                <h3 className="text-3xl font-bold mb-6 text-red-500">effektiver Kalkschutz</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    Weiches Wasser trägt entscheidend dazu bei, dass Haushaltsgeräte wie Boiler, Kaffeemaschinen sowie Wasch- und Spülmaschinen effizient arbeiten und ihre Lebensdauer deutlich verlängert wird.
                                </p>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                    In enger Zusammenarbeit mit der <span className="text-white font-bold">BWT AQUA AG</span> bieten wir eine professionelle Analyse und fachgerechte Wartung.
                                </p>
                                <p className="text-white font-bold border-l-4 border-red-600 pl-4">
                                    Möchten Sie wissen, wie hart Ihr Wasser ist? Gerne beraten wir Sie individuell.
                                </p>
                            </div>

                            <div className="md:w-1/2 bg-zinc-900/50 p-8 md:p-12 flex flex-col justify-between border-l border-white/5">
                                <div className="mb-8">
                                    <h4 className="font-bold text-xl mb-6 flex items-center gap-2 text-white">
                                        <CheckCircle className="w-5 h-5 text-red-500" /> Ihre Vorteile
                                    </h4>
                                    <ul className="space-y-4 text-zinc-300">
                                        {[
                                            "Effizienter und störungsfreier Betrieb Ihrer Haushaltsgeräte",
                                            "Längere Lebensdauer dank zuverlässigem Kalkschutz",
                                            "Reduzierter Verbrauch von Reinigungs- und Pflegemitteln",
                                            "Weniger Kalkflecken auf Armaturen und Oberflächen",
                                            "Spürbar angenehmeres Haut- und Haargefühl"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></span>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Image positioned below benefits */}
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden mt-auto group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-shadow duration-500">
                                    <Image
                                        src="/bwt-visual.jpg.jpg"
                                        alt="BWT Wasserenthärtung"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 4. Service & Reparaturen */}
                        <div className="md:col-span-2 bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl group">
                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                <div className="order-2 md:order-1">
                                    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                                        <h4 className="font-bold text-xl mb-6 flex items-center gap-2 text-black">
                                            <Wrench className="w-5 h-5 text-red-600" /> Unsere Leistungen
                                        </h4>
                                        <ul className="space-y-4 text-gray-600">
                                            {[
                                                "Schnelle und zuverlässige Hilfe bei Störungen",
                                                "Fachgerechte Wartungs- und Instandhaltungsarbeiten",
                                                "Individuelle Beratung direkt bei Ihnen vor Ort",
                                                "Reparatur- und Servicearbeiten an Anlagen",
                                                "Professionelle Abflussreinigung",
                                                "Boiler-Entkalkung für maximale Effizienz"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-red-100 text-red-600 mt-0.5 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-red-600 shadow-sm">
                                        <Wrench className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-black">Service & Reparaturen</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        Ein reibungslos funktionierendes Sanitär-, Heizungs- und Lüftungssystem ist die Grundlage für Komfort. Sollte es zu einer Störung kommen, reagieren wir schnell und lösungsorientiert.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Unsere erfahrenen Fachkräfte begleiten Sie von der ersten Analyse bis zur nachhaltigen Umsetzung. Durch regelmässige Wartungen lassen sich Ausfälle frühzeitig vermeiden.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Planung S/H/L */}
                        <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl">
                            <Compass className="w-12 h-12 text-red-600 mb-6" />
                            <h3 className="text-2xl font-bold mb-2 text-black">Planung</h3>
                            <h4 className="text-gray-500 font-medium text-sm mb-6 uppercase tracking-wider">Sanitär, Heizung & Lüftung</h4>
                            <p className="text-gray-600 mb-8">
                                Wir planen Ihre Anlagen individuell, effizient und zukunftssicher. Optimale Funktion und Energieersparnis.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Maßgeschneiderte Konzepte",
                                    "Effizienter Energieeinsatz",
                                    "Langlebige Anlagen",
                                    "Transparente Kosten"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 6. Wartung S/H/L */}
                        <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 hover:border-red-600/30 transition-all duration-300 hover:shadow-xl">
                            <RefreshCw className="w-12 h-12 text-red-600 mb-6" />
                            <h3 className="text-2xl font-bold mb-2 text-black">Wartung</h3>
                            <h4 className="text-gray-500 font-medium text-sm mb-6 uppercase tracking-wider">Sanitär, Heizung & Lüftung</h4>
                            <p className="text-gray-600 mb-8">
                                Mit unseren regelmässigen Wartungen sorgen wir dafür, dass Ihre Anlagen zuverlässig und effizient arbeiten.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Maximale Zuverlässigkeit",
                                    "Vorbeugung von Störungen",
                                    "Längere Lebensdauer",
                                    "Rundum-sorglos-Service"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 7. Lüftung */}
                        <div className="bg-black text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black z-0"></div>
                            <div className="relative z-10">
                                <Wind className="w-12 h-12 text-red-500 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Lüftungssysteme</h3>
                                <p className="text-zinc-400 mb-6">
                                    Frische Luft, gesundes Raumklima. Wir planen, installieren und warten Ihre Lüftungsanlagen professionell.
                                </p>
                                <a href="#contact" className="text-red-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors flex items-center gap-2">
                                    Kontaktieren <ChevronDown className="w-4 h-4 -rotate-90" />
                                </a>
                            </div>
                        </div>

                        {/* 8. Heizung */}
                        <div className="bg-red-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:bg-red-700 transition-colors">
                            <div className="relative z-10">
                                <Thermometer className="w-12 h-12 text-white mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Heizung</h3>
                                <p className="text-red-100 mb-6 font-medium">
                                    Wärme, Komfort und Effizienz. Wir sorgen dafür, dass Ihre Heizung effizient und störungsfrei arbeitet.
                                </p>
                                <a href="#contact" className="text-white font-bold uppercase text-sm tracking-wider hover:text-black transition-colors flex items-center gap-2">
                                    Lösung finden <ChevronDown className="w-4 h-4 -rotate-90" />
                                </a>
                            </div>
                        </div>

                        {/* 9. 24/7 Notdienst */}
                        <div className="md:col-span-2 bg-zinc-950 text-white rounded-3xl p-8 md:p-12 border-2 border-red-600 relative overflow-hidden group shadow-2xl">
                            {/* Pulse Effect Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600 rounded-full text-red-500 font-bold tracking-wider text-xs mb-6 uppercase">
                                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                                        Emergency
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                        24/7 NOTDIENST <br />
                                        <span className="text-red-600">WIR SIND SOFORT FÜR SIE DA</span>
                                    </h3>
                                    <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                                        Probleme mit Sanitär, Heizung oder Lüftung warten nicht – und wir auch nicht. Unser 24-Stunden-Notdienst steht Ihnen rund um die Uhr, 7 Tage die Woche zur Verfügung, um Störungen schnell, zuverlässig und professionell zu beheben.
                                    </p>
                                    <p className="text-white font-medium text-lg">
                                        Schnelle Hilfe, kompetente Techniker und sofortige Lösungen – rufen Sie uns jetzt an!
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="tel:+41447683043"
                                        className="group relative flex flex-col items-center justify-center w-64 h-64 bg-red-600 rounded-full border-4 border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all hover:shadow-[0_0_80px_rgba(220,38,38,0.7)] hover:bg-red-700"
                                    >
                                        <Phone className="w-16 h-16 text-white mb-2" />
                                        <span className="text-2xl font-black text-white text-center">JETZT<br />ANRUFEN</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4">Einblicke</h4>
                        <h2 className="text-5xl font-black text-black leading-tight">
                            UNSERE <span className="text-red-600">PROJEKTE</span>
                        </h2>
                    </div>

                    <div className="flex gap-4 mt-8 md:mt-0">
                        {/* Custom Navigation Buttons usually go here, using native scroll for now for simplicity and smoothness */}
                    </div>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {[
                        {
                            title: "EFH Oberligweg",
                            loc: "Nürensdorf",
                            images: ["/project-nuerensdorf.jpg.jpg", "/project-nuerensdorf.mp4.mp4"],
                            cat: "Sanitär & Heizung",
                            desc: "Sanitär- und Heizungsinstallationen"
                        },
                        {
                            title: "Hotel Ibis Adliswil",
                            loc: "Adliswil",
                            images: ["/project-ibis.jpg.jpg"],
                            cat: "Sanitär",
                            desc: "23 Zimmer Nasszellensanierung"
                        },
                        {
                            title: "Im Römerquartier",
                            loc: "Zofingen",
                            images: ["/project-roemerquartier.jpg.jpg", "/project-roemerquartier-2.jpg.jpg"],
                            cat: "Sanitär & Heizung",
                            desc: "6 Wohnungen Sanitär- und Heizungssanierung"
                        },
                        {
                            title: "EFH Frickenstrasse 25",
                            loc: "Dübendorf",
                            images: ["/project-frickenstrasse.jpg.jpg"],
                            cat: "Sanitär & Heizung",
                            desc: "Nasszellen Sanierung und Kellerverteilung"
                        },
                        {
                            title: "Whg. Dachgeschoss Neudorfstrasse 9",
                            loc: "Wädenswil",
                            images: [
                                "/project-waedenswil-1.jpg.jpg",
                                "/project-waedenswil-2.jpg.jpg",
                                "/project-waedenswil-3.jpg.jpg",
                                "/project-waedenswil-4.jpg.jpg",
                                "/project-waedenswil-5.jpg.jpg"
                            ],
                            cat: "Sanitär & Heizung",
                            desc: "Sanitär und Heizung Sanierung"
                        },
                        {
                            title: "Haus im Falken Stadelhofen",
                            loc: "Zürich",
                            images: ["/project-falken-stadelhofen.jpg.jpg"],
                            cat: "Sanitär Neubau",
                            desc: "Mieterausbau 3. Obergeschoss Zahnarztpraxis"
                        },
                        {
                            title: "Landis+Gyr-Strasse 1",
                            loc: "Zug",
                            images: ["/project-landis-gyr.jpg.jpg"],
                            cat: "Sanitär & Heizung",
                            desc: "Komplette Nasszellensanierung"
                        },
                        {
                            title: "WHG - Peteracher 2",
                            loc: "Zumikon",
                            images: ["/project-peteracher.jpg.jpg"],
                            cat: "Sanitär & Heizung",
                            desc: "Nasszellensanierung"
                        },
                        {
                            title: "Klosterstrasse",
                            loc: "Bergdietikon",
                            images: ["/project-klosterstrasse.jpg.jpg"],
                            cat: "Sanitär & Lüftung",
                            desc: "Neubau - Aktuell"
                        },
                        {
                            title: "3 Eigentumswohnungen",
                            loc: "Thalwil",
                            images: [
                                "/project-thalwil-1.jpg.jpg",
                                "/project-thalwil-2.jpg.jpg",
                                "/project-thalwil-3.jpg.jpg",
                                "/project-thalwil-4.jpg.jpg",
                                "/project-thalwil-5.jpg.jpg"
                            ],
                            cat: "Sanitär Neubau",
                            desc: "Neubauprojekt"
                        },
                        {
                            title: "Brauerstrasse 29",
                            loc: "Zürich",
                            images: ["/project-brauerstrasse.jpg"],
                            cat: "Sanitär",
                            desc: "Ladenumbau"
                        },
                        // Placeholder for next projects
                    ].map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-24 bg-black text-white relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image src="/team-collaboration.jpg" alt="Team Work" fill className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-black mb-20 text-center">FÜHRUNGSTEAM</h2>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Ymron Gashi */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-zinc-900 ring-1 ring-gray-900/5 rounded-lg leading-none p-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-red-600 shadow-xl">
                                        <Image src="/team-member-2.jpg" alt="Ymron Gashi" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Ymron Gashi</h3>
                                        <p className="text-red-500 font-bold tracking-widest text-xs uppercase mt-1">Geschäftsführer und Inhaber</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Als eidg. dipl. Projektleiter Gebäudetechnik treibt er Innovation und Nachhaltigkeit in der Gebäudetechnik voran. Seine Mission: smarte, effiziente Systeme, die heute schon die Gebäude von morgen gestalten.
                                </p>
                                <a href="mailto:info@g-san.ch" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors font-bold uppercase text-sm">
                                    <Mail className="w-4 h-4" /> Kontakt
                                </a>
                            </div>
                        </div>

                        {/* Luis Almeida */}
                        <div className="relative group mt-12 md:mt-0">
                            <div className="relative bg-white text-black ring-1 ring-gray-900/5 rounded-lg leading-none p-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-200 shadow-xl">
                                        <Image src="/team-member-1.jpg" alt="Luis Almeida" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Luis Almeida</h3>
                                        <p className="text-red-600 font-bold tracking-widest text-xs uppercase mt-1">Montageleiter</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Der Mann für die Praxis. Mit jahrelanger Erfahrung und technischer Präzision sorgt er dafür,
                                    dass jedes Projekt perfekt umgesetzt wird.
                                </p>
                                <a href="mailto:luis.almeida@g-san.ch" className="flex items-center gap-2 text-black hover:text-red-600 transition-colors font-bold uppercase text-sm">
                                    <Mail className="w-4 h-4" /> Kontakt
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="jobs" className="py-24 bg-zinc-50 border-t border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4">Karriere</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6">
                            WIR SUCHEN <span className="text-red-600">DICH</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Werde Teil unseres Teams und gestalte die Zukunft der Gebäudetechnik mit.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Servicemonteur Sanitär (m/w)",
                                content: (
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Deine Aufgaben</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                <li>Selbständiges Ausführen von Reparaturen und Wartungen</li>
                                                <li>Kleinere Umbauten für unsere Kundschaft</li>
                                                <li>Periodischer Pikettdienst</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Dein Profil</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                <li>Du hast eine erfolgreich abgeschlossene Ausbildung als Sanitärinstallateur</li>
                                                <li>Kenntnis im Umgang mit elektronischen Geräten (Tablet)</li>
                                                <li>Deine Arbeitsweise ist vorausschauend und du arbeitest selbständig</li>
                                                <li>Du bist körperlich und psychisch für Alleinarbeit geeignet</li>
                                                <li>Du bist im Besitz des Führerscheins Kat. B</li>
                                                <li>Du hast einige Jahre Berufserfahrung</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Was wir dir bieten</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                <li>Einen sicheren Arbeitsplatz in einem Familienbetrieb mit persönlichem Umfeld und respektvollen Umgang</li>
                                                <li>Servicefahrzeug, Werkstatt und Servicedisposition auf dem modernsten Stand der Technik</li>
                                                <li>Selbständige Arbeit mit Kompetenzen und Verantwortung</li>
                                                <li>Weiterbildungs- und Entwicklungsmöglichkeiten</li>
                                                <li>Ein kollegiales Team, das dich unterstützt</li>
                                            </ul>
                                        </div>
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="font-bold text-lg mb-4">Wir freuen uns darauf, dich kennenzulernen!</p>
                                            <a href="mailto:info@g-san.ch" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-black transition-colors">
                                                <Mail className="w-4 h-4" /> Jetzt Bewerben
                                            </a>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "Sanitärinstallateur/in für Kleinbauten/Umbauten",
                                content: (
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Deine Aufgaben</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                <li>Selbstständige Ausführung von Montage- und Installationsarbeiten bei Klein- und Umbauprojekten</li>
                                                <li>Materialbeschaffung und Koordination mit anderen Arbeitsgattungen</li>
                                                <li>Einregulierungs- und Inbetriebsetzungsarbeiten</li>
                                                <li>Mithilfe bei der Ausbildung von Lernenden</li>
                                                <li>Mithilfe im Kunden- und Pikettdienst</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Dein Profil</h4>
                                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                                <li>Du hast eine erfolgreich abgeschlossene Ausbildung als Sanitärinstallateur</li>
                                                <li>Freude am Kundenkontakt und gepflegtes Auftreten</li>
                                                <li>Führerschein Kat. B</li>
                                                <li>Selbstständige und saubere Arbeitsweise</li>
                                                <li>Teamfähigkeit und Motivation</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 mb-2">Was wir bieten</h4>
                                            <p className="text-gray-700">
                                                Attraktive Anstellungsbedingungen, ein motiviertes Team und spannende Projekte in der Region.
                                            </p>
                                        </div>
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="font-bold text-lg mb-4">Interessiert?</p>
                                            <a href="mailto:info@g-san.ch" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-black transition-colors">
                                                <Mail className="w-4 h-4" /> Jetzt Bewerben
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        ].map((job, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                                <button
                                    onClick={() => setOpenJob(openJob === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-zinc-50 transition-colors"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold">{job.title}</h3>
                                    <div className={`p-2 rounded-full bg-zinc-100 transition-transform duration-300 ${openJob === index ? 'rotate-180 bg-red-100 text-red-600' : ''}`}>
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openJob === index ? "auto" : 0, opacity: openJob === index ? 1 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-zinc-100">
                                        {job.content}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Carousel Section */}
            <section className="py-20 bg-white border-t border-zinc-100 overflow-hidden">
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-400">Unsere Starken Partner</h3>
                </div>

                <div className="relative flex overflow-x-hidden">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap min-w-full"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Duplicate the array to ensure seamless looping */
                            [
                                { src: "/partner-bringhen.png", alt: "Bringhen Group" },
                                { src: "/partner-baubedarf.png", alt: "Baubedarf" },
                                { src: "/partner-briner.png", alt: "Briner" },
                                { src: "/partner-dornbracht.png", alt: "Dornbracht" },
                                { src: "/partner-hansgrohe.png", alt: "Hansgrohe" },
                                { src: "/partner-hug.jpg", alt: "Hug Baustoffe AG" },
                                { src: "/partner-meiertobler.png", alt: "Meier Tobler" },
                                { src: "/partner-kwc.png", alt: "KWC" },
                                { src: "/partner-neovac.png", alt: "NeoVac" },
                                { src: "/partner-marmobisa.png", alt: "Marmobisa" },
                                { src: "/partner-richner.png", alt: "Richner" },
                                { src: "/partner-spaeter.png", alt: "Spaeter" },
                                { src: "/partner-sanitas-troesch.png", alt: "Sanitas Troesch" },
                                { src: "/partner-pe-fabrikation.jpg", alt: "PE Fabrikation" },
                                { src: "/partner-pestalozzi.jpg", alt: "Pestalozzi" },
                                { src: "/partner-vola.png", alt: "Vola" },
                                { src: "/partner-vorfaplast.png", alt: "Vorfaplast" },
                                { src: "/partner-zehnder.png", alt: "Zehnder" },
                                // Duplicates
                                { src: "/partner-bringhen.png", alt: "Bringhen Group" },
                                { src: "/partner-baubedarf.png", alt: "Baubedarf" },
                                { src: "/partner-briner.png", alt: "Briner" },
                                { src: "/partner-dornbracht.png", alt: "Dornbracht" },
                                { src: "/partner-hansgrohe.png", alt: "Hansgrohe" },
                                { src: "/partner-hug.jpg", alt: "Hug Baustoffe AG" },
                                { src: "/partner-meiertobler.png", alt: "Meier Tobler" },
                                { src: "/partner-kwc.png", alt: "KWC" },
                                { src: "/partner-neovac.png", alt: "NeoVac" },
                                { src: "/partner-marmobisa.png", alt: "Marmobisa" },
                                { src: "/partner-richner.png", alt: "Richner" },
                                { src: "/partner-spaeter.png", alt: "Spaeter" },
                                { src: "/partner-sanitas-troesch.png", alt: "Sanitas Troesch" },
                                { src: "/partner-pe-fabrikation.jpg", alt: "PE Fabrikation" },
                                { src: "/partner-pestalozzi.jpg", alt: "Pestalozzi" },
                                { src: "/partner-vola.png", alt: "Vola" },
                                { src: "/partner-vorfaplast.png", alt: "Vorfaplast" },
                                { src: "/partner-zehnder.png", alt: "Zehnder" },
                            ].map((partner, index) => (
                                <div key={index} className="flex-shrink-0 w-48 h-24 relative opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                                    <Image
                                        src={partner.src}
                                        alt={partner.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                    </motion.div>

                    {/* Second copy for gapless loop (if needed by screen width, but doubling above usually covers standard screens. If very wide screen, might need more. The motion div loops -50%, so we actually need enough content width.)
                        The logic above moves the *entire* container. For infinite marquee, it's better to have two identical 'flex' containers sliding.
                    */}
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-zinc-950 text-white py-20 border-t-4 border-red-600">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-5 gap-8 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            {/* Footer Logo - Transparent */}
                            <div className="mb-6">
                                <Image src="/logo-header.png" alt="G-San Logo" width={140} height={60} className="w-32 h-auto object-contain" />
                            </div>
                            <p className="text-zinc-400 max-w-sm">
                                Ihr Partner für Sanitär, Heizung und Lüftung. <br />
                                Kompetent. Zuverlässig. Schnell.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Kontakt</h4>
                            <ul className="space-y-4 text-zinc-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                    Glattpark (Opfikon)
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-red-600" />
                                    <a href="tel:+41447683043" className="hover:text-white">+41 44 768 30 43</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-red-600" />
                                    <a href="mailto:info@g-san.ch" className="hover:text-white">info@g-san.ch</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Rechtliches</h4>
                            <ul className="space-y-2 text-zinc-400 text-sm">
                                <li><a href="#" className="hover:text-red-500 transition-colors">Impressum</a></li>
                                <li><a href="#" className="hover:text-red-500 transition-colors">Datenschutz</a></li>
                            </ul>
                        </div>

                        {/* New Memberships Column */}
                        <div>
                            <h4 className="text-white font-bold mb-6 text-lg">Mitgliedschaften</h4>
                            <div className="flex flex-col gap-4">
                                <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 w-fit">
                                    <Image src="/logo-suissetec-v2.png" alt="Suissetec Mitglied" width={160} height={60} className="w-32 h-auto object-contain" />
                                </div>
                                <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform duration-300 w-fit">
                                    <Image src="/logo-svgw.png" alt="SVGW Mitglied" width={160} height={60} className="w-32 h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs">
                        <p>&copy; {new Date().getFullYear()} G-San Gebäudetechnik GmbH.</p>
                        <p className="text-zinc-700">Qualität aus Leidenschaft.</p>
                    </div>
                </div>
            </footer>
        </main>
    )
}
