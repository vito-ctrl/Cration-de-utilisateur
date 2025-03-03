import React from "react";

const Dashboard = () => {
    // count-down timer
    let dest = new Date("mar 31, 2024 23:59:59").getTime();
    let x = setInterval(function () {
      let now = new Date().getTime();
      let diff = dest - now;
      // Check if the countdown has reached zero or negative
      if (diff <= 0) {
        // Set the destination date to the same day next month
        let nextMonthDate = new Date();
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        // If the current month is December, set the destination date to the same day next year
        if (nextMonthDate.getMonth() === 0) {
          nextMonthDate.setFullYear(nextMonthDate.getFullYear() + 1);
        }

        dest = nextMonthDate.getTime();
        return; // Exit the function
      }

      let days = Math.floor(diff / (1000 * 100 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (days < 10) {
        days = `0${days}`;
      }

      if (hours < 10) {
        hours = `0${hours}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      // Get elements by className name
      let countdownElements = document.getElementsByClassName("countdown-element");

      // Loop through the elements and update their content
      for (let i = 0; i < countdownElements.length; i++) {
        let className = countdownElements[i].classList[1]; // Get the second className name
        switch (className) {
          case "days":
            countdownElements[i].innerHTML = days;
            break;
          case "hours":
            countdownElements[i].innerHTML = hours;
            break;
          case "minutes":
            countdownElements[i].innerHTML = minutes;
            break;
          case "seconds":
            countdownElements[i].innerHTML = seconds;
            break;
          default:
            break;
        }
      }
    }, 10);

    return (
        <section className="py-1 relative">
        <div className="w-full max-w-7x1 px-1 md:px-1 lg:px-80 mx-auto">
            <div className="w-full md:px-16 px-10 md:pt- pt-10 pb-10 bg-gray-900 rounded-2xl flex-col justify-end items-center lg:gap-28 md:gap-16 gap-10 inline-flex">
                <div className="flex-col justify-end items-center lg:gap-16 gap-10 flex">
                    
                    <div className="flex-col justify-center items-center gap-10 flex">
                        <div className="flex-col justify-start items-center gap-2.5 flex">
                            <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">Coming Soon</h2>
                            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">Just 20 days remaining until the big reveal of our new product!</p>
                        </div>
                        <div className="flex items-start justify-center w-full gap-2 count-down-main">
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element days text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">DAYS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element hours text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">HRS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element minutes text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">MINS</p>
                            </div>
                            <h3 className="w-3 text-center text-gray-500 text-2xl font-medium font-manrope leading-9">:</h3>
                            <div className="timer flex flex-col gap-0.5">
                                <div className="">
                                    <h3 className="countdown-element seconds text-center text-white text-2xl font-bold font-manrope leading-9"></h3>
                                </div>
                                <p className="text-center text-gray-500 text-xs font-normal leading-normal w-full">SECS</p>
                            </div>
                        </div>
                        <div className="w-full flex-col justify-center items-center gap-5 flex">
                            <h6 className="text-center text-emerald-400 text-base font-semibold leading-relaxed">Launched Date: April 6, 2025</h6>
                            <div className="justify-center items-center gap-2.5 flex sm:flex-row flex-col">
                                <input type="text" className="w-80 focus:outline-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed h-10 bg-white rounded-lg border border-gray-200 justify-start items-center gap-1.5 inline-flex" placeholder="Type your mail..."/>
                                <button className="sm:w-fit w-full px-3.5 py-2 bg-emerald-400 hover:bg-emerald-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">Notify Me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-snug">Get in touch with us: <a href="https://mail.google.com/mail/u/0/#search/aymane.elkhadraoui1%40gmail.com?compose=new" className="hover:text-gray-100 transition-all duration-700 ease-in-out"> aymane.elkhadraoui1@gmail.com</a></p>
            </div>
        </div>
    </section>                                            
    )
};

export default Dashboard;