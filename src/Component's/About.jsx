import aboutmeSvg from '../assets/aboutme.svg'

const AboutMe = () => {
    return (
        <div className=' flex justify-evenly items-end'>
            <img src={aboutmeSvg} alt="icon" className=' w-[400px]'/>
            <div className=' border bg-neutral-200 w-[40%]'>
                <h1>About Me</h1>
                <p>Hello everyone! Hi am Von Isaac R. Baban you can call me Von. 
                    In my first year college i started learning HTML CSS i learn this
                    fundamentals for my whole freash man year, After all that i start learning 
                    Javascript in my second year of college and also learn some tolls like Git, Firebase etc, 

                </p>
            </div>
        </div>
    )
}

export default AboutMe 