import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Background3D from '@/components/3Dbackground'
import AboutSection from '@/components/about'
import Bottomnav from '@/components/bottomnav'
import CursorCustom from '@/components/cursor'
import { Canvas } from '@react-three/fiber'
import { Center, Float, Loader, OrbitControls, PerspectiveCamera, Sparkles, Stars } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { Vector3 } from 'three'
import LoadingScreen from '@/components/loadingScreen'

const inter = Inter({ subsets: ['latin'] })

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
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
  const [position, setPosition] = useState(new Vector3(4,-0.25,0));
  const [loaded, setLoaded] = useState(true);

  //change position of 3D model based on screen size
  if(width < 1250 && width > 1000 && position.x != 3) {
    setPosition(new Vector3(3,-0.25,0))
  }else if(width < 1000 && width > 750 && position.x != 2) {
    setPosition(new Vector3(2,-0.25,0))
  }else if(width < 750 && width > 500 && position.x != 1) {
    setPosition(new Vector3(1,-0.25,0))
  }else if(width < 500 && position.x != 0) {
    setPosition(new Vector3(0,-0.25,0))
  }else if(width > 1250 && position.x != 4) {
    setPosition(new Vector3(4,-0.25,0))
  }

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false)
    }, 5000)
  }, [])

  return (
    <main className="bg-gray-950 flex min-h-screen flex-col items-center ">
      {loaded ? <LoadingScreen />
      :<>
      <div className="absolute z-0 h-full w-full">
        <Canvas> 
          <OrbitControls enableZoom={false} ></OrbitControls>
          <PerspectiveCamera zoom={2} makeDefault position={[5, 2, 16]} />
          <Float speed={2.5} >
            <Stars radius={50} depth={100} count={10000} factor={4} saturation={0} fade speed={4} />
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
      </>}
      
    </main>
  )
}
