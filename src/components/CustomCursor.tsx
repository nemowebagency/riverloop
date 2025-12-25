import { useState, useEffect, useRef } from "react";

export const CustomCursor = () => {
  // Inizializza al centro dello schermo
  const [smoothPosition, setSmoothPosition] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0
  });
  const [isPointer, setIsPointer] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  useEffect(() => {
    let mouseX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let mouseY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
    let currentX = mouseX;
    let currentY = mouseY;

    // Inizializza la posizione
    setSmoothPosition({ x: currentX, y: currentY });

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Verifica se il cursore è su un elemento cliccabile
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    const animate = (timestamp: number) => {
      // Interpolazione smooth usando lerp
      const speed = 0.2; // Valore più basso = movimento più smooth (0.1 è molto smooth)
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      setSmoothPosition({ x: currentX, y: currentY });

      previousTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    // Aggiungi listener solo su desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      requestRef.current = requestAnimationFrame(animate);
      window.addEventListener("mousemove", updateCursor);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  // Non mostrare su dispositivi touch
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Cursore principale - cerchio che segue il cursore */}
      <div
        className="fixed pointer-events-none z-[9999] opacity-100"
        style={{
          left: `${smoothPosition.x}px`,
          top: `${smoothPosition.y}px`,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
          filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))"
        }}
      >
        <div
          className={`rounded-full border-2 transition-all duration-300 ${
            isPointer
              ? "w-10 h-10 border-white bg-white/10"
              : "w-8 h-8 border-white bg-white/10"
          }`}
        />
      </div>
    </>
  );
};

