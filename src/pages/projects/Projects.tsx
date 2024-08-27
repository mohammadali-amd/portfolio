import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const ProjectsPage = () => {
   return (
      <section id="work" className="work_area pt-120 pb-120">
         <div className="container">
            <div className="row justify-center">
               <div className="w-ull lg:w-1/2">
                  <div className="section_title text-center pb-6">
                     <h5 className="sub_title">| Projects</h5>
                     <h4 className="main_title">Let&apos;s see some art! </h4>
                  </div>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="work_wrapper relative">
               <div className="row work_active px-4 md:px-12">

                  {projects.map((item) => (
                     <div key={item.id}>
                        <div className="w-full px-5">
                           <div className="single_team_item mx-auto group">
                              <div className="single_team">
                                 <div className="team_image relative">
                                    <div>
                                       <img
                                          src={item.mainImage}
                                          alt={item.title}
                                          className="relative h-[300px] object-cover "
                                          width={500}
                                          height={500}
                                          loading="lazy"
                                       />
                                       <img
                                          src={item.mainImage}
                                          alt={item.title}
                                          className="absolute inset-0 h-[300px] object-contain backdrop-blur-[8px]"
                                          width={500}
                                          height={500}
                                          loading="lazy"
                                       />
                                    </div>
                                    <ul className="social absolute top-4 right-8">
                                       <li><Link target='_blank' to={item.website ? item.website : '#'}><i className="lni lni-link"></i></Link></li>
                                       <li><Link target='_blank' to={item.github ? item.github : "#"}><i className="lni lni-github-original"></i></Link></li>
                                    </ul>
                                 </div>
                                 <div className="text-center py-5 space-y-4 px-8 ">
                                    <h4 className="team_name text-xl md:text-2xl text-white group-hover:text-white">{item.name}</h4>
                                    <Link to={`/projects/${item.slug}`} className='text-lg flex justify-center bg-theme-color py-2 rounded-md group-hover:bg-white group-hover:text-theme-color'>Details</Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default ProjectsPage