import {useState, useEffect} from 'react'

export default function useCatFact({fact}){
    const [imgU2,setImgU2] = useState()
useEffect(()=>{
    if(!fact)return
    const firstTreeWord2 = fact.split(' ',3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstTreeWord2}?json=true`)
    .then(res=>res.json())
    .then(data=>{setImgU2(data.url)
        console.log("Prueba 2")
        console.log(data.url)
    })


},[fact])
return {imgU2}
}
