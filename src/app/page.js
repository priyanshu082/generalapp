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

      {data.map((data,index) => (
        <div key={index}>
          <Card data={data}/>
        </div>
      ))}
    </div>
  );
}
