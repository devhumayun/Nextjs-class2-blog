import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul style={{display: "flex", gap: "10px", padding: "20px"}}>
          <li style={{listStyle:"none"}}>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/user"> User </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  )
}
