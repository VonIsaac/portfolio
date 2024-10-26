import { FiNavigation } from "react-icons/fi";
import person from '../assets/HoldingLaptop.svg'
const ContactMe = () => {
    return(
       <>
            <div className=" flex-col flex justify-center items-center">
                <p className=" text-neutral-500 font-extrabold mb-3 text-2xl leading-snug text-center">
                    I&apos;m open to new opportunities and part-time work. 
                    Please get in touch with me if you <br/> have any questions or simply want to say hello, and 
                    I&apos;ll try my best to respond!
                </p>

                <div className=" cursor-pointer my-9 bg-slate-900 border  py-2 px-3 rounded-lg hover:bg-neutral-950 hover:border-none ">
                    <p className=" text-zinc-400 text-xl font-bold ">
                        <a href="mailto:vonbaban1@gmail.com" className=" flex gap-1">
                            Say Hi 
                            <FiNavigation />
                        </a>
                    </p>
                </div>

                <figure>
                    <img src={person} alt="icon" className=" w-[25rem]" />
                </figure>
            </div>
       
       </>
    )
}

export default ContactMe