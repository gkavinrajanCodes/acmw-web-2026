import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'SSN ACM-W | Women in Computing',
  description: 'ACM-W Student Chapter at SSN College of Engineering - Empowering women in technology through innovation, collaboration, and community.',
  keywords: ['ACM-W', 'Women in Computing', 'SSN College', 'Technology', 'Computer Science'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
