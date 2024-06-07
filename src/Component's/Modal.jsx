import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom"
import linkend from '../assets/linekdn.png';
import fb from '../assets/fb.png';
import insta from '../assets/instagram.png'
import { useDispatch } from "react-redux";
import { functionsActions } from "../store/functions-slice";
const Modal = forwardRef(({buttons}, ref) => {
    const modal = useRef()
    useImperativeHandle(ref, () => {
        return{
            open(){
                modal.current.showModal()
            }
        }
    })


    const dispatch = useDispatch();
    const url = (e, url) => {
        e.preventDefault();
        dispatch(functionsActions.openUrlNewtab(url))
      }
    /*const url = (e, url ) => {
        e.preventDefault();

        window.open(url, '_blank', 'noopener,noreferrer')
    }*/



    return createPortal(
        <dialog ref={modal} className=" backdrop:bg-stone-950/80 p-4 pt-5 rounded-lg shadow-md w-[26%] bg-neutral-900">
            <h1 className=" pb-8 font-bold font-mono text-xl text-stone-500">Follow my Socials</h1>
            <div className=" flex justify-evenly">
                <img src={linkend} alt="icon" className=" w-[3rem] cursor-pointer" onClick={(e) => url(e, 'https://www.linkedin.com/in/vonisaac23/')}/>
                <img src={fb} alt="icon" className=" w-[3rem] cursor-pointer" onClick={(e) => url(e, 'https://www.facebook.com/von.von1323/')}/>
                <img src={insta} alt="icon" className=" w-[3rem] cursor-pointer" onClick={(e) => url(e, 'https://www.instagram.com/vnisac/')}/>   
            </div>
            <form method="dialog" className="pt-5 flex justify-end">
                <button className= " text-slate-600 font-bold bg-stone-800 py-1 rounded-lg px-2" >{buttons}</button>
            </form>
        </dialog>,
        document.getElementById("modal-root")   

    )
})

export default Modal