import shoes from '../assets/shoesapps.png';
import GitHub from '../assets/ICONS/GitHub.png'
import TaskApp from './All-Projects/Task-app';
import InterActive from './All-Projects/Inter-Active';
import AirJordan from './All-Projects/AirJordan';
import Portfolio from './All-Projects/Portfolio';
const Project = () => {

    const handleProjectGithub = (e, url) => {
        e.preventDefault()
        window.open(url, '_blank', 'noopener,noreferrer')
      }

    return(
        <>       
            <div>
                <h1 className=' text-indigo-400 uppercase text-5xl font-extrabold mb-16 ml-[8rem] font-mono ' data-aos = 'fade-down' id='myProject-h1'>
                    My Project's
                </h1>

                <div className='  border w-[55rem] h-[25rem] p-1 ml-[7rem] mb-[7rem] bg-gray-800 border-none rounded-2xl px-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' id='myProject-1' data-aos = 'fade-right' data-aos-offset="500" data-aos-duration="500">
                    <div className=' flex gap-10 justify-around items-center h-[23rem]' id='project1-positions'>

                        <div>
                            <h1 className= ' text-3xl text-neutral-100 uppercase text-center font-extrabold mb-2'id='myProject1-title'>
                            Shoes Application Cart
                            </h1>
                            <p className=' text-center text-zinc-400 font-semibold ' id='myProject1-description'>
                                This is a <span className=' text-blue-500 font-extrabold'>Full Stack</span> Application build in React Js and Tailwind CSS for Front End and Express Js for Backend.
                                I send <span className=' text-blue-300 font-extrabold'>POST requests</span> to the backend and communicate with it effectively by handling fetch data.
                            </p>
                            
                            <ul className=' flex mt-3 justify-around mb-6'>
                                <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]' id='myProject1-reactjs'>
                                    React Js
                                </li>
                                <li className=' bg-neutral-100 font-medium rounded-2xl text-base px-2 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                    Tailwind CSS
                                </li>
                                <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                    Javascript
                                </li>
                                <li className=' bg-neutral-100 font-medium px-2 rounded-2xl text-base shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]'>
                                    Express JS
                                </li>
                                
                            </ul> 

                            <div className=' flex justify-center items-center gap-2 cursor-pointer ' onClick={(e) => handleProjectGithub(e, 'https://github.com/VonIsaac/shoes-app-react/tree/main')}>
                            <img src={GitHub} alt="github" className=' w-[25px]' id='myProject1-img'/>
                            <p className=' uppercase font-medium text-zinc-400 hover:text-slate-500 hover:ease-in-out hover:duration-500 '>View </p>
                            </div>
                        </div>

                            

                        <div>
                            <img src={shoes} alt="icon" className=' w-[95rem] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]' />
                        </div>
                    </div>
                </div>                 
            </div>

                {/*------- */}
                <TaskApp 
                    onClick={(e) => handleProjectGithub(e, 'https://github.com/VonIsaac/task-react-app/tree/main')} 
                    GitHub={GitHub} 
                />
                {/*------- */}

                <InterActive 
                    onClick={(e) => handleProjectGithub(e, 'https://github.com/VonIsaac/interactive-comments-section-react')} 
                    GitHub={GitHub}
                />

                {/*------- */}

                <AirJordan 
                    onClick = {(e) => handleProjectGithub(e, 'https://github.com/VonIsaac/landingpage-shoeapp-withfunctionality-react')}
                    GitHub = {GitHub} 
                />

                <Portfolio GitHub={GitHub} onClick={(e) => handleProjectGithub(e, 'https://github.com/VonIsaac/portfolio' )} />
        </>      

    )
}


export default Project