import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText(""); // Reset text

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      >
        &nbsp;
      </motion.span>
    </motion.div>
  );
};
