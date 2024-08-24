import bg1 from "../../public/bg_slide1.jpg";
import BookingFormTabs from "./components/bookingFormTabs";
export default function Home() {
  return (
    <>
      <section
        style={{ backgroundImage: ` url(${bg1.src})` }}
        className="landing_area bg-no-repeat bg-cover bg-center relative z-0 before:h-full before:w-full before:bg-slate-900 before:bg-opacity-30 before:dark:bg-slate-100 before:dark:bg-opacity-25 before:z-[-1] before:absolute before:top-0 before:start-0"
      >
        <div className="container mx-auto px-5">
          <div className="flex min-h-[calc(100vh_-_118px)] justify-end items-center ">
            <div className="w-[70%] px-3">
              <div className="text">
                <h5 className="text-[1.3rem] dark:text-slate-900 font-semibold text-white">
                  BOOKING NOW
                </h5>
                <h1 className="text-[4rem] font-extrabold dark:text-slate-900 text-white">
                  Easy airport transfers to and from your accommodation.
                </h1>
              </div>
            </div>
            <div className="w-[30%]">
              <BookingFormTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f6f6f6]">
        <div className="container">
          <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)]">
            WHAT WE DO
          </h5>
          <h4 className="text-[2.5rem] font-light text-center text-black">
            The Car and Limousine Service
          </h4>

          <div className="flex flex-wrap items-center justify-start pt-20">
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white">
                <div className="relative z-0">
                  <img
                    src="https://quanticalabs.com/wp_themes4/autoride/wp-content/uploads/sites/2/2019/10/image_06.jpg"
                    className="w-full z-0 "
                    alt=""
                  />
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-tl-full rounded-tr-full"></div>
                  <i className="ph-light ph-buildings absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white text-6xl"></i>
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] font-bold mb-5 "
                  >
                    CORPORATE TRAVEL
                  </a>
                  <p className="text-black font-light text-[1.125rem]">
                    We provide business services and our own vehicle fleet so
                    that you can reach your destination safely, in comfort and
                    always on time
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white">
                <div className="relative z-0">
                  <img
                    src="https://quanticalabs.com/wp_themes4/autoride/wp-content/uploads/sites/2/2019/10/image_07.jpg"
                    className="w-full z-0 "
                    alt=""
                  />
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-tl-full rounded-tr-full"></div>
                  <i className="ph-light ph-airplane-tilt absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white text-6xl"></i>
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] font-bold mb-5 "
                  >
                    AIRPORT TRANSFER
                  </a>
                  <p className="text-[#778591] font-light text-[1.125rem]">
                    We provide airport transfers to and from all the major
                    airports. Our service is the perfect option for when you are
                    travelling for business or pleasure
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
            <div className="lg:w-4/12 md:w-6/12 w-full p-5">
              <div className="bg-white">
                <div className="relative z-0">
                  <img
                    src="https://quanticalabs.com/wp_themes4/autoride/wp-content/uploads/sites/2/2019/04/image_08.jpg"
                    className="w-full z-0 "
                    alt=""
                  />
                  <div className="absolute z-10 top-1/2 left-1/2 -translate-y-3/4 -translate-x-1/2 w-36 h-20 border-2 border-b-0 border-white rounded-tl-full rounded-tr-full"></div>
                  <i className="ph-light ph-sliders-horizontal absolute z-10 top-1/2 left-1/2  -translate-x-1/2  text-white text-6xl"></i>
                  <div className="absolute w-full h-full bg-[rgba(133,140,146,0.4)] z-[1px] top-0 left-0"></div>
                </div>
                <div className="p-10 text-center">
                  <a
                    href=""
                    className="block text-xl text-[var(--theme)] font-bold mb-5 "
                  >
                    EVENT SERVICE
                  </a>
                  <p className="text-[#778591] font-light text-[1.125rem]">
                    Whether it is a short shopping trip or a long-distance
                    journey, we will get you there in comfort plus we will
                    handle the entire event efficiently
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- col-end --> */}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap items-center">
          <img
            src="https://quanticalabs.com/wp_themes4/autoride/wp-content/uploads/sites/2/2019/09/image_01-1.jpg?id=10425"
            className="w-6/12"
            alt=""
          />
          <div className="w-6/12 p-12">
            <h5 className=" text-center font-bold text-[1.125rem] text-[var(--theme)]">
              WHY CHOOSE US
            </h5>
            <h4 className="text-[2.5rem] font-light text-center text-black mb-14">
              Service Tailored to You
            </h4>
            <p className="text-[#778591] font-light text-[1.375rem] text-center mb-14">
              When organizing a special event you and your family or friends
              might want to have a good time and not worry about driving. Our
              experienced chauffeurs will guide you through what every city you
              are in.
            </p>

            <div className="flex flex-wrap justify-around items-center">
              <div className="w-3/12">
                <div className="w-12 h-12 rounded-full  bg-[#eaecee] relative mx-auto block">
                  <i className="ph-light ph-shield-chevron text-6xl text-[var(--theme)] absolute bottom-1 right-1"></i>
                </div>
                <h6 className="font-bold text-[1.125rem] text-[#2C3E50] mt-8 text-center">
                  Safety First
                </h6>
              </div>
              <div className="w-3/12">
                <div className="w-12 h-12 rounded-full  bg-[#eaecee] relative mx-auto block">
                  <i className="ph-light ph-bus text-6xl text-[var(--theme)] absolute bottom-1 right-1"></i>
                </div>
                <h6 className="font-bold text-[1.125rem] text-[#2C3E50] mt-8 text-center">
                  Coach Buses
                </h6>
              </div>
              <div className="w-3/12">
                <div className="w-12 h-12 rounded-full  bg-[#eaecee] relative mx-auto block">
                  <i className="ph-light ph-lighthouse text-6xl text-[var(--theme)] absolute bottom-1 right-1"></i>
                </div>
                <h6 className="font-bold text-[1.125rem] text-[#2C3E50] mt-8 text-center">
                  Safe Haven
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch">
          <div className="w-6/12 py-12 px-28 bg-[#f6f6f6] flex flex-col justify-center items-stretch text-center">
            <div className="w-12 h-12 rounded-full  bg-[#fff] relative mx-auto block mb-10">
              <i className="ph-light ph-chats text-6xl text-[var(--theme)] absolute bottom-1 right-1"></i>
            </div>
            <p className="text-[#778591] font-light text-[1.375rem] text-center mb-14">
              I couldn’t be happier with the transport you did. It was great and
              your car was amazing. Thank you for your great service and I will
              continue to refer friends and family to you all.
            </p>

            <h6 className="text-center uppercase tracking-[.125rem] text-[.875rem] text-[#778591]">
              Betty Finsen
            </h6>
          </div>
          <img
            src="https://quanticalabs.com/wp_themes4/autoride/wp-content/uploads/sites/2/2019/10/image_02-6.jpg?id=10494"
            className="w-6/12"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
