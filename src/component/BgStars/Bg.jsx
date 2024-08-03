import React, { useRef, useEffect } from "react";
import "./bg.scss";
const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let numStars = 3000;
    let speed = 0.5;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const createStar = () => {
      let x, y;
      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      } while (Math.hypot(x - mouseX, y - mouseY) < 3);

      return {
        x,
        y,
        z: Math.random() * canvas.width,
        o: Math.random(),
        size: Math.random() * 3 + 2, // Random size between 3 and 6
      };
    };

    const populateStars = () => {
      stars.current.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.current.push(createStar());
      }
    };

    canvas.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowUp" || event.code === "KeyW") {
        speed += 1;
      } else if (event.code === "ArrowDown" || event.code === "KeyS") {
        speed = Math.max(1, speed - 1);
      } else if (event.code === "NumpadAdd") {
        numStars += 100;
        populateStars();
      } else if (event.code === "NumpadSubtract") {
        numStars = Math.max(100, numStars - 100);
        populateStars();
      }
    });

    const updateStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let star of stars.current) {
        star.z -= speed;

        if (star.z <= 0) {
          Object.assign(star, createStar());
          star.z = canvas.width;
        }

        const sx = (star.x - mouseX) * (canvas.width / star.z) + mouseX;
        const sy = (star.y - mouseY) * (canvas.width / star.z) + mouseY;
        const size = (1 - star.z / canvas.width) * star.size;
        context.fillStyle = "white";
        context.fillRect(sx, sy, size, size);
      }

      requestAnimationFrame(updateStars);
    };

    populateStars();
    updateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas className="canv" ref={canvasRef} />;
};

export default StarfieldCanvas;
