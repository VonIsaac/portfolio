
import taskApp from '../All-Projects/Png/task-app.png'
const TaskApp = ({onClick, GitHub}) => {
    return(
        <div className=' flex justify-center '>
                    <div className=' relative left-[17.5%] border bg-gray-800 p-1  mb-[8rem] w-[55rem] h-[25rem] border-none rounded-2xl px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' data-aos = 'fade-left' data-aos-offset="500" data-aos-duration="500">
                        <div className=' flex justify-around items-center gap-10 h-[23rem]'>

                            <div>
                                <img src={taskApp} alt="icon" className='  w-[95rem]' />
                            </div>

                            <div>
                           

                                <h1 className= ' text-3xl text-neutral-100 uppercase text-center font-extrabold mb-2'>
                                    Task Application React JS
                                </h1>

                                <p className=' text-center text-zinc-400 font-semibold' >
                                    When using this app allows users to <span className=' text-blue-500 font-extrabold'>input a task and save it</span>, The task indicates the title for a 
                                    task title, the description, and the due date, also when u save it without inputting any task 
                                    <span className=' text-blue-300 font-extrabold'> the app will trigger and show a modal.</span>
                                </p>


                                <ul className=' flex mt-3 justify-around mb-6'>
                                    <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                        React JS
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

export default TaskApp