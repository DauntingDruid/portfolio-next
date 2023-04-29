import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Background3D from '@/components/3Dbackground'
import AboutSection from '@/components/about'
import Bottomnav from '@/components/bottomnav'
import CursorCustom from '@/components/cursor'
import { Canvas } from '@react-three/fiber'
import { Center, Float, Loader, OrbitControls, PerspectiveCamera, Sparkles, Stars } from '@react-three/drei'
import { useLayoutEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Home() {
  const [width, height] = useWindowSize();
  const [position, setPosition] = useState([4,-0.25,0]);

  //change position of 3D model based on screen size
  if(width < 1250 && width > 1000 && position[0] != 3) {
    setPosition([3,-0.25,0])
  }else if(width < 1000 && width > 750 && position[0] != 2) {
    setPosition([2,-0.25,0])
  }else if(width < 750 && width > 500 && position[0] != 1) {
    setPosition([1,-0.25,0])
  }else if(width < 500 && position[0] != 0) {
    setPosition([0,-0.25,0])
  }else if(width > 1250 && position[0] != 4) {
    setPosition([4,-0.25,0])
  }

  return (
    <main className="bg-gray-950 flex min-h-screen flex-col items-center ">
      <div className="absolute z-0 h-full w-full">
        <Canvas> 
          <OrbitControls enableZoom={false} ></OrbitControls>
          <PerspectiveCamera zoom={2} makeDefault position={[5, 2, 16]} />
          <Float speed={2.5} >
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Float>
          <Center position={position}>
            <Float speed={2.5} >
              <Sparkles count={50} size={2.5} noise={1.5}></Sparkles>
                <Background3D></Background3D>
            </Float>
          </Center>  
        </Canvas>
        <Loader />
      </div>
      <div className="z-10 h-full p-12 sm:p-24 md:p-24 xl:p-24 xl:pt-12">
        <CursorCustom></CursorCustom>
        <Navbar />
        <AboutSection></AboutSection>
        <Bottomnav></Bottomnav>
      </div>
    </main>
  )
}
