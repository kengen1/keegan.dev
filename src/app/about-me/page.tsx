'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import PageContentContainer from '../components/PageContentContainer';

/*
todo:
- fix up about me paragraph
- make film photos gallery spaced out correctly between margins of the container
- fix description of movie scores
    - rename to film scores
    - reduce size of iframe 
    - try and make this section look nicer

- remove image gallery from pc building and mechanical keyboards
    - replace with a stats component (similar to github stats)
    - video games section

- add a reading section with a reading list for 2025

- make it so you can click anywhere outside of the container to exit the page/container (like a modal)
*/
export default function AboutMe() {
  const router = useRouter();

  // State for modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <PageContentContainer onClose={() => router.push('/')}>
      {/* Who am I Section */}
      <div className="flex items-center justify-center mt-12 mb-12">
        <div className="flex-grow h-0.5 bg-gray-700"></div>
        <h1 className="px-4 text-4xl text-gray-100 whitespace-nowrap">
          About Me
        </h1>
        <div className="flex-grow h-0.5 bg-gray-700"></div>
      </div>
      <p className="text-lg leading-relaxed text-gray-300 text-center">
            Hi! I'm Keegan, a software engineer at Cochlear and a computer science graduate from Western Sydney University (WSU).

            
      </p>
      <p className="mt-4 text-lg leading-relaxed text-gray-300 text-center">
        In my free time, I explore creative outlets like contributing to open-source projects, experimenting with new technologies, and sharing knowledge with the community.
      </p>

      {/* Hobbies & Interests Section */}
      <div className="flex items-center justify-center mt-16 mb-12">
        <div className="flex-grow h-0.5 bg-gray-700"></div>
        <h2 className="px-4 text-4xl text-gray-100 whitespace-nowrap">
          Hobbies & Interests
        </h2>
        <div className="flex-grow h-0.5 bg-gray-700"></div>
      </div>

      {/* Hobbies List */}
      <div className="space-y-8">
        {/* Film Photography */}
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">Film Photography</h3>
        <p className="text-gray-300 mb-4">
          Here are some recent photos I've taken!
          <br />
          📸: <strong>Canon AE-1</strong>
          <br />
          🎞: <strong>Kodak 400 MAX</strong>
        </p>
        <div className="flex space-x-4 overflow-x-auto">
          {[
            '/images/film/film1.jpeg',
            '/images/film/film2.jpeg',
            '/images/film/film3.jpeg',
            '/images/film/film4.jpeg',
            '/images/film/film5.jpeg',
            '/images/film/film6.jpeg',
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Film photo ${index + 1}`}
              className="rounded-lg shadow-md object-cover w-40 h-64 cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Movie Scores */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Movie Scores</h3>
          <p className="text-gray-300 mb-4">
            I have a deep appreciation for film scores and often listen to them while coding. They
            help me focus and inspire creativity during long work sessions. Below is one of my
            favorite playlists:
          </p>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/4NyALg5gw8ZjtW1LgsMEYf?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="1"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Movie Scores Playlist"
          ></iframe>
        </div>

        {/* PC Building & Mechanical Keyboards */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            PC Building & Mechanical Keyboards
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/pc_build.jpg"
              alt="PC build"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
            <img
              src="/images/mechanical_keyboard.jpg"
              alt="Mechanical keyboard"
              className="rounded-lg shadow-md object-cover w-full h-48"
            />
          </div>
        </div>

        {/* Video Games */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">Video Games</h3>
          <p className="text-gray-300 italic">Coming soon...</p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="rounded-lg shadow-lg max-w-[80%] max-h-[80%]"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-gray-100 text-3xl font-bold"
            aria-label="Close enlarged image"
          >
            ✕
          </button>
        </div>
      )}
    </PageContentContainer>
  );
}
