import Image from "next/image";
import header from "../../assets/header.webp";
export default function Banner() {
  return (
    <>
      {/* banner section start  */}
      <header className="h-[500px] relative">
        <Image
          width={500}
          height={500}
          src={header}
          alt="heade images"
          className="w-full h-full bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute left-0 top-0 h-full w-full flex items-end">
          <div className="mb-5  w-11/12 lg:w-10/12 max-w-7xl mx-auto text-white ">
            <h2 className="text-2xl lg:text-3xl font-serif">
              Introducing LWS Shop Center
            </h2>
            <p>Your whole week at a glance</p>
            <button className="bg-[#ffd160] hover:bg-[#e4be60] border w-60 mt-2 py-3 rounded-full text-center text-black">
              Get the Weekly Kit
            </button>
          </div>
        </div>
      </header>
      {/* banner section end  */}
    </>
  );
}
