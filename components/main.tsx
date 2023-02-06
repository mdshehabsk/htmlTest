import nike from "../image/nike.png";
import adidas from "../image/adidas.png";
import puma from "../image/puma.png";
import reebok from "../image/reebok.png";
import excersice from '../image/excersice.png'
import vector from '../image/vector5.png'
import vector4 from '../image/vector4.png'
import vector2 from '../image/vector2.png'
import Image from "next/image";
const Main = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main-wrapper flex flex-col md:flex-row items-center justify-between md:px-8 ">
            <div className="left  ">
              <h1 className="lg:text-6xl lg:max-w-[568px] max-w-[327px] text-[28px] my-8">
                Healthy in side
                <span className="text-secondary-color"> fresh</span> out side
              </h1>
              <p className="max-w-[400px] my-6 ">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine.
              </p>
              <div className="buttons gap-2 flex my-4">
                <button className="shadow-md max-w-[300px]  md:basis-1/4 p-2 flex justify-between bg-primary-color text-slate-50  rounded-md">
                  Get Started
                  <i className="bx bx-chevron-right px-1 py-1 bg-slate-50 text-black rounded-full "></i>
                </button>
                <button className=" md:flex-initial flex gap-2 items-center p-2 bg-slate-50 text-primary-color  rounded-md ">
                  <i className="bx bx-play bg-primary-color text-slate-50  px-1 py-1 rounded-full"></i>
                    Learn more
                </button>
              </div>
              <div className="brand my-6">
                <h2 className="mb-4" >brand</h2>
                <div className="flex gap-8 md:justify-start justify-center ">
                  <Image src={nike} alt="no image" width={60} height={30} />
                  <Image src={adidas} alt="no image" width={60} height={30} />
                  <Image src={puma} alt="no image" width={60} height={30} />
                  <Image src={reebok} alt="no image" width={60} height={30} />
                </div>
              </div>
            </div>
            <div className="right mr-10 relative  ">
                <Image className="z-40" src={excersice} alt='no image' height={500} ></Image>
                <div className="w-[300px] h-[300px] rounded-full bg-secondary-color opacity-50 absolute top-8 -left-12 -z-10"></div>
                <div className="w-[200px] h-[200px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 -left-12 -z-10 " ></div>
                <div className="w-[200px] h-[200px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 -right-12 -z-10 " ></div>
                <div className="count flex items-center gap-4 bg-slate-50 px-2 py-2 w-[180px]  h-[80px] rounded-md absolute top-6 md:-left-20 -left-10 ">
                    <div className='bg-background-blur-2 rounded-full flex justify-center items-center w-10 h-10'  >

                   <Image src={vector} alt='no image' className="w-8 h-8 "/>
                    </div>
                   <div>
                    <h3>150+</h3>
                    <p>member</p>
                   </div>
                </div>
                <div  className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute bottom-6 md:-left-20 -left-10 rounded-full">
                    <Image src={vector4} alt='no image' ></Image>
                </div>
                <div  className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute top-6 -right-10 rounded-full">
                    <Image src={vector2} alt='no image' ></Image>
                </div>
                <div className="count flex flex-col items-center  bg-slate-50 rounded-md absolute bottom-0 -right-10 w-[200px]  p-2">
                    <div className="w-[50px] h-[50px] bg-secondary-color rounded-full mb-2" ></div>
                <h2 className="font-medium" >Md shehab</h2>
                    <p>Trainee</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
