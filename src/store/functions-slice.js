import { createSlice} from "@reduxjs/toolkit";
import myResume from '../assets/VON ISAAC RUIZ BABAN_RESUME_2024.pdf'

const allfunctions = createSlice({
    name: 'functions',
    initialState: {
        downloadResume: myResume,

    },

    reducers:{
        downloadResume(state){
            const a = document.createElement('a')
            a.href = state.downloadResume;
            a.setAttribute('download', 'Von_Isaac_Baban.pdf')
            a.click()
        },
        openUrlNewtab(state, action){
            window.open(action.payload, '_blank', 'noopener,noreferrer')
        }
    }
})

export const functionsActions = allfunctions.actions
export default allfunctions