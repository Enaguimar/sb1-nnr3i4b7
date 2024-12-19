import { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const colors = ['#ffff00', '#ffa500', '#ff0000', '#00ff00', '#0000ff', '#ff00ff'];

    function createFirework(x: number, y: number) {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 5 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    function animate() {
      // Clear the canvas with transparency instead of semi-opaque black
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.alpha -= 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      if (Math.random() < 0.03) {
        createFirework(
          Math.random() * canvas.width,
          canvas.height - Math.random() * canvas.height * 0.5
        );
      }

      requestAnimationFrame(animate);
    }

    function hexToRgb(hex: string): string {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : '255, 255, 255';
    }

    animate();

    return () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 mix-blend-screen"
      style={{ opacity: 0.8 }}
    />
  );
}