import { useRef, useEffect } from 'react';
import ContentPanel from '../components/ui/ContentPanel';
import useMediaCarousel from '../hooks/useMediaCarousel';
import { mediaItems, galleryInfo } from '../data/mediaGallery';

function MediaGallery({
  isActive,
  onClose,
  isManual = false,
  isMobile,
  onNext,
  onPrev,
  currentIndex,
  totalSections
}) {
  const {
    currentItem,
    currentIndex: mediaIndex,
    next: nextMedia,
    prev: prevMedia,
    goTo,
    total,
    reset
  } = useMediaCarousel(mediaItems);

  const videoRef = useRef(null);

  // Pause video when panel closes and reset carousel
  useEffect(() => {
    if (!isActive) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      reset();
    }
  }, [isActive, reset]);

  // Handle keyboard navigation for media carousel
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevMedia();
      } else if (e.key === 'ArrowRight') {
        nextMedia();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, nextMedia, prevMedia]);

  return (
    <ContentPanel
      isActive={isActive}
      onClose={onClose}
      isManual={isManual}
      title={galleryInfo.title}
      stamp="MEDIA"
      isMobile={isMobile}
      onNext={onNext}
      onPrev={onPrev}
      currentIndex={currentIndex}
      totalSections={totalSections}
    >
      {/* Gallery description */}
      <p className="gallery-intro">
        {galleryInfo.description}
      </p>

      {/* Media viewer */}
      <div className="media-viewer">
        {currentItem?.type === 'video' ? (
          <video
            ref={videoRef}
            key={currentItem.id}
            src={currentItem.src}
            controls
            autoPlay
            muted
            loop
            className="media-video"
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            key={currentItem?.id}
            src={currentItem?.src}
            alt={currentItem?.title}
            className="media-image"
          />
        )}
      </div>

      {/* Current media info */}
      <div className="media-info">
        <h4>{currentItem?.title}</h4>
        <p>{currentItem?.description}</p>
      </div>

      {/* Carousel navigation */}
      <div className="media-carousel-nav">
        <button
          onClick={prevMedia}
          className="media-nav-btn"
          aria-label="Previous media"
        >
          &larr;
        </button>

        <div className="media-dots">
          {mediaItems.map((_, i) => (
            <span
              key={i}
              className={`media-dot ${i === mediaIndex ? 'active' : ''}`}
              onClick={() => goTo(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to media ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextMedia}
          className="media-nav-btn"
          aria-label="Next media"
        >
          &rarr;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="media-thumbnails">
        {mediaItems.map((item, i) => (
          <div
            key={item.id}
            className={`media-thumb ${i === mediaIndex ? 'active' : ''}`}
            onClick={() => goTo(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
          >
            {item.type === 'image' ? (
              <img src={item.src} alt={item.title} loading="lazy" />
            ) : (
              <div className="video-thumb-placeholder">
                <span>&#9658;</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="media-counter">
        {mediaIndex + 1} / {total}
      </div>
    </ContentPanel>
  );
}

export default MediaGallery;
