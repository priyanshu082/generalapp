import React from "react";

const page = () => {
  return (
    <div className="font-comic text-white font-semibold">
      <div
        style={{ backgroundImage: "url('/sky3.jpg')" }}
        className="flex flex-col justify-between h-[40vh] items-center pt-[4vw]"
      >
        <div className="text-[2.5vw] ">THE LAYERS OF EARTH</div>
        <div className="flex flex-row justify-between">
          <img
            src="forest1.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out ml-[2vw]"
          />
          <img
            src="tree.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <h1> </h1>
          <img
            src="walking.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out mr-[5vw]"
          />
        </div>
      </div>
      <div className="h-[3vw] bg-green-600 "></div>

      <div className="flex group flex-col justify-center items-center hover:bg-[#966b21] transition-all duration-500 bg-[#763A12] py-[1vw]">
        {/* <input type="radio" name="tab" id="tab-2"/> */}
        <div className="flex flex-row justify-evenly py-[2vw] items-center">
          <img
            src="rocks.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <h1 className="text-[2.5vw]"> CRUST</h1>
          <img
            src="plant.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out "
          />
        </div>
        <div className="text-[1.5vw] font-medium hidden group-hover:flex justify-center">
          <p className="w-[90%] text-center">
            The crust is akin to the Earth's outer skin, where we reside, play,
            and embark on adventures! It's not just any skin, though; it
            comprises various rocks, reminiscent of the hard, smooth pebbles
            found at the beach. Picture the crust as a colossal puzzle, with
            land and water pieces fitting together perfectly. Sometimes,
            gleaming crystals and shiny minerals hide within the crust, waiting
            to be discovered!
          </p>
        </div>
      </div>


      <div className="flex group flex-col justify-center items-center hover:bg-[#966b21] transition-all duration-500 bg-[#AA4C0A] py-[1vw]">
        {/* <input type="radio" name="tab" id="tab-2"/> */}
        <div className="flex flex-row justify-evenly py-[2vw] items-center">
          <img
            src="charcoal.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <h1 className="text-[2.5vw]">MANTLE</h1>
          <img
            src="volcanic.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out "
          />
        </div>
        <div className="text-[1.5vw] font-medium hidden group-hover:flex justify-center">
          <p className="w-[90%] text-center">
          Beneath the crust, lies a mystical realm known as the mantle, akin to a secret underground world! The mantle's intense heat causes rocks to melt into gooey magma, akin to the hot lava often seen in movies! Occasionally, the mantle's excitement manifests in the creation of magnificent volcanoes and mountains. It's akin to a warm blanket enveloping the Earth, providing comfort and warmth
          </p>
        </div>
      </div>

      <div className="flex group flex-col justify-center items-center hover:bg-[#966b21] transition-all duration-500 bg-[#E08600] py-[1vw]">
        {/* <input type="radio" name="tab" id="tab-2"/> */}
        <div className="flex flex-row justify-evenly py-[2vw] items-center">
          <img
            src="pig-iron.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <h1 className="text-[2.5vw]"> OUTER CORE</h1>
          <img
            src="nickel.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out "
          />
        </div>
        <div className="text-[1.5vw] font-medium hidden group-hover:flex justify-center">
          <p className="w-[90%] text-center">
            The crust is akin to the Earth's outer skin, where we reside, play,
            and embark on adventures! It's not just any skin, though; it
            comprises various rocks, reminiscent of the hard, smooth pebbles
            found at the beach. Picture the crust as a colossal puzzle, with
            land and water pieces fitting together perfectly. Sometimes,
            gleaming crystals and shiny minerals hide within the crust, waiting
            to be discovered!
          </p>
        </div>
      </div>

      <div className="flex group flex-col justify-center items-center hover:bg-[#966b21] transition-all duration-500 bg-[#EFBF38]">
        {/* <input type="radio" name="tab" id="tab-2"/> */}
        <div className="flex flex-row justify-evenly py-[2vw] items-center">
          <img
            src="rocks.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out"
          />
          <h1 className="text-[2.5vw]"> INNER CORE</h1>
          <img
            src="plant.png"
            alt="spaceship"
            height="7%"
            width="7%"
            className="hover:scale-125 transition-all duration-500 ease-in-out "
          />
        </div>
        <div className="text-[1.5vw] font-medium hidden group-hover:flex justify-center">
          <p className="w-[90%] text-center">
            The crust is akin to the Earth's outer skin, where we reside, play,
            and embark on adventures! It's not just any skin, though; it
            comprises various rocks, reminiscent of the hard, smooth pebbles
            found at the beach. Picture the crust as a colossal puzzle, with
            land and water pieces fitting together perfectly. Sometimes,
            gleaming crystals and shiny minerals hide within the crust, waiting
            to be discovered!
          </p>
        </div>
      </div>

    </div>
  );
};

export default page;
