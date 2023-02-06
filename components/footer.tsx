const Footer = () => {
  return (
    <>
      <footer className="bg-primary-color py-20 px-8 ">
        <div className="container">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="basis-[30%]">
              <header className="text-white font-medium my-4">
                <span className="bg-white text-background-blur-1 px-4 py-2 rounded-xl ">
                  Gym
                </span>
                &nbsp; baran
              </header>
              <p className="py-4 text-white">
                We take care of your health with regular and fun exercise
              </p>
              <ul  className="flex gap-4">
                <li className="text-white bg-background-blur-1 py-1 px-2 rounded-md" ><i className='bx bx-photo-album'></i></li>
                <li className="text-white bg-background-blur-1 py-1 px-2 rounded-md" ><i className='bx bx-photo-album'></i></li>
                <li className="text-white bg-background-blur-1 py-1 px-2 rounded-md" ><i className='bx bx-photo-album'></i></li>
                <li className="text-white bg-background-blur-1 py-1 px-2 rounded-md" ><i className='bx bx-photo-album'></i></li>
                <li className="text-white bg-background-blur-1 py-1 px-2 rounded-md" ><i className='bx bx-photo-album'></i></li>
              </ul>
            </div>
            <div className="my-5" >
                <header className="text-white font-medium" >Program</header>
                <ul>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Workout
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Gym
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Cardio
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Zumba
                    </li>
                </ul>
            </div>
            <div className="my-5" >
                <header className="text-white font-medium" >Blog</header>
                <ul>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Daily stretch
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Daily workout
                    </li>
                </ul>
            </div>
            <div className="my-5" >
                <header className="text-white font-medium" >About Us</header>
                <ul>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Support
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Contact
                    </li>
                    <li className="text-slate-200 my-1 opacity-90" >
                    Address
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
