import { ReactTyped } from "react-typed";

const Hero = () => {
   return (
      <div id="home" className="min-h-screen relative z-10 xl:flex items-center">
         <div className="hero_shape hidden xl:block shape_1">
            <i className="lni lni-nodejs text-6xl text-green-600"></i>
         </div>
         <div className="hero_shape hidden xl:block shape_2">
            <img src="/images/shape/shape-1.svg" alt="shape" loading="lazy" />
         </div>
         <div className="hero_shape hidden xl:block shape_3">
            <i className="lni lni-javascript text-5xl text-[#f0db4f]"></i>
         </div>
         <div className="hero_shape hidden xl:block shape_4">
            <img src="/images/shape/shape-2.svg" alt="shape" loading="lazy" />
         </div>
         <div className="hero_shape hidden xl:block shape_6">
            <img src="/images/shape/shape-3.svg" alt="shape" loading="lazy" />
         </div>
         <div className="hero_shape hidden xl:block shape_7">
            <i className="lni lni-mongodb text-5xl text-green-500"></i>
         </div>
         <div className="hero_shape hidden xl:block shape_8">
            <img src="/images/shape/shape-4.svg" alt="shape" loading="lazy" />
         </div>
         <div className="hero_shape hidden xl:block shape_9">
            <i className="lni lni-nextjs text-6xl"></i>
         </div>
         <div className="hero_shape hidden xl:block shape_10">
            <i className="lni lni-tailwindcss text-4xl text-cyan-400"></i>
         </div>
         <div className="hero_shape hidden xl:block shape_11">
            <img src="/images/shape/shape-1.svg" alt="shape" loading="lazy" />
         </div>
         <div className="hero_shape hidden xl:block shape_12">
            <i className="lni lni-react text-6xl text-cyan-500"></i>
         </div>

         <div className="container">
            <div className="row">
               <div className="w-full xl:w-1/2 mx-4 md:mx-0">
                  <div className="header_hero_content pt-110 xl:pt-0">
                     <h2 className="hero_title text-center xl:text-left text-3xl sm:text-5xl  font-extrabold">
                        <span className="md:leading-[3.7rem]">
                           Hi, I&apos;m <br />
                           <ReactTyped
                              strings={[
                                 "Mohammad Ali",
                                 "Front-end Developer",
                              ]}
                              typeSpeed={40}
                              backSpeed={50}
                              loop
                              className="text-text-color"
                           />
                        </span>
                     </h2>
                     <p className="mt-8 text-center xl:text-start xl:mr-8">
                        Crafting intuitive web experiences with clean, scalable code.
                        <br />
                        Passionate Frontend Developer specializing in React and modern web technologies.
                        <br />
                        Turning ideas into responsive, user-friendly digital solutions.
                     </p>
                     <div className="flex justify-center xl:justify-start mt-10">
                        <a className="main-btn" target="_blank" rel="noopener noreferrer" href="/resume.pdf">Download Resume</a>
                     </div>
                  </div>
               </div>

               <div className="header_image flex relative items-center">
                  <div className="z-10 lg:pb-24">
                     <img
                        src="/images/hacker.webp"
                        alt="Hero image"
                        loading="lazy"
                     />
                  </div>
                  <div className="absolute z-0 w-[300px] md:w-[700px] h-[150px] md:h-[400px] left-[5%] top-[15%] bg-emerald-600 blur-[100px] md:blur-[160px]" />
               </div>
            </div>
         </div>

      </div>
   )
}

export default Hero