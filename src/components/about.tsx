import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className='w-full my-20 select-none'>
      <p className='xl:text-4xl md:text-3xl xs:text-2xl md:leading-relaxed xl:leading-relaxed xs:leading-relaxed'> 
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>Hi </span> 
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>there, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I&apos;m </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>Abhishek, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>a </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>front-end </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>developer </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>from </span>
        <span className='ease-in-out duration-300 text-orange-200 hover:text-orange-600 hover:opacity-100 opacity-90 '> In</span>
        <span className='ease-in-out duration-300 text-gray-300 hover:text-white hover:opacity-100 opacity-90 '>d</span>
        <span className='ease-in-out duration-300 text-green-200 hover:text-green-600 hover:opacity-100 opacity-90 '>ia</span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>. </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>When </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I&apos;m </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>not </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>busy </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>creating </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>stunning </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>apps, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>love </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>indulging </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>in </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>the </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>captivating </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>stories </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>of </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>World </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>War, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>also </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>enjoy </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>listening </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>to </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>lofi </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>music, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>with </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>my </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>headphones </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>always </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>within </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>reach </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>while </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>coding </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>away. </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>However, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>there&apos;s </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>one </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>thing </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>that </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>just </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>can&apos;t </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>stand </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>- </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>pineapple </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>on </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>pizza. </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>Trust </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>me, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>it&apos;s </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>just </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>not </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>my </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>thing. </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>With </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>my </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>passion </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>for </span>
        <span className='ease-in-out duration-300 text-fuchsia-600 hover:text-fuchsia-100 hover:animate-pulse hover:opacity-100 opacity-90'>design </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>and </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>attention </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>to </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>detail, </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>I&apos;m </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>dedicated </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>to </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>crafting </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>visually </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>impressive </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>products </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>that </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>truly </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>make </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>an </span>
        <span className='ease-in-out duration-300 text-fuchsia-100 hover:text-fuchsia-600 hover:opacity-100 opacity-90'>impact.</span>
      </p>
    </motion.div>
  )
}

export default AboutSection