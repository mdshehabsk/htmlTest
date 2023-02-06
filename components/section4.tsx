import GetStartedBtn from "./get-started-btn";
import Image from "next/image";
import excersice3 from "../image/excersice3.jpg";
import vector from "../image/vector5.png";
import vector4 from "../image/vector4.png";
import vector2 from "../image/vector2.png";
import vector5 from '../image/vector6.png'
const Section4 = () => {
  return (
    <>
 <div className="mx-auto my-20 container ">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="left order-2 flex items-center justify-center relative ">
            <Image
              className="z-40 max-w-[80%] object-cover"
              src={excersice3}
              alt="no image"
              
            //   height={500}
            ></Image>
            <div className="w-[100px] h-[100px] rounded-full bg-secondary-color opacity-50 absolute top-8 left-4 -z-10"></div>
            <div className="w-[100px] h-[100px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 left-6 -z-10 "></div>
            <div className="w-[100px] h-[100px] rounded-full bg-background-blur-3 opacity-70 absolute bottom-0 right-6 -z-10 "></div>
  
            <div className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute top-6 md:-left-0 left-0 rounded-full">
              <Image src={vector5} alt="no image"></Image>
            </div>
            <div className="flex items-center justify-center bg-background-blur-3 px-2 py-2 w-[50px]  h-[50px] absolute top-6 -right-0 rounded-full">
              <Image src={vector} alt="no image"></Image>
            </div>
          <div className="count z-50 flex items-center gap-4 bg-slate-50 px-2 py-2 w-[180px]  h-[80px] rounded-md absolute bottom-4 left-0 ">
              <div className="bg-background-blur-3 rounded-full flex justify-center items-center w-10 h-10">
                <Image src={vector} alt="no image" className="w-8 h-8 " />
              </div>
              <div>
                <h3>Stretch</h3>
                <p>Your body</p>
              </div>
            </div>
          </div>
          <div className="right order-1 mb-5 lg:mb-0 ">
            <h1 className="lg:text-6xl lg:max-w-[568px] max-w-[327px] text-[28px] my-8">
            Daily morning workout in home
            </h1>
            <p className="max-w-[400px] my-6 ">
              Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
            </p>
            <div className="btn">
              <GetStartedBtn></GetStartedBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4