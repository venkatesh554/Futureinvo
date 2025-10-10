import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./BallCursor.css";

const BallCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="ball-cursor"
      animate={{ x: cursor.x - 20, y: cursor.y - 20 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
    />
  );
};

export default BallCursor;
