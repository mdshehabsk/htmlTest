import vector3 from "../image/vector3.png";
import vector6 from "../image/vector6.png";
import vector5 from "../image/vector5.png";
import Image from "next/image";
const Section2 = () => {
  return (
    <>
      <div className="">
        <div className="container bg-gradient-1  py-10 px-8 rounded-xl ">
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-center ">
          <div className="flex items-center gap-8">
            <div className="left">
              <div className="icon  w-16 h-16 bg-[#847FF3]  flex items-center justify-center rounded-md ">
                <Image src={vector3} alt="no image" className="z-20" />
              </div>
            </div>
            <div className="right text-white max-w-[180px] text-xl">
              <h3>Get that 11 line in 30 days</h3>
              <p className="text-slate-200">
                learn more <i className="bx bx-right-arrow-alt"></i>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="left">
              <div className="icon  w-16 h-16 bg-[#847FF3]  flex items-center justify-center rounded-md ">
                <Image src={vector6} alt="no image" className="z-20" />
              </div>
            </div>
            <div className="right text-white max-w-[180px] text-xl">
              <h3>Get that 11 line in 30 days</h3>
              <p className="text-slate-200">
                learn more <i className="bx bx-right-arrow-alt"></i>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="left">
              <div className="icon  w-16 h-16 bg-[#847FF3]  flex items-center justify-center rounded-md ">
                <Image src={vector5} alt="no image" className="z-20" />
              </div>
            </div>
            <div className="right text-white max-w-[180px] text-xl">
              <h3>Get that 11 line in 30 days</h3>
              <p className="text-slate-200">
                learn more <i className="bx bx-right-arrow-alt"></i>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
