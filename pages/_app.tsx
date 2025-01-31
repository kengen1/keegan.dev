// pages/_app.tsx
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import BonsaiModel from '@/components/3DScene/BonsaiModel'

// Dynamically import the MacBook 3D Model to disable SSR
const MacbookModel = dynamic(() => import('@/components/3DScene/MacbookModel'), {
  ssr: false
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      {/* Fixed, full-viewport background with MacBook */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '90vh',
          zIndex: -1
        }}
      >
        <MacbookModel />
      </div>

      {/* Your actual page content goes on top */}
      <Component {...pageProps} />
    </>
  )
}
