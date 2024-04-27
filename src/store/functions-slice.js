import { createSlice} from "@reduxjs/toolkit";
import myResume from '../assets/Von_Isaac_Baban.pdf'

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
        }
    }
})

export const functionsActions = allfunctions.actions
export default allfunctions