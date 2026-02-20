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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Construct mailto link
        const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`)
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Telefon: ${formData.phone}\n\n` +
            `Nachricht:\n${formData.message}`
        )

        // Open default email client
        window.location.href = `mailto:info@g-san.ch?subject=${subject}&body=${body}`

        // Close widget shortly after
        setTimeout(() => {
            setIsOpen(false)
            setFormData({ name: '', phone: '', message: '' })
        }, 1000)
    }

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
                    <div className="fixed inset-0 z-50 flex items-end sm:items-end md:items-end justify-end pointer-events-none">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto md:bg-transparent md:backdrop-blur-none"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 100, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.9 }}
                            className="pointer-events-auto w-full md:w-[400px] m-0 md:m-8 bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 flex flex-col max-h-[80vh]"
                        >
                            {/* Header */}
                            <div className="bg-red-600 p-4 flex items-center justify-between text-white shrink-0">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    <span className="font-bold text-lg">Kontaktanfrage</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 overflow-y-auto bg-slate-50">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <p className="text-sm text-gray-500 mb-4">
                                        Füllen Sie die Details aus – wir öffnen Ihre E-Mail-App für den Versand.
                                    </p>

                                    <div>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Ihr Name *"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm bg-white"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                required
                                                placeholder="Ihre Telefonnummer *"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm bg-white"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Wie können wir helfen? *"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-sm resize-none bg-white"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-black hover:bg-zinc-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        In E-Mail-App öffnen
                                    </button>

                                    <p className="text-xs text-center text-gray-400 mt-2">
                                        Dies öffnet Ihr Standard-E-Mail-Programm mit einer vorbereiteten Nachricht an info@g-san.ch.
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
