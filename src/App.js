import {
  CategoryCard,
  Feature,
  Header,
  Hero,
  SectionTitle,
} from './components';
import { useEffect, useState, useRef, useCallback } from 'react';
import useFetch from './hooks/use-fetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

function App() {
  const { allcourses, allCategory, loadingCourses, loadingCategory } =
    useFetch();
  const [windowTracker, setwindowTracker] = useState();

  const swipperNavPrevref = useRef(null);
  const swipperNavNextref = useRef(null);

  const handleWindowResize = useCallback((event) => {
    setwindowTracker(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="feature">
        <SectionTitle title={'Featured Courses'}>
          <p className="register">See all Courses </p>
        </SectionTitle>
        <div className="featureBoxWrapper">
          {loadingCourses ? (
            <div className="catBoxWrapper">
              <div className="loading"></div>
            </div>
          ) : (
            allcourses.data
              .slice(0, 4)
              .map((item) => (
                <Feature
                  key={item.id}
                  image={item.card_image}
                  title={truncate(item.name, 30)}
                  code={item.code}
                />
              ))
          )}
        </div>
      </section>
      <section className="categories">
        <SectionTitle title={'Categories'}></SectionTitle>
        <>
          {loadingCategory ? (
            <div className="loading"></div>
          ) : (
            <Swiper
              className=""
              slidesPerView={windowTracker < 767 ? 1 : 3}
              spaceBetween={10}
              navigation={{
                nextEl: swipperNavPrevref.current,
                prevEl: swipperNavNextref.current,
              }}
              Autoplay
              modules={[Navigation]}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = swipperNavPrevref.current;
                swiper.params.navigation.nextEl = swipperNavNextref.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <div className="catBoxWrapper">
                {allCategory.data.slice(0, 8).map((item, index) => (
                  <SwiperSlide className="" key={index}>
                    <CategoryCard
                      key={index}
                      course={item.category}
                      subjects={item.subcategory.map((item) => item)}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          )}
        </>
        <div className="cat-bottom-btn">
          <p className="register">See all Courses </p>
        </div>
      </section>
    </div>
  );
}
export default App;
