import React, { useState, useEffect, useMemo } from 'react';
import { X } from 'lucide-react';

interface AdaptiveEditorialPhotoProps {
  id: string;
  src: string;
  alt: string;
  defaultCaption: string;
  dateTag?: string;
  initialOrientation?: 'landscape' | 'portrait';
}

export const AdaptiveEditorialPhoto: React.FC<AdaptiveEditorialPhotoProps> = ({
  src,
  alt,
  defaultCaption,
  dateTag,
  initialOrientation = 'landscape',
}) => {
  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>(initialOrientation);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [candidateIndex, setCandidateIndex] = useState(0);

  // Generate robust fallback candidates for GitHub Pages, root domain, and subpaths
  const candidates = useMemo(() => {
    if (!src) return [];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return [src];
    }

    const filename = src.split('/').pop() || src;
    const isGhPages = typeof window !== 'undefined' && window.location.pathname.includes('/site');
    const isRuSubdir = typeof window !== 'undefined' && window.location.pathname.includes('/ru');

    if (isGhPages) {
      return [
        `/site/images/${filename}`,
        `/site/ru/images/${filename}`,
        isRuSubdir ? `../images/${filename}` : `./images/${filename}`,
        `./images/${filename}`,
        `/images/${filename}`,
        `images/${filename}`,
      ];
    }

    return [
      `/images/${filename}`,
      isRuSubdir ? `../images/${filename}` : `./images/${filename}`,
      `./images/${filename}`,
      `images/${filename}`,
      `/site/images/${filename}`,
    ];
  }, [src]);

  const currentSrc = candidates[candidateIndex] || src;

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (!isViewerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsViewerOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isViewerOpen]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalHeight > naturalWidth * 1.05) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  };

  const handleImageError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    }
  };

  const isPortrait = orientation === 'portrait';

  return (
    <>
      <figure className="my-8 sm:my-12 relative max-w-[620px] mx-auto px-4 sm:px-0">
        {/* Image frame — authentic, no cropping, responsive fallback */}
        <div
          className={`mx-auto overflow-hidden rounded-xl border border-gray-200/90 bg-gray-50 shadow-xs relative flex items-center justify-center transition-all ${
            isPortrait ? 'max-w-[380px] sm:max-w-[420px]' : 'w-full'
          }`}
        >
          <div
            onClick={() => setIsViewerOpen(true)}
            className="w-full relative cursor-pointer"
          >
            <img
              src={currentSrc}
              alt={alt}
              onLoad={handleImageLoad}
              onError={handleImageError}
              className="w-full h-auto object-contain block select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Clean caption bar below image */}
        <div className="mt-2.5 flex items-baseline justify-between text-xs font-mono text-gray-500 gap-3">
          <span className="flex-1 text-[#4B5563]">{defaultCaption}</span>
          {dateTag && (
            <span className="text-[11px] text-gray-400 font-mono shrink-0">
              {dateTag}
            </span>
          )}
        </div>
      </figure>

      {/* Standalone Fullscreen Photo Viewer */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsViewerOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-opacity"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-4 right-4 z-60 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            title="Закрыть (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal content container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center justify-center max-w-[94vw] max-h-[92vh]"
          >
            <img
              src={currentSrc}
              alt={alt}
              className="max-w-[92vw] max-h-[80vh] sm:max-h-[84vh] object-contain rounded-lg shadow-2xl select-none"
            />

            {/* Quiet caption underneath the opened photo */}
            {(defaultCaption || dateTag) && (
              <div className="mt-3 text-center text-xs font-mono text-white/70 max-w-lg px-4 flex items-center justify-center gap-2">
                <span>{defaultCaption}</span>
                {dateTag && <span className="text-white/40">· {dateTag}</span>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
