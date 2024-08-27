import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ImageGallery from '../../components/ImageGallery';
import NotFound from '../../components/NotFound';
import { Project } from '../../types/types';
import { projects } from '../../data/projects';

const ProjectDetails = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [project, setProject] = useState<Project | null>(null);

   useEffect(() => {
      if (id) {
         const foundProject = projects.find((item) => item.slug === id);
         if (foundProject) {
            setProject(foundProject);
         } else {
            setProject(null);
         }
      }
   }, [id]);

   if (!project) {
      return <NotFound />;
   }

   return (
      <div className="container relative mx-auto mt-16 py-12 px-4 lg:px-20">
         <div className="absolute z-0 w-[550px] md:w-[900px] h-[250px] md:h-[600px] -left-[60%] top-[15%] bg-emerald-600 blur-[160px] md:blur-[300px]" />

         {/* Breadcrumb Navigation */}
         <nav className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:underline">
               Home
            </Link>{' '}
            /{' '}
            <Link to="/projects" className="hover:underline">
               Projects
            </Link>{' '}
            / <span className="font-semibold">{project.slug}</span>
         </nav>

         {/* Project Details */}
         <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
               {project.images && <ImageGallery images={project.images} />}
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 space-y-6">
               <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  {project.title}
               </h1>
               <p className="text-lg text-gray-600"><b>Project:</b> {project.name}</p>

               {/* Links */}
               <div className='text-base'>
                  {project.website && (
                     <p className="text-base mb-6">
                        <b>Website:</b> {project.website}
                     </p>
                  )}
                  {project.github && (
                     <span>
                        <b>Github:&nbsp;</b>
                        <Link
                           to={project.github}
                           target="_blank"
                           className="hover:underline"
                        >
                           View on GitHub
                        </Link>
                     </span>
                  )}
               </div>

               {/* Technologies */}
               {project.technologies && (
                  <div>
                     <h3 className='pb-4'>Technologies:</h3>
                     <div className="flex flex-wrap gap-6">
                        {project.technologies.map((item, index) => (
                           <div key={index} className="flex items-center space-x-3">
                              <i className={`lni ${item.icon} text-2xl text-cyan-400`}></i>
                              <p className="text-sm lg:text-base">{item.name}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               )}

               {/* Description */}
               {project.description && (
                  <div>
                     <h3 className='pb-4'>Description:</h3>
                     <p className='text-base'>{project.description}</p>
                     {project.features && (
                        <ul className='py-6 text-base space-y-2'>
                           {project.features.map((feature, index) => (
                              <li key={index} className="flex gap-3">
                                 <span className='lni lni-circle-plus pt-1'></span>
                                 {feature.text}
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               )}
            </div>
         </div>

         {/* Navigation Buttons for Previous/Next Projects */}
         <div className="mt-12 flex justify-between">
            <button
               className="text-base text-emerald-400 hover:underline"
               onClick={() => navigate(`/projects/${getPreviousProjectSlug(project.slug)}`)}
            >
               &larr; Previous Project
            </button>
            <button
               className="text-base text-emerald-400 hover:underline"
               onClick={() => navigate(`/projects/${getNextProjectSlug(project.slug)}`)}
            >
               Next Project &rarr;
            </button>
         </div>
      </div>
   );
};

// Utility functions for getting previous and next project slugs
const getPreviousProjectSlug = (currentSlug: string | undefined) => {
   const index = projects.findIndex((project) => project.slug === currentSlug);
   if (index > 0) {
      return projects[index - 1].slug;
   }
   return projects[projects.length - 1].slug;
};

const getNextProjectSlug = (currentSlug: string | undefined) => {
   const index = projects.findIndex((project) => project.slug === currentSlug);
   if (index < projects.length - 1) {
      return projects[index + 1].slug;
   }
   return projects[0].slug;
};

export default ProjectDetails;
