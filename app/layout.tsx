import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'G-San Gebäudetechnik | Sanitär, Heizung, Lüftung',
    description: 'Ihr Experte für Sanitär, Heizung und Lüftung in Glattpark (Opfikon). Zukunftsorientierte und nachhaltige Lösungen.',
}

import CookieBanner from '../components/CookieBanner'
import WhatsAppWidget from '../components/WhatsAppWidget'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body className={inter.className}>
                {children}
                <CookieBanner />
                <WhatsAppWidget />
            </body>
        </html>
    )
}
