"use client"

import { Mail, Phone, MapPin, CheckCircle, Wrench, Thermometer, Wind, ShieldCheck, Clock, Droplets, ChevronDown, Award } from 'lucide-react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

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
                            Ihr Spezialist für Sanitär, Heizung und Lüftung. Modernste Technik trifft auf erstklassiges Schweizer Handwerk.
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Neu- und Umbau", icon: "01", desc: "Moderne Bäder und Küchen nach Mass." },
                            { title: "Rohrreinigung", icon: "02", desc: "Effektive Lösungen gegen Verstopfungen." },
                            { title: "Kalkschutz", icon: "03", desc: "Nachhaltiger Schutz für Ihre Geräte." },
                            { title: "Reparaturen", icon: "04", desc: "Schnelle Hilfe bei Defekten." },
                            { title: "Planung", icon: "05", desc: "Innovative Konzepte für Ihr Zuhause." },
                            { title: "Wartung", icon: "06", desc: "Regelmässiger Service für Langlebigkeit." },
                            { title: "Lüftung", icon: "07", desc: "Frische Luft für ein gesundes Klima." },
                            { title: "Heizung", icon: "08", desc: "Energieeffiziente Wärmesysteme." },
                            { title: "Notdienst", icon: "09", desc: "24/7 erreichbar für Notfälle." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group p-8 bg-zinc-50 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 border border-zinc-100 hover:border-red-600"
                            >
                                <div className="text-4xl font-black text-zinc-200 group-hover:text-red-600 mb-6 transition-colors font-mono">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors text-sm">{service.desc}</p>
                                <div className="w-12 h-1 bg-red-600 mt-8 group-hover:w-full transition-all duration-500"></div>
                            </motion.div>
                        ))}
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
                            title: "Luxus Badumbau",
                            loc: "Zürichberg",
                            img: "/project-bathroom.png",
                            cat: "Sanitär"
                        },
                        {
                            title: "Heizungssanierung",
                            loc: "Winterthur",
                            img: "/project-heating.png",
                            cat: "Heizung"
                        },
                        {
                            title: "Ind. Lüftungsanlage",
                            loc: "Oerlikon",
                            img: "/project-ventilation.png",
                            cat: "Lüftung"
                        },
                        {
                            title: "Planung & Konzept",
                            loc: "Glattpark",
                            img: "/project-planning-real.jpg",
                            cat: "Planung"
                        },
                        {
                            title: "Serviceflotte",
                            loc: "Schweizweit",
                            img: "/fleet-van.jpg",
                            cat: "Kundendienst"
                        },
                        {
                            title: "Wellness Oase",
                            loc: "Küsnacht",
                            img: "/project-bathroom.png",
                            cat: "Sanitär"
                        },
                    ].map((project, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-3xl overflow-hidden snap-center group cursor-pointer"
                        >
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded-full mb-4">
                                    <Award className="w-3 h-3" />
                                    {project.cat}
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm font-medium tracking-wide">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    {project.loc}
                                </div>
                            </div>
                        </motion.div>
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
                                        <p className="text-red-500 font-bold tracking-widest text-xs uppercase mt-1">Geschäftsführer</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Als Eidg. dipl. Projektleiter Gebäudetechnik steht er für Innovation und Nachhaltigkeit.
                                    Seine Vision: Effiziente Systemlösungen für die Zukunft der Schweiz.
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
