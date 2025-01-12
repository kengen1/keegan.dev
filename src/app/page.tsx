import PageTransition from './components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">Click on the navbar to explore!</p>
      </div>
    </PageTransition>
  );
}
