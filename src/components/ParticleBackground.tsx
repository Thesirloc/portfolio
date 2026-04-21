"use client";

import { useEffect, useRef } from "react";

// Converts hex color strings (e.g. #ff5100) to RGB string format "r, g, b"
function hexToRgb(hex: string) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map(char => char + char).join("");
  }
  const r = parseInt(hex.substring(0, 2), 16) || 0;
  const g = parseInt(hex.substring(2, 4), 16) || 0;
  const b = parseInt(hex.substring(4, 6), 16) || 0;
  return `${r}, ${g}, ${b}`;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    // Reactive tracking for CSS Variable Theme colors
    let colorPrimaryRGB = "0, 240, 255"; 
    let colorSecondaryRGB = "255, 0, 60";
    
    const updateColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const primary = rootStyles.getPropertyValue("--brand-primary").trim();
      const secondary = rootStyles.getPropertyValue("--brand-accent").trim(); // using accent for a cooler punch on 20%
      if (primary) colorPrimaryRGB = hexToRgb(primary);
      if (secondary) colorSecondaryRGB = hexToRgb(secondary);
    };
    
    updateColors();

    const observer = new MutationObserver(() => updateColors());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let mousePosition = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mousePosition.x = x;
      mousePosition.y = y;
      if (dots.array.length > 0) {
        dots.array[0].x = x;
        dots.array[0].y = y;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isSecondary: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.isSecondary = Math.random() > 0.8; // 20% probability
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        
        const dotDistance = Math.hypot(this.x - mousePosition.x, this.y - mousePosition.y);
        const distanceRatio = dotDistance / (width / 1.7);
        const alpha = Math.max(0, 1 - distanceRatio);

        const colorRGB = this.isSecondary ? colorSecondaryRGB : colorPrimaryRGB;
        ctx.fillStyle = `rgba(${colorRGB}, ${alpha})`;
        ctx.fill();
      }

      update() {
        if (this.y < 0 || this.y > height) {
          this.vy = -this.vy;
        } else if (this.x < 0 || this.x > width) {
          this.vx = -this.vx;
        }
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    let dots = { nb: 0, distance: 0, d_radius: 0, array: [] as Dot[] };

    const initParticles = () => {
      dots.array = [];
      if (width > 1600) { dots.nb = 600; dots.distance = 70; dots.d_radius = 300; }
      else if (width > 1300) { dots.nb = 575; dots.distance = 60; dots.d_radius = 280; }
      else if (width > 1100) { dots.nb = 500; dots.distance = 55; dots.d_radius = 250; }
      else if (width > 800) { dots.nb = 300; dots.distance = 0; dots.d_radius = 0; }
      else if (width > 600) { dots.nb = 200; dots.distance = 0; dots.d_radius = 0; }
      else { dots.nb = 100; dots.distance = 0; dots.d_radius = 0; }

      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
      if (dots.array.length > 0) {
        dots.array[0].radius = 1.5;
        dots.array[0].isSecondary = false;
      }
    };

    initParticles();

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.3;

      for (let i = 0; i < dots.nb; i++) {
        const dot = dots.array[i];
        dot.draw();
        if (i !== 0) dot.update();
      }

      for (let i = 0; i < dots.nb; i++) {
        for (let j = i + 1; j < dots.nb; j++) {
          const i_dot = dots.array[i];
          const j_dot = dots.array[j];

          if (
            Math.abs(i_dot.x - j_dot.x) < dots.distance &&
            Math.abs(i_dot.y - j_dot.y) < dots.distance
          ) {
            if (
              Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
              Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
            ) {
              ctx.beginPath();
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);

              const dotDistance = Math.hypot(i_dot.x - mousePosition.x, i_dot.y - mousePosition.y);
              let distanceRatio = dotDistance / dots.d_radius;
              distanceRatio -= 0.3;
              if (distanceRatio < 0) distanceRatio = 0;

              const alpha = Math.max(0, 1 - distanceRatio);
              ctx.strokeStyle = `rgba(${colorPrimaryRGB}, ${alpha})`;
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 pointer-events-none z-0"
    />
  );
}
