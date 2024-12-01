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
    setDisplayedText("");

    const timeoutIds = text.split("").map((_, i) =>
      setTimeout(() => setDisplayedText((prev) => prev + text[i]), i * speed)
    );

    return () => timeoutIds.forEach((id) => clearTimeout(id));
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