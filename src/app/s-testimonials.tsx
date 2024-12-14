import { HomeTestimonialsData } from '@/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';

export function HomeTestimonials() {
  return (
    <section className="max-w-[1440px] mx-auto p-6 lg:p-0 font-primary mt-20 lg:mt-[100px]" id='Testimonials'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {HomeTestimonialsData.map((item, index) => (
          <SwiperSlide key={index} className="bg-[#0094C7]/10 p-6 lg:p-8 rounded-2xl h-full w-full">
            <p className="text-2xl font-medium italic mb-4"> -{item.name}</p>
            <h3 className="text-sm lg:text-lg italic font-light">- {item.testimonial}</h3>
            <div className='flex gap-4 justify-center lg:justify-start mt-10'>
            <FaStar className='text-yellow-400' size={25} />
            <FaStar className='text-yellow-400' size={25} />
            <FaStar className='text-yellow-400' size={25} />
            <FaStar className='text-yellow-400' size={25}/>
            <FaStar className='text-yellow-400' size={25} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}