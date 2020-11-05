import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useHelper } from 'drei'
import './App.css'
import { PointLightHelper, BoxHelper } from 'three'

//revolving box
function Box() {
  //decraing ref
  const mesh = useRef()
  //animating box per frame
  useFrame(
    () =>
      (mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.01)
  )
  //using box helper
  useHelper(mesh, BoxHelper, '#272740')
  //return the mesh
  return (
    <mesh ref={mesh}>
      <boxGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial attach='material' />
    </mesh>
  )
}
//light setup
function Lights() {
  //defing ref
  const redLight = useRef()
  const blueLight = useRef()
  const whiteLight = useRef()
  //using helper
  useHelper(redLight, PointLightHelper, 0.5, 'white')
  useHelper(blueLight, PointLightHelper, 0.5, 'white')
  useHelper(whiteLight, PointLightHelper, 0.5, 'white')
  //returing all lights
  return (
    <>
      <pointLight
        ref={redLight}
        intensity={0.6}
        color={'red'}
        position={[4, 0, 2]}
      />
      <pointLight
        ref={blueLight}
        intensity={0.6}
        color={'blue'}
        position={[-4, 0, 2]}
      />
      <pointLight
        ref={whiteLight}
        intensity={0.2}
        color={'white'}
        position={[0, 4, 0]}
      />
    </>
  )
}
function App() {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <Lights />
      <Box />
      <gridHelper args={[10, 10, `white`, `gray`]} />
    </Canvas>
  )
}

export default App
