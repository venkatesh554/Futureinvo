// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "./BallCursor.css";

// const BallCursor = () => {
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <motion.div
//       className="ball-cursor-3d"
//       animate={{ x: cursor.x - 25, y: cursor.y - 25 }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//         mass: 0.5,
//       }}
//     >
//       <div className="inner-light"></div>
//     </motion.div>
//   );
// };

// export default BallCursor;



import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./BallCursor.css";

const BallCursor = () => {
    
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 25);
      mouseY.set(e.clientY - 25);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
   <motion.div
  className="ball-cursor-3d"
  style={{ x: springX, y: springY }}
>
  <div className="inner-light"></div>
</motion.div>

  );
};

export default BallCursor;
