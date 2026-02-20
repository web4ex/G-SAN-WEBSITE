"use client"

import { useState } from 'react'
import { Mail, X, Send, Phone, User, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const resetWidget = () => {
        setIsOpen(false)
        setFormData({ name: '', phone: '', message: '' })
    }

    // Dynamic mailto link based on form state
    const subject = `Kontaktanfrage von ${formData.name || 'Website-Besucher'}`
    const body = `Name: ${formData.name}\nTelefon: ${formData.phone}\n\nNachricht:\n${formData.message}`
    const mailtoUrl = `mailto:info@g-san.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    const isFormValid = formData.name && formData.phone && formData.message;

    return (
        <>
            {/* Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
                    aria-label="Kontaktformular öffnen"
                >
                    <Mail className="w-8 h-8 md:w-8 md:h-8" />
                    <span className="absolute right-full mr-4 bg-black text-white px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Kontaktieren
                    </span>
                    <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                </motion.button>
            )}

            {/* Form Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-end sm:items-end md:items-end justify-end pointer-events-none p-4 md:p-0">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={resetWidget}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            className="pointer-events-auto w-full md:w-[400px] md:m-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 flex flex-col max-h-[90vh] relative z-10"
                        >
                            {/* Header */}
                            <div className="bg-red-600 p-5 flex items-center justify-between text-white shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 p-2 rounded-lg">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-lg tracking-tight">Kontaktanfrage</span>
                                </div>
                                <button
                                    onClick={resetWidget}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto bg-slate-50">
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <p className="text-sm text-zinc-600 mb-6 bg-blue-50 p-3 rounded-lg border border-blue-100 italic">
                                        Füllen Sie die Felder aus. Ein Klick auf den Button öffnet Ihr E-Mail-Programm mit der fertigen Nachricht.
                                    </p>

                                    <div>
                                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-1 ml-1">Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3.5 w-5 h-5 text-zinc-400" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Vor- und Nachname *"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-black placeholder:text-zinc-400 bg-white"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-1 ml-1">Telefon</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-zinc-400" />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Ihre Telefonnummer *"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-black placeholder:text-zinc-400 bg-white"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-1 ml-1">Anliegen</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-zinc-400" />
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Wie können wir Ihnen helfen? *"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-black placeholder:text-zinc-400 resize-none bg-white"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <a
                                            href={isFormValid ? mailtoUrl : '#'}
                                            onClick={(e) => {
                                                if (!isFormValid) {
                                                    e.preventDefault();
                                                    alert("Bitte füllen Sie alle Pflichtfelder (*) aus.");
                                                } else {
                                                    // Only reset after a significant delay so the browser can trigger the mailto
                                                    setTimeout(() => {
                                                        resetWidget();
                                                    }, 1000);
                                                }
                                            }}
                                            className={`w-full py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 ${isFormValid
                                                    ? 'bg-black hover:bg-zinc-800 text-white hover:shadow-xl cursor-pointer'
                                                    : 'bg-zinc-200 text-zinc-400 cursor-not-allowed border border-transparent'
                                                }`}
                                        >
                                            <Send className={`w-5 h-5 ${isFormValid ? 'animate-pulse' : ''}`} />
                                            Anfrage in E-Mail App öffnen
                                        </a>
                                    </div>

                                    <p className="text-[10px] text-center text-zinc-400 leading-tight">
                                        Ihre Standard-Mail-App wird mit den eingegebenen Daten geöffnet.<br />
                                        Empfänger: <span className="text-zinc-500 font-medium">info@g-san.ch</span>
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}
