"use client"
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consented = localStorage.getItem('cookie-consent')
        if (!consented) {
            setIsVisible(true)
        }
    }, [])

    const accept = () => {
        localStorage.setItem('cookie-consent', 'true')
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-950/95 border-t border-red-600/30 backdrop-blur-md p-4 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <p className="text-zinc-300 text-center md:text-left">
                    Wir verwenden Cookies und speichern Daten, um Ihr Erlebnis auf unserer Website zu verbessern und gemäss unseren <a href="#" className="underline hover:text-white">Datenschutzbestimmungen</a>.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={accept}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-colors text-xs uppercase tracking-wider"
                    >
                        Akzeptieren
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="Schliessen"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
