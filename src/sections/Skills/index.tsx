import { skills } from "../../data/skills";

const Skills = () => {
   return (
      <section id="skills" className="pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-full lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">| Skills</h5>
                     <h4 className="main_title">Hover to reveal skills</h4>
                  </div>
               </div>
            </div>
            <div className="row justify-center">
               {skills.map((service) => (
                  <div key={service.id} className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                     <div className="single_services text-center mt-8 mx-3 group relative overflow-hidden hover:shadow-2xl hover:shadow-theme-color/70 cursor-pointer">
                        {/* Title & Icon */}
                        <div className="services_content transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-90">
                           <div className="services_icon">
                              <i className={`lni ${service.lineIcon} text-4xl text-gray-200`}></i>
                              <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 95 95">
                                 <path className="services_shape rotate-animation" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                              </svg>
                           </div>
                           <h3 className="text-slate-100 font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl mt-5 xl:mt-10">{service.title}</h3>
                        </div>

                        {/* Hidden Skills List */}
                        <div className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out transform rounded-md p-6">
                           <div
                              className={`grid ${service.technologies.length > 4 ? 'grid-cols-2' : 'grid-cols-1'
                                 } gap-x-6 gap-y-4`}
                           >
                              {service.technologies.map((item, index) => (
                                 <div key={index} className="flex items-center space-x-3">
                                    <i className={`lni ${item.icon} mb-1 text-2xl text-cyan-400`}></i>
                                    <p className="text-sm lg:text-base">{item.name}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Skills;