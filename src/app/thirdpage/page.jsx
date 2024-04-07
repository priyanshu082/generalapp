import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/thirdpage/bg2.png')" }}
      className="flex flex-col justify-center items-center p-[3vw]"
    >
      <div className="bg-[#fff] px-[1vw] text-[3vw] font-bold">
        BALANCE DIET
      </div>
      <div className="px-[1vw] py-[0.75vw] animate-[fadeIn_1s_ease-in-out_infinite,colorChange_5s_infinite] tracking-[0.3vw] text-[1.05vw] my-[3vw] bg-[#fff]">
        CLICK ANYWHERE ON THE PICTURE!
      </div>

      <div className="w-[90%] bg-[#FF7F50] h-[55vh] flex flex-row justify-around mb-[2vw]">
            <div className="w-[80%] pt-[4vw] px-[2vw]">
                <div className="text-[1.5vw] font-semibold">
                    PROTIEN
                </div>
                <div className="text-[1.1vw] mt-[2vw] font-medium">
                Proteins are crucial macromolecules found in all living organisms, composed of amino acids linked by peptide bonds. They perform diverse functions, including enzymatic catalysis, structural support, transport, signaling, and immune response regulation. Dietary proteins, obtained from various sources, are broken down into amino acids during digestion, which are then utilized for tissue growth, repair, and maintenance. Adequate and balanced protein intake is essential for overall health and bodily functions.
                </div>

            </div>
            <Link href="/" className="flex w-[40%] justify-center items-center">
                <img src="/thirdpage/protiens.jpeg" className="w-[85%] shadow-xl shadow-black"/>
            </Link>
      </div>

      <div className="w-[90%] bg-[#ef20d0] h-[55vh] flex flex-row justify-around mb-[2vw]">
            <div className="w-[80%] pt-[4vw] px-[2vw]">
                <div className="text-[1.5vw] font-semibold">
                CARBOHYDRATES
                </div>
                <div className="text-[1.1vw] mt-[2vw] font-medium">
                Carbohydrates are vital for providing energy in a diet. They come in two types: simple (sugars) and complex (starches and fiber). Opting for complex carbohydrates like whole grains and vegetables over refined sugars promotes stable blood sugar levels and digestive health. However, overconsumption of refined carbohydrates can lead to weight gain and chronic diseases. Moderation and choosing nutrient-dense sources are key to maintaining a balanced diet.
                </div>

            </div>
            <Link href="/" className="flex w-[40%] justify-center items-center">
                <img src="/thirdpage/carbohydrates.webp" className="w-[85%] shadow-xl shadow-black"/>
            </Link>
      </div>

      <div className="w-[90%] bg-[#1ea8da] h-[55vh] flex flex-row justify-around mb-[2vw]">
            <div className="w-[80%] pt-[4vw] px-[2vw]">
                <div className="text-[1.5vw] font-semibold">
                FATS
                </div>
                <div className="text-[1.1vw] mt-[2vw] font-medium">
                Dietary fats are essential for overall health, providing energy, aiding in vitamin absorption, and supporting various bodily functions. While saturated and trans fats can have negative health effects when consumed excessively, unsaturated fats from sources like nuts, seeds, and fatty fish offer numerous benefits, including improved heart health. A balanced diet includes moderate amounts of healthy fats while minimizing intake of unhealthy fats, emphasizing quality and quantity for optimal well-being
                </div>

            </div>
            <Link href="/" className="flex w-[40%] justify-center items-center">
                <img src="/thirdpage/fat1.jpeg" className="w-[85%] h-[75%] shadow-xl shadow-black"/>
            </Link >

      </div>

      <div className="w-[90%] bg-[#ed3290] h-[55vh] flex flex-row justify-around mb-[2vw]">
            <div className="w-[80%] pt-[4vw] px-[2vw]">
                <div className="text-[1.5vw] font-semibold">
                VITAMIN
                </div>
                <div className="text-[1.1vw] mt-[2vw] font-medium">
             Proteins are crucial macromolecules found in all living organisms, composed of amino acids linked by peptide bonds. They perform diverse functions, including enzymatic catalysis, structural support, transport, signaling, and immune response regulation. Dietary proteins, obtained from various sources, are broken down into amino acids during digestion, which are then utilized for tissue growth, repair, and maintenance. Adequate and balanced protein intake is essential for overall health and bodily functions.
                </div>

            </div>
            <Link href="/" className="flex w-[40%] justify-center items-center">
                <img src="/thirdpage/vitamins.jpeg" className="w-[85%] shadow-xl shadow-black"/>
            </Link>
      </div>

      <div className="w-[90%] bg-[#daa520] h-[55vh] flex flex-row justify-around ">
            <div className="w-[80%] pt-[4vw] px-[2vw]">
                <div className="text-[1.5vw] font-semibold">
                MINERALS
                </div>
                <div className="text-[1.1vw] mt-[2vw] font-medium">
                Minerals are vital for a balanced diet, supporting functions like bone health, muscle function, and immune system strength. Key minerals include calcium for bones, iron for oxygen transport, and potassium for fluid balance. Eating a variety of foods rich in minerals, such as fruits, vegetables, whole grains, and lean proteins, ensures overall well-being. Consulting a healthcare professional helps tailor mineral intake to individual needs, promoting optimal health and vitality.
                </div>

            </div>
            <Link href="/" className="flex w-[40%] justify-center items-center">
                <img src="/thirdpage/minerals.jpg" className="w-[85%] shadow-xl shadow-black"/>
            </Link>
      </div>

    </div>
  );
};

export default page;
