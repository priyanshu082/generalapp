import React from 'react'

const Card = ({data}) => {
  
  return (
    <div 
    className={`group flex flex-col bg-[${data.color}] hover:bg-blue-800 py-[2vw]`}>
    {/* <input type="radio" name="tab" id="tab-1" /> */}
    <div  className="flex flex-row justify-around items-center mb-[2vw]">
      <p className="text-[1.5vw]">{data.temperature}</p>
      <img
        src={data.img1}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <h1 className="text-[2.5vw]"> {data.layer}</h1>
      <img
        src={data.img2}
        alt="spaceship"
        height="10%"
        width="10%"
        className="hover:scale-125 transition-all duration-500 ease-in-out"
      />
      <p> {data.distance}</p>
    </div>
    <div className="text-[1.7vw] group-hover:flex hidden transition-opacity duration-500 delay-500 justify-center ">
      <p className="text-center w-[93%] flex justify-center items-center">
        {data.content}
      </p>
    </div>
  </div>
  )
}

export default Card