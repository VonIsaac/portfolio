import { useDispatch } from "react-redux";
import { functionsActions } from "../store/functions-slice";
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css'
import React from "react";
import gitHub from '../assets/icons8-github-50.png';
import linkEnd from '../assets/icons8-linkedin-50.png';
import faceBook from '../assets/icons8-facebook-50.png'





 const MyName = ({MyResume}) => {
  
    React.useEffect(() => {
        Aos.init({duration: 1500})
      }, []);
    
    
    const dispatch = useDispatch();
    
    const  handleDownloadPdf = () => {
        dispatch(functionsActions.downloadResume())
    }

    const handleUrl = (e, url) => {
      e.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    return(
      <>
      
        <div className=' relative bottom-28 right-36 h-screen flex justify-center items-center text-left' data-aos="fade-right">

        <div >
            <p className=' text-neutral-500 font-medium mb-1' >Hi there, I am</p>
            
            <h1 className=' text-neutral-500 font-semibold text-4xl ml-2 mb-1 font-mono' >
              <TypeAnimation
                    sequence={[
                      'Von Isaac R. Baban',
                      1000, 
                      'Front End Developer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                />
            </h1>
            
            <h1 className=' ml-2 text-neutral-500 text-3xl font-semibold mb-2'  >
              I am passionate about <span className=' text-green-500  '>creating</span> remarkable expirence on the <span className=' text-blue-400'>web.</span>
            </h1>
            <button className=" mb-3 select-none rounded ml-2 bg-blue-500 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              
              
              onClick={handleDownloadPdf}>
              {MyResume}
            </button>
            <div className=" flex gap-3 ml-2" >
                <img src={gitHub} alt="github" className=" w-[20px] cursor-pointer" onClick={(e) => handleUrl(e, 'https://github.com/VonIsaac?tab=repositories')} />
                <img src={faceBook} alt="facebook" className=" w-[20px] cursor-pointer"  onClick={(e) => handleUrl(e, 'https://www.facebook.com/von.von1323/')} />
               <img src={linkEnd} alt="linkend" className=" w-[20px] cursor-pointer" onClick={(e) => handleUrl(e, 'https://www.linkedin.com/in/vonisaac23/')} />
            </div>
        </div>
      </div>





      
  
                   
       </> 
    )
 }


export default MyName