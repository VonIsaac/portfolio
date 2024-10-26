
import aboutmeSvg from '../assets/aboutme.svg'

const AboutMe = () => {
    return (
        <div className=' flex justify-evenly items-end mb-[10rem]' id='aboutMe-possition'>
            <img src={aboutmeSvg} alt="icon" className=' w-[530px]' data-aos="fade-right" id='aboutMe-img'/>
            <div  className='  w-[40%] p-3 text-left' id='colorss' data-aos="fade-left">
                <h1 className=' uppercase my-2 font-bold font-mono text-4xl ml-1 text-stone-500 leading-snug tracking-wide' id='aboutMe'>About Me</h1>

                <p className= ' leading-relaxed tracking-wide font-semibold font-mono text-lg text-stone-500 my-2 ml-1 ' id='aboutMe-paragraph'>
                    Hello, my name is <span  className='text-cyan-400 font-extrabold'>Von Isaac R. Baban</span> also known as Von, and I&apos;m a budding web developer who loves to learn and create.
                    I&apos;m excited to <span className='text-cyan-400 font-extrabold'>keep learning more</span> about contemporary web development technologies while creating user-friendly,
                    responsive websites and applications. Despite my inexperience, 
                    I&apos;m committed to honing my abilities and accepting <span className='text-cyan-400 font-extrabold'>new challenges</span> in order to advance in this industry.
                </p>
            </div>
        </div>
    )
}

export default AboutMe 
{/*shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
