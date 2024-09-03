import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Contact = () => {
   const { register, trigger, formState: { errors } } = useForm();

   const onSubmit = async (e: React.FormEvent) => {
      const isValid = await trigger();
      if (!isValid) {
         e.preventDefault();
         alert("Something went wrong! \nPlease try again later.")
      }
   };

   return (
      <section id="contact" className="contact_area relative lg:pt-25 mt-6 pb-[6rem]">
         <div className="contact_image flex items-center justify-end">
            <div className="lg:pr-13">
               <img
                  src="/images/contact.webp"
                  alt="contact me"
                  loading="lazy"
               // width={500}
               // height={500}
               />
            </div>
         </div>

         <div className="container">
            <div className="row justify-end">
               <div className="w-full lg:w-1/2">
                  <div className="contact_wrapper mt-11">
                     <div className="section_title pb-4">
                        <h5 className="sub_title text-center lg:text-left">| Contact</h5>
                        <h4 className="main_title text-center lg:text-left">Ways to contact me</h4>
                        <div className="pt-12 space-y-12 md:space-y-0 md:flex md:justify-between md:gap-3">
                           {/* Linkedin */}
                           <Link target="_blank" to="https://www.linkedin.com/in/mohammadaliamidi/" className="grid justify-items-center hover:text-theme-color" rel="noreferrer">
                              <i className="lni lni-linkedin-original text-3xl"></i>
                              <span className="text-lg mt-3">Linkedin</span>
                           </Link>
                           {/* Github */}
                           <Link target="_blank" to="https://github.com/mohammadali-amd" className="grid justify-items-center hover:text-theme-color" rel="noreferrer">
                              <i className="lni lni-github-original text-3xl"></i>
                              <span className="text-lg mt-3">Github</span>
                           </Link>
                           {/* Whatsapp */}
                           <Link target="_blank" to="tel:09104971545" className="grid justify-items-center hover:text-theme-color" rel="noreferrer">
                              <i className="lni lni-whatsapp text-3xl"></i>
                              <span className="text-lg mt-3">0910 497 1545</span>
                           </Link>
                           {/* Email */}
                           <Link target="_blank" to="mailto:amidi1380@gmail.com" className="grid justify-items-center hover:text-theme-color" rel="noreferrer">
                              <i className="lni lni-envelope text-3xl"></i>
                              <span className="text-lg mt-3">amidi1380@gmail.com</span>
                           </Link>
                        </div>
                     </div>

                     <div className="contact_form">
                        <form
                           target="_blank"
                           onSubmit={onSubmit}
                           id="contact-form"
                           action="https://formsubmit.co/amidi1380@gmail.com"
                           method="POST"
                        >
                           <div className="row">
                              <div className="w-full md:w-1/2">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <input
                                          id="name"
                                          type="text"
                                          placeholder="Company name"
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                          {...register('name', {
                                             required: true,
                                             maxLength: 30,
                                          })}
                                       />
                                       {errors.name && (
                                          <p className="mt-1 text-red-500">
                                             {errors.name.type === 'required' && 'This field is required!'}
                                             {errors.name.type === 'maxLength' && 'You can enter up to 30 characters.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full md:w-1/2">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <input
                                          id="email"
                                          type="email"
                                          placeholder="Email address"
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                          {...register('email', {
                                             required: true,
                                             pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                          })}
                                       />
                                       {errors.email && (
                                          <p className="mt-1 text-red-500">
                                             {errors.email.type === 'required' && 'This field is required!'}
                                             {errors.email.type === 'pattern' && 'The entered email is incorrect.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <textarea
                                          id="message"
                                          placeholder="Write your message here..."
                                          rows={5}
                                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"
                                          {...register('message', {
                                             required: true,
                                             maxLength: 200,
                                          })}
                                       />
                                       {errors.message && (
                                          <p className="text-red-500">
                                             {errors.message.type === 'required' && 'This field is required!'}
                                             {errors.message.type === 'maxLength' && 'You can enter up to 200 characters.'}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <p className="form-message mx-3"></p>
                              <div className="w-full">
                                 <div className="mx-3">
                                    <div className="single_form mt-8">
                                       <button type="submit" className="w-full lg:w-fit main-btn contact-btn">Send</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="absolute -z-10 w-[300px] md:w-[700px] h-[150px] md:h-[400px] left-[10%] bottom-[77%] sm:bottom-[57%] lg:bottom-[25%] bg-green-600 blur-[100px] md:blur-[180px]" />

      </section>
   );
}

export default Contact
