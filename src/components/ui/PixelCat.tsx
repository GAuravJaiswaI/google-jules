import { motion } from 'framer-motion';

export const PixelCat = () => {
  return (
    <motion.svg
      width="120"
      height="60"
      viewBox="0 0 24 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[200px] h-auto mx-auto"
    >
      <rect x="5" y="6" width="1" height="1" fill="#171717" />
      <rect x="5" y="7" width="1" height="1" fill="#171717" />
      <rect x="6" y="8" width="1" height="1" fill="#171717" />
      <rect x="7" y="8" width="1" height="1" fill="#171717" />
      <rect x="8" y="8" width="1" height="1" fill="#171717" />
      <rect x="9" y="8" width="1" height="1" fill="#171717" />
      <rect x="10" y="7" width="1" height="1" fill="#171717" />
      <rect x="10" y="6" width="1" height="1" fill="#171717" />

      {/* Body connecting to head */}
      <rect x="11" y="8" width="1" height="1" fill="#171717" />
      <rect x="12" y="8" width="1" height="1" fill="#171717" />

      {/* Head */}
      <rect x="13" y="7" width="1" height="1" fill="#171717" />
      <rect x="13" y="6" width="1" height="1" fill="#171717" />
      <rect x="14" y="5" width="1" height="1" fill="#171717" />
      <rect x="15" y="6" width="1" height="1" fill="#171717" />
      <rect x="16" y="5" width="1" height="1" fill="#171717" />
      <rect x="17" y="6" width="1" height="1" fill="#171717" />
      <rect x="17" y="7" width="1" height="1" fill="#171717" />

      {/* Face bottom */}
      <rect x="14" y="8" width="1" height="1" fill="#171717" />
      <rect x="15" y="8" width="1" height="1" fill="#171717" />
      <rect x="16" y="8" width="1" height="1" fill="#171717" />

      {/* Eyes */}
      <rect x="14" y="7" width="1" height="1" fill="#171717" />
      <rect x="16" y="7" width="1" height="1" fill="#171717" />

    </motion.svg>
  );
};
