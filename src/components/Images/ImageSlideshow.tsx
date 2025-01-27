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

  const renderPrevButton = ({ isDisabled }: { isDisabled?: boolean }) => (
    <button
      className={`${styles.arrowButton} ${styles.prevButton}`}
      disabled={isDisabled}
    >
      &#8249; {/* Unicode for left arrow */}
    </button>
  );

  const renderNextButton = ({ isDisabled }: { isDisabled?: boolean }) => (
    <button
      className={`${styles.arrowButton} ${styles.nextButton}`}
      disabled={isDisabled}
    >
      &#8250; {/* Unicode for right arrow */}
    </button>
  );

  return (
    <div className={styles.slideshowContainer}>
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1500}
        infinite
        animationDuration={800}
        mouseTracking
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
        controlsStrategy="responsive"
        disableDotsControls={false}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </div>
  );
};

export default ImageSlideshow;
