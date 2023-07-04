import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(16); // Nilai awal value
  const [checked, setChecked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // mendapatkan nilai lebar lalyar pengguna
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Membersihkan event listener saat komponen akan unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Merubah value ketika range digeser
  const handleRange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
  };

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  // Mengatur panjang dari progres range
  const sliderValue = ((value - 10) / (22 - 10)) * 100; // ((value - minValue) / (maxValue - minValue) * 100)

  return (
    <div className="flex flex-col items-center h-screen bg-mainBackground">
      <div className="bg-circle absolute w-48 h-48 bg-no-repeat top-6 ml-10"></div>
      <div className="text-center mt-4 translate-y-3/4">
        <h1 className="font-bold text-3xl">Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
      </div>
      <div className="bg-pricingComponentBackground drop-shadow-xl w-2/5 h-3/5 rounded-xl flex flex-col translate-y-1/2 absolute max-lg:w-3/4 max-md:w-11/12 max-sm:h-4/5">
        <div className="flex justify-around mt-10 items-center max-sm:flex-col">
          <p className="font-semibold text-gray-500 tracking-wider text-sm">
            100K PAGEVIEWS
          </p>
          <div className="flex items-center max-sm:absolute max-sm:mt-[200px]">
            <h1 className="text-4xl font-bold text-black">${value}.00</h1>
            <p className="font-semibold text-gray-500 tracking-wider text-sm ml-1">
              {" "}
              / month
            </p>
          </div>
        </div>
        <input
          type="range"
          min="10"
          max="22"
          value={value}
          onChange={handleRange}
          className="self-center mt-8"
          style={{
            background: `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderValue}%, #ccc ${sliderValue}%)`,
          }}
        />

        <div className="flex mt-10 justify-end text-sm mr-9 max-sm:mt-28">
          <div className="flex gap-3 items-center">
            <p>Monthly Billing</p>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer ${
                  checked ? "ml-4" : ""
                }`}
                checked={checked}
                onChange={toggleSwitch}
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 pointer"
              ></label>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <p>Yearly Billing</p>
            <p className="text-xs bg-discountBackground text-discountText px-2 rounded-xl">
              {windowWidth <= 640 ? "25%" : "25% discount"}
            </p>
          </div>
        </div>
        <hr className="h-1 w-full mt-8" />
        <div className="flex mt-8 justify-around items-center max-sm:flex-col max-sm:h-52">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 w-auto">
              <Image src="./icon-check.svg" width={15} height={15} />
              <p>Unlimited website</p>
            </div>
            <div className="flex gap-3 w-auto">
              <Image src="./icon-check.svg" width={15} height={15} />
              <p>100% data ownership</p>
            </div>
            <div className="flex gap-3 w-auto">
              <Image src="./icon-check.svg" width={15} height={15} />
              <p>Email reports</p>
            </div>
          </div>
          <button className="bg-textCtaBackground py-2 px-6 rounded-full text-white text-sm max-sm:px-12">
            Start my trial
          </button>
        </div>
      </div>
    </div>
  );
}
