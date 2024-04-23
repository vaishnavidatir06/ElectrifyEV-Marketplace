import { League_Spartan } from 'next/font/google'
import './globals.css'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'Hously - Next Js Tailwind CSS Real Estate Template',
  description: 'Hously - Next Js Tailwind CSS Real Estate Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${league_Spartan.variable} font-body text-base text-black dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  )
}
