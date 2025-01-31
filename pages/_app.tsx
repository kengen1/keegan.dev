// pages/_app.tsx
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import Scene from '@/components/3DScene/Scene'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1
        }}
      >
        <Scene />
      </div>

      {/* Your actual page content goes on top */}
      <Component {...pageProps} />
    </>
  )
}
