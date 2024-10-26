
import aboutmeSvg from '../assets/aboutme.svg'

const AboutMe = () => {
    return (
        <div className=' flex justify-evenly items-end mb-[10rem]' id='aboutMe-possition'>
            <img src={aboutmeSvg} alt="icon" className=' w-[530px]' data-aos="fade-right" id='aboutMe-img'/>
            <div  className='  w-[40%] p-3 text-left' id='colorss' data-aos="fade-left">
                <h1 className=' uppercase my-2 font-bold font-mono text-4xl ml-1 text-stone-500 leading-snug' id='aboutMe'>About Me</h1>

                <p className=' font-semibold font-mono text-lg text-stone-500 my-2 ml-1 leading-snug' id='aboutMe-paragraph'>
                    Hi to all of you! Hello, I'm <span id='name' className='text-cyan-400'>Von Isaac R. Baban</span>,
                    also known as Von. I began studying <span className=' text-cyan-400'> HTML and CSS</span> in my first year in college
                    and I spent the entire freshman year learning these foundations.
                </p>

                <p className=' font-semibold font-mono text-lg text-stone-500 my-3 ml-1 leading-snug' id='aboutMe-paragraph'>
                    After all of that, in my second year of college I began learning <span className='text-cyan-400'>Javascript</span>,
                    i also learn various tools like <span className=' text-cyan-400'>Git, Firebase,</span> etc
                    and I construct projects. Once I feel confident using <span className='text-cyan-400'>Javascript </span>
                    i begin learning <span className=' text-cyan-400'>React Js,</span> which i am presently learning.
                </p>

                <p className=' font-semibold font-mono text-lg text-stone-500 my-2 ml-1 leading-snug' id='aboutMe-paragraph'>
                    Learning <span className=' text-cyan-400'>React Js</span> has been a lot of fun, 
                    and I've built some amazing projects like the <span className=' text-cyan-400'>Task App</span>. 
                    Compared to vanilla <span className='text-cyan-400'>Javascript,</span> I found it easier to construct a project.
                </p>
            </div>
        </div>
    )
}

export default AboutMe 
{/*shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
