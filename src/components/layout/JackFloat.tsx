import { useEffect, useRef } from "react";
import jackCard from "../../assets/images/jack-card.jpeg";

type Vec2 = { x: number; y: number };

export default function DvdJack() {
  const ref = useRef<HTMLImageElement | null>(null);

  const posRef = useRef<Vec2>({ x: 100, y: 100 });
  const velRef = useRef<Vec2>({ x: 80, y: 60 });

  const boundsRef = useRef({ w: 0, h: 0, elW: 0, elH: 0 });

  const measure = () => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    boundsRef.current = {
      w: window.innerWidth,
      h: window.innerHeight,
      elW: rect.width,
      elH: rect.height,
    };

    // clamp position if window shrank
    posRef.current.x = Math.max(0, Math.min(boundsRef.current.w - rect.width, posRef.current.x));
    posRef.current.y = Math.max(0, Math.min(boundsRef.current.h - rect.height, posRef.current.y));

    // apply immediately
    el.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);

    const el = ref.current;
    if (!el) return;

    if (el.complete) {
      measure();
    } else {
      el.addEventListener("load", measure);
    }

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000); // clamp dt to avoid huge jumps
      last = now;

      const { w, h, elW, elH } = boundsRef.current;

      // move
      let nx = posRef.current.x + velRef.current.x * dt;
      let ny = posRef.current.y + velRef.current.y * dt;

      // bounce X
      if (nx <= 0) {
        nx = 0;
        velRef.current.x *= -1;
      } else if (nx + elW >= w) {
        nx = Math.max(0, w - elW);
        velRef.current.x *= -1;
      }

      // bounce Y
      if (ny <= 0) {
        ny = 0;
        velRef.current.y *= -1;
      } else if (ny + elH >= h) {
        ny = Math.max(0, h - elH);
        velRef.current.y *= -1;
      }

      posRef.current = { x: nx, y: ny };

      // apply without rerender
      el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      el.removeEventListener("load", measure);
    };
  }, []);

  return (
    <img
      ref={ref}
      src={jackCard}
      alt=""
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 120,
        height: "auto",
        imageRendering: "pixelated",
        opacity: 0.9,
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
        transform: "translate3d(100px, 100px, 0)",
      }}
    />
  );
}
