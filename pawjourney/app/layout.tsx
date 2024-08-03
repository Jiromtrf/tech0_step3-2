import './globals.css'
import { Inter } from 'next/font/google'
import SupabaseListerner from "./components/supabase-listerner"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Supabase Auth',
  description: 'Supabase Auth',
}

// レイアウト
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* @ts-expect-error next version of TS will fix this */}
          <SupabaseListerner/>
          
          <main className="flex-1 container max-w-screen-sm mx-auto px-1 py-5">{children}</main>

          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright © All rights reserved | Paw Jounrney
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

export default RootLayout