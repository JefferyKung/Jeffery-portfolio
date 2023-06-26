import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* 讓首頁的珠珠按了可以傳送到id的頁面 <- 這是在講span的id功能
        還有排版從左邊移到中間 中間className那一串 <- 這是其中一個原因為什麼要wrap 在HOC裡面 */}

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
