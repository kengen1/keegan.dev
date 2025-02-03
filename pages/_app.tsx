import type { AppProps } from 'next/app'
import { Navbar } from '@/components/Navbar'
import Scene from '@/components/3DScene/Scene'
import { Title } from '@/components/Title'
import "styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Fixed Webpage Title in Top-Left Corner */}
      <Title />

      {/* Navbar */}
      <Navbar />

      {/* Background 3D Scene */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <Scene />
      </div>

      {/* Main Page Content */}
      <Component {...pageProps} />
    </>
  )
}
