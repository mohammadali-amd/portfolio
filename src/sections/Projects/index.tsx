import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CSSProperties } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects } from '../../data/projects';

const Projects = () => {
   return (
      <section id="projects" className="work_area pt-[4rem] lg:pt-[6rem] pb-[2rem]">
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
                  <Swiper
                     style={{
                        '--swiper-navigation-color': 'teal',
                        '--swiper-navigation-size': '33px',
                        // '--swiper-pagination-color': '#000',
                     } as CSSProperties}
                     // spaceBetween={20}
                     slidesPerView={1}
                     breakpoints={{
                        720: {
                           slidesPerView: 2,
                        },
                        1025: {
                           slidesPerView: 4,
                        },

                     }}
                     autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                     }}
                     // onSlideChange={() => console.log('slide change')}
                     navigation={true}
                     // pagination={true}
                     modules={[Autoplay, Navigation, Pagination]}
                  // onSwiper={(swiper) => console.log(swiper)}
                  >
                     {projects.slice(0, 8).map((item) => (
                        <SwiperSlide key={item.id}>
                           <div className="w-full px-5">
                              <div className="single_team_item rounded-xl shadow-lg mx-auto group">
                                 <div className="single_team">
                                    <div className="team_image relative">
                                       <div>
                                          <img
                                             src={item.mainImage}
                                             alt={item.name}
                                             className="relative h-[300px] object-cover"
                                             width={500}
                                             height={500}
                                             loading="lazy"
                                          />
                                          <img
                                             src={item.mainImage}
                                             alt={item.name}
                                             className="absolute inset-0 h-[300px] object-contain backdrop-blur-[8px]"
                                             width={500}
                                             height={500}
                                             loading="lazy"
                                          />
                                       </div>
                                       <ul className="social absolute top-4 right-8">
                                          <li><Link target='_blank' to={item.website ? item.website : '#'}><i className="lni lni-link"></i></Link></li>
                                          <li><Link target='_blank' to={item.github ? item.github : '#'}><i className="lni lni-github-original"></i></Link></li>
                                       </ul>
                                    </div>
                                    <div className="text-center py-5 space-y-4 px-8 ">
                                       <h4 className="team_name text-xl md:text-2xl text-white group-hover:text-white">{item.name}</h4>
                                       <Link to={`/projects/${item.slug}`} className='text-lg flex justify-center bg-theme-color py-2 rounded-md group-hover:bg-white group-hover:text-theme-color'>Details</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
         <div className="flex justify-center pt-8">
            <Link to='/projects' className="bg-theme-color hover:bg-theme-color/80 rounded-lg px-4 py-2 text-2xl shadow-lg shadow-theme-color/30">
               See More Projects ➡
            </Link>
         </div>
      </section>
   )
}

export default Projects