import { careers } from '../../data/careers';

const Career = () => {
   return (
      <section className="min-h-screen bg-[#161a27]" id="career">
         <div className="pt-20">
            <div className="container mx-auto px-4">
               <div className="flex justify-center">
                  <div className="w-full lg:w-3/4 text-center">
                     <h5 className="text-xl text-theme-color font-semibold">| My Experience</h5>
                     <h4 className="text-4xl font-bold text-white mt-4">Career Overview</h4>
                     <p className="text-lg text-body-color mt-5">
                        Below is an overview of my professional experience as a frontend developer, where I have worked on a variety of web development projects and gained expertise in modern technologies.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative flex flex-col xl:flex-row items-center">
            <div className="container mx-auto px-4 relative flex justify-center xl:justify-start items-center">
               <div className="relative lg:pl-10 z-10">
                  <img
                     src="/images/career.webp"
                     alt="web-design"
                     // width={800}
                     // height={800}
                     className="max-w-full h-auto"
                     loading="lazy"
                  />
               </div>
               <div className="absolute w-[300px] md:w-[700px] h-[150px] md:h-[400px] left-[5%] top-[15%] bg-theme-color blur-[100px] md:blur-[160px] z-0"></div>
            </div>

            <div className="container px-4 mt-8 xl:mt-0">
               <div className="xl:w-4/5  pt-4 lg:pt-0">
                  <ul className="space-y-8">
                     {careers.map((career) => (
                        <li key={career.id} className="flex items-start">
                           <div className="flex-shrink-0">
                              <i className="lni lni-checkmark-circle text-2xl text-theme-color"></i>
                           </div>
                           <div className="ml-4">
                              <h6 className="text-lg font-medium text-white">{career.job}, {career.company} ({career.startDate} - {career.endDate})</h6>
                              <p className="text-base text-body-color mt-2">
                                 {career.description}
                              </p>
                              <ul className="list-disc list-inside text-body-color mt-2 space-y-1">
                                 {career.items.map((item, index) => (
                                    <li key={index}>{item.desc}</li>
                                 ))}
                              </ul>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Career;
