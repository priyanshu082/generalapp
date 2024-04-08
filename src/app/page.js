import Card from "@/components/Card";
import { data } from "../utils/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col font-comic text-white font-semibold ">
      <div
        style={{ backgroundImage: "url('/solar7.jpg')" }}
        className="bg-black bg text-[3vw] flex justify-center p-[1vw]"
      >
        <h1>The Layer of Atmosphere</h1>
      </div>

      <div 
    className={`group flex flex-col bg-[#2E5984] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data[0].temperature}</p>
      <img
        src={data[0].img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data[0].layer}</h1>
      <img
        src={data[0].img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data[0].distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data[0].content}
      </p>
    </div>
  </div>

      <div 
    className={`group flex flex-col bg-[#528AAE] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data[1].temperature}</p>
      <img
        src={data[1].img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data[1].layer}</h1>
      <img
        src={data[1].img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data[1].distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data[1].content}
      </p>
    </div>
  </div>

  <div 
    className={`group flex flex-col bg-[#73A5C6] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data[2].temperature}</p>
      <img
        src={data[2].img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data[2].layer}</h1>
      <img
        src={data[2].img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data[2].distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data[2].content}
      </p>
    </div>
  </div>

  <div 
    className={`group flex flex-col bg-[#91BAD6] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data[3].temperature}</p>
      <img
        src={data[3].img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data[3].layer}</h1>
      <img
        src={data[3].img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data[3].distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data[3].content}
      </p>
    </div>
  </div>
  
  <div 
    className={`group flex flex-col bg-[#BCD2E8] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data[4].temperature}</p>
      <img
        src={data[4].img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data[4].layer}</h1>
      <img
        src={data[4].img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data[4].distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data[4].content}
      </p>
    </div>
  </div>



          {/* <Card data={data[0]}/>
          <Card data={data[1]}/>
          <Card data={data[2]}/>
          <Card data={data[3]}/> */}
      
  
    </div>
  );
}
