import IntProg from './Png/IntProg.png'

const InformationStudent = ({onClick, GitHub}) => {
    return (
        <div className='  border w-[55rem] h-[25rem] p-1 ml-[7rem] mb-[8rem]  bg-gray-800 border-none rounded-2xl  px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' data-aos = 'fade-right' data-aos-offset="500" data-aos-duration="500">
        <div className=' flex gap-10 justify-around items-center h-[23rem]'>
            <div>
                <h1 className=  ' tracking-wide text-3xl text-neutral-100 uppercase text-center font-extrabold mb-4 '>
                    Information Student
                </h1>

                <p className='  leading-relaxed tracking-wide text-center text-zinc-400 font-semibold'>
                    This is a <span className='text-cyan-400 font-extrabold'>MERN Stack Web Application</span> build in React JS and Tailwind 
                    CSS for <span className='text-cyan-400 font-extrabold'>Front End</span> and Express JS for <span className='text-cyan-400 font-extrabold'>Backend</span> and MongoDB for Database 
                    when the user upon click the button they can see the details of data inclucding  name, age addres etc.
                </p>

                <ul className=' flex mt-3 justify-around mb-6'>
                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        React Js
                    </li>
                    <li className=' bg-neutral-100 font-medium rounded-2xl text-base px-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        MongoDB
                    </li>
                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        Express Js
                    </li>

                    
                </ul>

                <ul  className=' flex mt-3 justify-around mb-6'>
                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        Javascript
                    </li>
                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        Tailwind CSS 
                    </li>

                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                        Mongoose
                    </li>
                </ul>

                <div className=' flex justify-center items-center gap-2 cursor-pointer ' onClick={onClick}>
                    <img src={GitHub} alt="github" className=' w-[25px]' />
                    <p className=' uppercase font-medium text-zinc-400 hover:text-slate-500 hover:ease-in-out hover:duration-500 leading-relaxed tracking-wide'>View</p>
                </div>
            </div>

            <div>
                <img src={IntProg} alt="icon"  className='  w-[95rem]'/>
            </div>
        </div>
    </div>
    )
}

export default InformationStudent