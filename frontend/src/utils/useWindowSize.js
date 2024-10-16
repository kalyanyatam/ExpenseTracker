import { useEffect, useState } from "react";

// Custom hook to get window size
export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]); // Initialize with current window size

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    // Add resize event listener
    window.addEventListener("resize", updateSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Return width and height
  return {
    width: size[0],
    height: size[1],
  };
};
