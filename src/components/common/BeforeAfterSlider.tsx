import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Después",
  className = "",
  aspectRatio = "aspect-[4/3] sm:aspect-[16/10]"
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-3xl bg-[#E4EFF4] shadow-[0_8px_32px_rgba(46,110,142,0.08)] cursor-ew-resize ${aspectRatio} ${className}`}
    >
      {/* After image (Full background layer) */}
      <img
        src={afterImage}
        alt="Resultado Después - Tratamiento Dental"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (Clipped overlay layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Estado Inicial Antes - Tratamiento Dental"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
            height: '100%'
          }}
        />
        {/* Subtle dark tint to emphasize improvement */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] pointer-events-none transition-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Central Circular Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-[#029CE3] shadow-[0_4px_16px_rgba(30,42,50,0.25)] flex items-center justify-center border-2 border-[#029CE3] pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
          <ArrowLeftRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Floating Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-[#1E2A32]/70 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-[#029CE3]/85 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
          {afterLabel}
        </span>
      </div>

      {/* Instruction indicator at bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white/90 text-[10px] tracking-wider uppercase font-medium">
          Arrastra para comparar
        </span>
      </div>
    </div>
  );
};
