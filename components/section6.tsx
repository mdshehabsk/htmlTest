import Image from 'next/image'
import program1 from '../image/programes/program1.png'
import program2 from '../image/programes/program2.png'
import program3 from '../image/programes/program3.png'
import program4 from '../image/programes/program4.png'
import program5 from '../image/programes/program5.png'
import program6 from '../image/programes/program6.png'

const Section6 = () => {
  return (
    <>
     <div className='relative' >
        <div className="">
            
        </div>
     <div className="container my-20">
        <div className="flex my-10 flex-col justify-start md:flex md:justify-center ">
          <div className="flex justify-center">
            <h1 className="flex text-[28px] lg:text-[46px] text-center">
              Programs that can 
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="flex text-[28px] lg:text-[46px] text-center">
              be taken
            </h1>
          </div>
        </div>
        <div className="grid md:gap-12 gap-4 grid-cols-1 sm:grid-cols-3 md:grid-rows-2">
            <div className='flex gap-6 items-center ' >
                <div className="icon bg-background-blur-4 max-w-[70px] max-h-[70px] rounded-full p-3">
                    <Image src={program1} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >Gets ABS in 2 weeks</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
                <div className="icon bg-background-blur-3 max-w-[70px] max-h-[65px] rounded-full p-3">
                    <Image src={program2} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >25 Mins full body workout</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
                <div className="icon bg-background-blur-1 max-w-[70px] max-h-[65px] rounded-full p-3">
                    <Image src={program3} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >25 Mins full body workout</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
                <div className="icon bg-background-blur-1 max-w-[70px] max-h-[65px] rounded-full p-3">
                    <Image src={program4} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >15 Mins full body fat burn</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
            <div className="icon bg-background-blur-3 max-w-[70px] max-h-[65px] rounded-full p-3">
                    <Image src={program5} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >25 Mins HIIT workout</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>
            <div className='flex gap-6 items-center ' >
                <div className="icon bg-background-blur-3 max-w-[70px] max-h-[65px] rounded-full p-3">
                    <Image src={program6} alt='' />
                </div>
                <div>
                    <h3 className='font-semibold' >Intense lower Abs workout</h3>
                    <p>Exercise is a very important need for our body. </p>
                </div>
            </div>

        </div>
      </div>
     </div>
    </>
  );
};

export default Section6;
