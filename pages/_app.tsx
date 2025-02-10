import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Navbar } from '@/components/Navbar';
import Scene from '@/components/3DScene/Scene';
import "styles/_global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Navbar />      
      {/* Render Three.js Scene only on Home Page */}
      {isHomePage && (
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
      )}

      <Component {...pageProps} />
    </>
  );
}
