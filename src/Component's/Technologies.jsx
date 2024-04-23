
import { mytechnologies } from "../skilssData/mySkills";
export default function (){
    return(
       <>
        {mytechnologies.map((tech, index) => (
            <ul key={index} className=" flex">
                <li>
                    <img src={tech.img} alt={tech.alt} className=' w-[50px]' />
                </li>
            </ul>
        ))}
       
       </>
    )
}