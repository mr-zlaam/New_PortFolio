import { useState, useEffect } from "react";
import "./BgAnimated.css";
import Body from "../../00_Parent/Body";
const BgAnimated = ({ children }) => {
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [gradientStyles, setGradientStyles] = useState({
    background: "radial-gradient(circle, #fff 100%, #ffff 100%, #28282b 0%)",
  });

  useEffect(() => {
    let animationFrameId;

    const animateBackground = () => {
      if (!isMouseMoving) {
        const animationX = (Math.sin(Date.now() * 0.0012) + 1) * 0.5;
        const animationY = (Math.cos(Date.now() * 0.0012) + 1) * 0.5;

        const gradient = `radial-gradient(circle at ${animationX * 100}% ${
          animationY * 100
        }%, #ffffff 0%, #fcfcfc 0%, #28282b 100%)`;
        setGradientStyles({ background: gradient });

        animationFrameId = requestAnimationFrame(animateBackground);
      }
    };

    // Start the background animation
    animateBackground();

    const onMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const gradient = `radial-gradient(circle at ${x}px ${y}px, #ffffff 0%, #fcfcfc 0%, #28282b 100%)`;
      setGradientStyles({ background: gradient });

      // Stop the background animation when the mouse is moved
      setIsMouseMoving(true);
      cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // Clean up event listener and animation frame
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMouseMoving]);

  return (
    <div
      className="radial-gradient-container radiant_controller"
      style={gradientStyles}
    >
      {/* <Body /> */}
    </div>
  );
};

export default BgAnimated;
