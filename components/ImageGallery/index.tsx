import React, { useState, useRef } from 'react';
import Image from "next/legacy/image";

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Modal from '@/components/Modal';

type ImageItem = {
   url: string;
};

interface ImageGalleryProps {
   images: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
   const [mainImageIndex, setMainImageIndex] = useState<number>(0);
   const swiperRef = useRef<SwiperCore | null>(null); // Ref to access Swiper instance
   const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

   const openModal = () => setModalIsOpen(true);
   const closeModal = () => setModalIsOpen(false);

   const handleThumbnailClick = (index: number) => {
      setMainImageIndex(index);
      if (swiperRef.current) {
         swiperRef.current.slideTo(index);
      }
   };

   const handlePrev = () => {
      if (swiperRef.current) {
         swiperRef.current.slidePrev();
      }
   };

   const handleNext = () => {
      if (swiperRef.current) {
         swiperRef.current.slideNext();
      }
   };

   return (
      <div className="relative">
         {/* Main Image Swiper */}
         <div className="w-full mb-6 relative">
            <Swiper
               spaceBetween={10}
               slidesPerView={1}
               onSlideChange={(swiper) => setMainImageIndex(swiper.activeIndex)}
               onSwiper={(swiper) => (swiperRef.current = swiper)}
               initialSlide={mainImageIndex}
               modules={[Navigation]}
            >
               {images.map((image, index) => (
                  <SwiperSlide key={index}>
                     <div className="relative w-full h-0 pb-[100%] xl:pb-[85%]">
                        <Image
                           src={image.url}
                           alt={`Main Image ${index + 1}`}
                           layout='fill'
                           objectFit="contain"
                           className="rounded-lg shadow-lg cursor-pointer active:cursor-grabbing bg-white/5"
                           onClick={openModal}
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
               onClick={handlePrev}
               className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-theme-color/70 hover:bg-theme-color/85 text-2xl z-10 px-4 py-[6px] rounded-full"
            >
               &lt;
            </button>
            <button
               onClick={handleNext}
               className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-theme-color/70 hover:bg-theme-color/85 text-2xl z-10 px-4 py-[6px] rounded-full"
            >
               &gt;
            </button>
         </div>

         {/* Image Thumbnails */}
         <div className="mb-6">
            <Swiper
               spaceBetween={30}
               slidesPerView={3}
               centeredSlides={false}
               loop={false}
            >
               {images.map((image, index) => (
                  <SwiperSlide key={index}>
                     <div className="relative w-full h-[90px] md:h-[190px] lg:md:h-[110px] xl:h-[170px] pb-[25%]">
                        <Image
                           src={image.url}
                           alt={`Project Thumbnail ${index + 1}`}
                           layout="fill"
                           objectFit="contain"
                           className={`bg-white/5 rounded-lg cursor-pointer mb-6 ${index === mainImageIndex ? 'border-4 border-emerald-400' : ''}`}
                           onClick={() => handleThumbnailClick(index)}
                        />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>

         {/* Modal for Full-size Image */}
         <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <Image
               src={images[mainImageIndex]?.url}
               alt="Full size"
               layout="intrinsic"
               width={2000}
               height={2000}
            // className="rounded-lg"
            />
         </Modal>
      </div>
   );
};

export default ImageGallery;
