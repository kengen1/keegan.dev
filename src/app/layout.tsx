import '../styles/globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="transition-all">{children}</main>
      </body>
    </html>
  );
}
