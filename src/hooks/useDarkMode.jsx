import React, { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {
    const [ someValue, setSomeValue ] = useLocalStorage('key')
     useEffect(()=>{
        const body = document.getElementsByTagName("BODY")[0]; 
         if (someValue === true) {
            body.classList.add("dark-mode");
         } else {
            body.classList.remove("dark-mode");
         }
     })
     return [someValue, setSomeValue];
}