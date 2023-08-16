"use client"
import Team from "@/Components/Team"
import { Parallax, ParallaxLayer,IParallax } from "@react-spring/parallax"
import {  useRef } from "react"

export default function Home() {
  const para= useRef<IParallax>(null!)
  return (
    <>
      <div>
        <Parallax pages={3} ref={para}>
          <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundColor: "#191919", backgroundSize: "cover" }}>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#8051ab" }}>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#14ab25" }} className="relative" >
            <div className=" absolute bottom-0">
            <Team />
            </div>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: 0.7 }} speed={-2} className=" flex items-center justify-center" >
            <h1 className=" font-mono font-bold text-7xl text-rose-700 -translate-y-3/4 max-sm:text-3xl mix-blend-difference ">CODING PUNDITS</h1>
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 1.3, end: 1.6 }} speed={-0.5} className=" flex items-center h-14 justify-center">
            <h2 className=" text-6xl text-white">Code Coaches</h2>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}
