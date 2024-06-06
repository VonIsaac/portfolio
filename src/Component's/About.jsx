
import aboutmeSvg from '../assets/aboutme.svg'

const AboutMe = () => {
    return (
        <div className=' flex justify-evenly items-end mb-[10rem]'>
            <img src={aboutmeSvg} alt="icon" className=' w-[530px]' data-aos="fade-right"/>
            <div className=' border bg-neutral-200 w-[40%]  p-3 rounded-xl border-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]' id='colorss' data-aos="fade-left" data-aos-offset="450"
                data-aos-easing="ease-in-sine">
                <h1 className=' uppercase my-2 font-bold font-mono text-4xl ml-1 text-slate-200 leading-snug'>About Me</h1>

                <p className=' font-semibold font-mono text-lg text-slate-200 my-2 ml-1 leading-snug'>
                    Hi to all of you! Hello, I'm <span id='name' className=''>Von Isaac R. Baban</span>,
                    also known as Von. I began studying <span className=' text-[rgb(58,129,27)]'> HTML and CSS</span> in my first year in college
                    and I spent the entire freshman year learning these foundations.
                </p>

                <p className=' font-semibold font-mono text-lg text-slate-200 my-3 ml-1 leading-snug'>
                    After all of that, in my second year of college I began learning <span className='text-[rgb(247,223,30)]'>Javascript</span>,
                    i also learn various tools like <span className=' text-[rgb(210,92,85)]'>Git, Firebase,</span> etc
                    and I construct projects. Once I feel confident using <span className='text-[rgb(247,223,30)]'>Javascript </span>
                    i begin learning <span className=' text-[rgb(97,218,251)]'>React Js,</span> which i am presently learning.
                </p>

                <p className=' font-semibold font-mono text-lg text-slate-200 my-2 ml-1 leading-snug'>
                    Learning <span className=' text-[rgb(97,218,251)]'>React Js</span> has been a lot of fun, 
                    and I've built some amazing projects like the <span className=' text-[rgb(37,20,163)]'>Task App</span>. 
                    Compared to vanilla <span className='text-[rgb(247,223,30)]'>Javascript,</span> I found it easier to construct a project.
                </p>
            </div>
        </div>
    )
}

export default AboutMe 
{/*shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
