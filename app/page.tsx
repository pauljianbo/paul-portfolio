'use client'

import dynamic from 'next/dynamic'

// Dynamically import the Banner component with no SSR
const Banner = dynamic(() => import('./components/HomeCards/AnimatedCubeCard'), { ssr: false })

export default function Home() {
  return (
    <div className="">
      <Banner />
    </div>
  )
}
