import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[95vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ff9900]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-br from-amber-700 to-amber-300' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#ff9900]'>Jeffery</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a NextJS & NodeJS base Fullstack developer <br className='sm:block hidden' />
            produce MERN web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* 這個div是那個橢圓形有小珠珠上下動，點了回移到下一頁(about) */}
        <a href='#about'>
          {/* a tag 讓他到about頁 */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* 外面的橢圓形 rounded-3xl */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
              // 裡面會動的小珠珠 rounded-full
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
