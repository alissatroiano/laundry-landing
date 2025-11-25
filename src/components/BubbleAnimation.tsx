import { useEffect, useRef } from 'react';
import './../BubbleAnimations.css';

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export function BubbleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: Bubble[] = [];
    const bubbleCount = 30;

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        size: Math.random() * 40 + 20,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size / 3,
          bubble.y - bubble.size / 3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${bubble.opacity})`);
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${bubble.opacity * 0.75})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, ${bubble.opacity * 0.82})`);

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        bubble.y -= bubble.speedY;
        bubble.x += bubble.speedX;

        if (bubble.y + bubble.size < 0) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }

        if (bubble.x < -bubble.size) {
          bubble.x = canvas.width + bubble.size;
        } else if (bubble.x > canvas.width + bubble.size) {
          bubble.x = -bubble.size;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1, minHeight: '100vh', overflow: 'hidden' }}
    />
  );
}
