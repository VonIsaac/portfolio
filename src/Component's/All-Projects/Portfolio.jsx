import myPortfolio from '../All-Projects/Png/portfolio.png';


const Portfolio = ({onClick, GitHub}) => {
    return(
        <div className=' flex justify-center items-center'>
            <div className='border bg-gray-800 p-2  mb-[8rem] w-[52rem] h-[29rem] border-none rounded-2xl px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' data-aos="flip-up" data-aos-offset="500" data-aos-duration="500"> 
                
                <div>

                    <div className='flex justify-center items-center' >
                        <img src={myPortfolio} alt="icon" className='  w-[29rem] mt-2' />
                    </div>

                    <div>
                        <h1 className= ' text-3xl text-neutral-100 uppercase text-center font-extrabold mb-2 my-2'>
                            My Portfolio Website
                        </h1>
                        <p className=' text-center text-zinc-400 font-semibold'>
                            Welcome to the webpage for my <span className=' text-blue-500 font-extrabold'>professional portfolio!</span> 
                            This website is intended to display my  <span className=' text-blue-300 font-extrabold'>work,communicate my personal brand,</span> 
                            and give a thorough rundown of my qualifications. 
                        </p>

                        <ul className=' flex justify-evenly mt-4 mb-5'>
                            <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>React Js</li>
                            <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>Redux</li>
                            <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>TypeScript</li>
                            <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>Javascript</li>
                            <li className=' bg-neutral-100 font-medium rounded-2xl text-base px-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>Tailwind CSS</li>
                        </ul>

                        <div className=' flex justify-center items-center gap-2 cursor-pointer ' onClick={onClick}>
                            <img src={GitHub} alt="github" className=' w-[25px]' />
                            <p className=' uppercase font-medium text-zinc-400 hover:text-slate-500 hover:ease-in-out hover:duration-500 '>View</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Portfolio