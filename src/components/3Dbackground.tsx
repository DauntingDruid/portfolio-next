import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Scene() {
  const gltf = useLoader(GLTFLoader, './assets/rhetorician/scene.gltf')
  return <primitive object={gltf.scene} />
}




const Background3D = () => {
  return (
    <Scene />
  )
}

export default Background3D