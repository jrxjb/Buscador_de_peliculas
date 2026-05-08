//importando los hooks de react
import {useEffect, useState} from 'react' 

export default function useCatImage({firtSentence}) {
    //declarando el useState
     const [imgUrl, setImgUrl] = useState('')

    useEffect(()=>{
    if(firtSentence){
    fetch(`https://cataas.com/cat/says/${firtSentence}?json=true`)
    .then(res=>res.json())
    .then(data => {
    const { url } = data
    setImgUrl(url)
    console.log("hola")
    console.log(url)
    })
    }

},[firtSentence])

return {imgUrl}

}