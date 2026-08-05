'use client';

import { useRef, useCallback, useEffect, useState } from 'react';

const Carousel = ({ children, ariaLabel = 'Kaydırılabilir liste' }) => {
  const trackRef = useRef(null);
  const dragRef = useRef({ startX: 0, scrollLeft: 0, isDown: false, moved: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener('resize', updateButtons);
    return () => window.removeEventListener('resize', updateButtons);
  }, [updateButtons]);

  const scrollByAmount = useCallback(dir => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-carousel-item]');
    const amount = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }, []);

  const handlePointerDown = e => {
    if (e.pointerType !== 'mouse') return;
    const el = trackRef.current;
    dragRef.current = { startX: e.clientX, scrollLeft: el.scrollLeft, isDown: true, moved: false };
  };

  const handlePointerMove = e => {
    const el = trackRef.current;
    const d = dragRef.current;
    if (!d.isDown) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) d.moved = true;
    if (d.moved) el.scrollLeft = d.scrollLeft - dx;
  };

  const endDrag = () => {
    dragRef.current.isDown = false;
  };

  const handleClickCapture = e => {
    if (dragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.moved = false;
    }
  };

  const btnClass =
    'absolute top-1/2 -translate-y-1/2 z-10 hidden sm:inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-black/5 dark:border-white/10 shadow-lg text-slate-700 dark:text-slate-200 transition-all duration-200 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer';

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        disabled={!canPrev}
        aria-label="Geri kaydır"
        className={`${btnClass} -left-5 lg:-left-6`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={trackRef}
        role="region"
        aria-label={ariaLabel}
        onScroll={updateButtons}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={handleClickCapture}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing"
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        disabled={!canNext}
        aria-label="İleri kaydır"
        className={`${btnClass} -right-5 lg:-right-6`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
