import React from "react";
import Tilt from "react-tilt";
// tilt是翹邊邊
import { motion } from "framer-motion";
// 有動畫的區段就可用motion.div / motion.p
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("  right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      // 漸層 green-pink-gradient
    >
      <div
      // tilt卡片
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // fadeIn(direction,type,delay,duration)
        className='mt-4 text-white text-[17px] max-w-5xl leading-[30px] whitespace-pre-lines'
      >
        I am a proficient software developer with JavaScript skills and   
        knowledge of frameworks such as React and Node.js. 
        I'm using Next.js with Typescript at my workplace. Every day is a challenge but rewarding! Besides, 
        I have experience as an associate project manager in a digital marketing firm. 
        I worked closely with clients to plan and execute effective and creative social media campaigns and posts. 
        That's why I understand concepts like SEO and the needs of our target audience. 
        I can use code to create full-stack websites that meet marketing objectives. 
        I have a solid ability to solve problems and learn new technologies quickly. 
        I am seeking an opportunity to join a dynamic and collaborative team that values quality and creativity. I 
        would love to work together and bring ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
