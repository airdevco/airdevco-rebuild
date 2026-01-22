import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroAnimatedGrid = () => {
  const [highlightedCells, setHighlightedCells] = useState<Array<{ id: number; index: number }>>([]);
  const cols = 24;
  const rows = 16;
  const totalCells = cols * rows;

  useEffect(() => {
    let idCounter = 0;
    const interval = setInterval(() => {
      // Pick a random cell, preferring center area slightly
      const randomCol = Math.floor(Math.random() * cols);
      const randomRow = Math.floor(Math.random() * rows);
      const index = randomRow * cols + randomCol;
      
      const newId = idCounter++;
      
      setHighlightedCells(prev => {
        // Keep last 6 highlights
        const next = [...prev, { id: newId, index }];
        if (next.length > 6) next.shift();
        return next;
      });
    }, 400); // New highlight every 400ms

    return () => clearInterval(interval);
  }, [totalCells]);

  return (
    <div className="w-full h-full relative perspective-[1000px] overflow-hidden">
      {/* 3D Tilted Grid Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center transform-gpu"
        style={{ 
          transform: 'rotateX(60deg) scale(1.5) translateY(-50px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="grid w-[120%] h-[150%]" 
          style={{ 
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: '1px'
          }}
        >
          {Array.from({ length: totalCells }).map((_, i) => {
            const isHighlighted = highlightedCells.some(c => c.index === i);
            
            return (
              <div 
                key={i} 
                className="relative border-[0.5px] border-gray-200/50"
              >
                <AnimatePresence>
                  {isHighlighted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, backgroundColor: 'rgba(56, 189, 248, 0.3)' }} // light blue 30%
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 shadow-[0_0_15px_rgba(56,189,248,0.4)] z-10"
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


