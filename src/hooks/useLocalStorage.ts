import { useEffect, useState } from "react";

export function useLocalStorage<T>(key:string , initialValue: T | (()=>T)) {
 //invoke once
    const [value, setValue] = useState<T>(()=>{
    const jsonValue = localStorage.getItem(key)
//if value stored in local storage
    if(jsonValue != null) return JSON.parse(jsonValue)
    //else 
    if(typeof initialValue ==='function'){
        return (initialValue as () => T)()
    } else {
        return initialValue
    }
 })

 useEffect(()=>{
     localStorage.setItem(key, JSON.stringify(value))
 }, [key,value])

 return [value, setValue] as [typeof  value, typeof setValue ]
}