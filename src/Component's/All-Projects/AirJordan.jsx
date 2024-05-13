import airJordans from '../All-Projects/Png/AirJordan.png'
const AirJordan = ({onClick, GitHub}) => {
    return (
        <div className=' flex justify-center '>
                    <div className=' relative left-[17.5%] border bg-gray-800 p-1  mb-[8rem] w-[55rem] h-[25rem] border-none rounded-2xl px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' data-aos = 'fade-left' data-aos-offset="500" data-aos-duration="500">
                        <div className=' flex justify-around items-center gap-10 h-[23rem]'>
                            <div>
                                <img src={airJordans} alt="icon" className=' w-[95rem]'/>
                            </div>


                            <div>
                                <h1 className= ' text-3xl text-neutral-100 uppercase text-center font-extrabold mb-2'>
                                    Air Jordan 1 Zoom Cart Application 
                                </h1>

                                <p className=' text-center text-zinc-400 font-semibold'>
                                    The <span className=' text-blue-500 font-extrabold'>Air Jordan website</span> are more functionality, you can also see the 
                                    the image when you click it and you can slide the image and see different image.
                                    You can also add the quantity and when you go to the cart, <span className=' text-blue-300 font-extrabold'>the quantity data</span> are saved.
                                </p>

                                <ul className=' flex mt-3 justify-around mb-6'>
                                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                        React Js
                                    </li>

                                    <li className=' bg-neutral-100 font-medium rounded-2xl text-base px-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                        Tailwind CSS
                                    </li>

                                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                        Javascript
                                    </li>
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
};


export default AirJordan