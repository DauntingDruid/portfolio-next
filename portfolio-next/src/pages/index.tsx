import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Background3D from '@/components/3Dbackground'
import AboutSection from '@/components/about'
import Bottomnav from '@/components/bottomnav'
import CursorCustom from '@/components/cursor'
import { Canvas } from '@react-three/fiber'
import { Center, Cloud, Float, Grid, Loader, OrbitControls, PerspectiveCamera, PivotControls, PresentationControls, Sparkles } from '@react-three/drei'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-950 flex min-h-screen flex-col items-center ">
      
      <div className="absolute z-0 h-full w-full">
        <Canvas> 
          <OrbitControls enableZoom={false} ></OrbitControls>
          <PerspectiveCamera zoom={2} makeDefault position={[0, 5, 15]} />
          <Center>
            <Float speed={2.5} >
              <Sparkles count={50} size={2.5} noise={1.5}></Sparkles>
              <Background3D></Background3D>
            </Float>
          </Center>  
        </Canvas>
        <Loader />
      </div>
      <div className="z-10 md:p-24 xl:p-24">
      <CursorCustom></CursorCustom>
      <Navbar />
      <AboutSection></AboutSection>
      <Bottomnav></Bottomnav>
      </div>
    </main>
  )
}
