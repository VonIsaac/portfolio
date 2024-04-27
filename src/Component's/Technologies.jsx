
import { mytechnologies } from "../skilssData/mySkills";
export default function ({...props}){
    return(
       <>
        {mytechnologies.map((tech, index) => (
            <ul key={index} className=" flex cursor-pointer" >
                <li className="bg-gray-800 py-1 px-1 rounded-md h-13 hover:bg-zinc-800" {...props}>
                    <img src={tech.img} alt={tech.alt} className=' w-[50px] mt-2' />
                </li>
            </ul>
        ))}
       
       </>
    )
}