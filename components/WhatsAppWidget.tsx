"use client"
import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
    return (
        <a
            href="https://wa.me/41787683043"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-2"
            aria-label="WhatsApp Kontakt"
        >
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-current" />
            <span className="hidden group-hover:block max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap font-bold pr-2">
                Chat starten
            </span>
            {/* Red Notification Dot to draw attention */}
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-pulse"></span>
        </a>
    )
}
