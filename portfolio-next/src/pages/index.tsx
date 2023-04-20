import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Background3D from '@/components/3Dbackground'
import AboutSection from '@/components/about'
import Bottomnav from '@/components/bottomnav'
import CursorCustom from '@/components/cursor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-950 flex min-h-screen flex-col items-center p-5 md:p-24 xl:p-24">
      <CursorCustom></CursorCustom>
      <Navbar />
      <AboutSection></AboutSection>
      <Bottomnav></Bottomnav>
      <Background3D></Background3D>
    </main>
  )
}
