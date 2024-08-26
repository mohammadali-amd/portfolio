import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { NavbarLinks } from "@/data/links";

const Header = () => {
   const [isScroll, setIsScroll] = useState(0);
   const [mobileMenu, setMobileMenu] = useState(false);

   const mobileMenuRef = useRef<HTMLDivElement | null>(null);

   const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
         setMobileMenu(false);
      }
   };

   const mobileMenuHandler = () => {
      setMobileMenu(prev => !mobileMenu)
   };

   const changeStyle = () => {
      setIsScroll(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", changeStyle);
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         window.removeEventListener("scroll", changeStyle);
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <section>
         <div className={`navbar-area ${isScroll && 'sticky'}`}>
            <div className="container relative">
               <div className="row items-center">
                  <div className="w-full">
                     <nav className="flex items-center justify-between py-3 navbar navbar-expand-lg">
                        <div className="absolute left-0 z-20 hidden w-full py-0 duration-300 lg:w-auto navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                           <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex py-3">
                              {NavbarLinks.map((link) => (
                                 <li key={link.slug} className="nav-item text-xl mr-5 lg:mr-16">
                                    <Link className={`page-scroll`} href={link.slug}>{link.name}</Link>  {/* active */}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Mobile Menu */}
                        <button onClick={mobileMenuHandler} className="block navbar-toggler focus:outline-none lg:hidden" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                        </button>

                        <Link href="/" className="lg:hidden text-white text-3xl">
                           Portfolio
                        </Link>

                        <div className="hidden lg:block text-center">
                           <ul className="flex justify-center items-center sm:justify-start gap-6">
                              <li><Link target="_blank" href="https://www.linkedin.com/in/mohammadaliamidi/"><i className="lni lni-linkedin-original text-lg hover:text-emerald-400 duration-200"></i></Link></li>
                              <li><Link target="_blank" href="https://github.com/mohammadali-amd/"><i className="lni lni-github-original text-lg hover:text-emerald-400 duration-200"></i></Link></li>
                              <li><Link href="tel:09104971545"><i className="lni lni-whatsapp text-lg hover:text-emerald-400 duration-200"></i></Link></li>
                              <li><Link href="mailto:amidi1380@gmail.com"><i className="lni lni-envelope text-lg hover:text-emerald-400 duration-200"></i></Link></li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>

         <div ref={mobileMenuRef} className={`${mobileMenu ? 'translate-x-0' : '-translate-x-full'} fixed z-30 left-0 bottom-0 h-full w-4/5 bg-zinc-950/95 bg-blend-darken shadow-2xl transition-transform duration-200`}>
            <div>
               <i onClick={mobileMenuHandler} className="lni lni-close text-3xl absolute right-0 top-0 pr-6 pt-4"></i>

               <ul id="nav" className="items-center content-start navbar-nav text-center mt-15">
                  {NavbarLinks.map((link) => (
                     <li key={link.slug} className="py-5 text-xl">
                        <Link onClick={mobileMenuHandler} className={`page-scroll`} href={link.slug}>{link.name}</Link>  {/* active */}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <Link href="#" className={isScroll ? 'scroll-top' : 'hidden'}><i className="lni lni-chevron-up"></i></Link>
      </section>
   )
}

export default Header