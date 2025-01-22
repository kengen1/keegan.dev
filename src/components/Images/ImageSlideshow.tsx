import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './ImageSlideshow.module.scss';

type ImageSlideshowProps = {
  images: string[];
};

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();

  const items = images.map((image, index) => (
    <div key={index} className={styles.imageContainer}>
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className={styles.image}
        onDragStart={handleDragStart}
      />
    </div>
  ));

  return (
    <div className={styles.slideshowContainer}>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        animationType="fadeout"
        animationDuration={800}
        mouseTracking
        responsive={{
          0: { items: 1 }, // Show 1 image for smaller screens
          768: { items: 2 }, // Show 2 images for medium screens
          1024: { items: 3 }, // Show 3 images for larger screens
        }}
        disableDotsControls={false} // Enable dots navigation
      />
    </div>
  );
};

export default ImageSlideshow;
