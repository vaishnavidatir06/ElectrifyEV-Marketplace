import { League_Spartan } from 'next/font/google';
import AuthProvider from "../app/componants/AuthProvider"; // GIves access to data in the session for all over the app.
import './assets/css/materialdesignicons.min.css';
import './assets/css/tailwind.css';
import './globals.css';

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'Electrify EV Market',
  description: 'Greate place to find your dream eVehicle',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
     <AuthProvider>
     <body className={`${league_Spartan.className} dark:bg-slate-900`}>{children}</body>
     </AuthProvider>
    </html>
  )
}
