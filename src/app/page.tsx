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
    </>
  );
}
