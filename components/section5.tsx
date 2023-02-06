import GetStartedBtn from "./get-started-btn";
import Image from "next/image";
import excersice2 from "../image/excersice2.png";
import vector from "../image/vector5.png";
import vector4 from "../image/vector4.png";
import vector2 from "../image/vector2.png";
import checkCircle from "../image/CheckCircle.png";
const Section5 = () => {
  return (
    <>
    <div className="relative py-20">
    <div className="absolute left-0 top-0 right-0 bg-main-background blur-[400px] w-[100%] h-[100%]" ></div>
      <div className="container my-10  ">
        <div className="flex flex-col md:flex-row justify-around ">
          <div className="left flex items-center justify-center relative ">
            <Image
              className="z-40 max-w-[80%] object-cover"
              src={excersice2}
              alt="no image"

              //   height={500}
            ></Image>
            <div className="w-[100px] h-[100px] rounded-full bg-secondary-color opacity-50 absolute top-8 left-4 -z-10"></div>
            <div className="w-[100px] h-[100px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 left-6 -z-10 "></div>
            <div className="w-[100px] h-[100px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 right-6 -z-10 "></div>

            <div className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute top-6 md:-left-0 left-0 rounded-full">
              <Image src={vector4} alt="no image"></Image>
            </div>
            <div className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute top-6 -right-0 rounded-full">
              <Image src={vector2} alt="no image"></Image>
            </div>
            <div className="count z-50 flex items-center gap-4 bg-slate-50 px-2 py-2 w-[180px]  rounded-md absolute bottom-4 left-0 ">
              <p className="flex items-center gap-2">
                <Image src={checkCircle} alt="no image" /> 100% Trusted
              </p>
            </div>
          </div>
          <div className="right">
            <div className="my-6 text-black text-[28px] lg:text-[46px] hover:-translate-y-1 hover:shadow-lg transition-all ">How it works?</div>
            <div className="bg-white hover:opacity-100 opacity-70 px-8 py-6 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all my-4 ">
              The body becomes sick because of rarely exercise
            </div>
            <div className="bg-white hover:opacity-100 opacity-70 px-8 py-6 rounded-lg  shadow-md hover:-translate-y-1 hover:shadow-lg transition-all my-4 ">
              Don't give up in order to get a healthy and ideal body
            </div>
            <div className="bg-white hover:opacity-100 opacity-70 px-8 py-6 rounded-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all my-4 ">
              Become addicted to the exercise that is given
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section5;
