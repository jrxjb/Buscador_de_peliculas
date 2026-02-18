import {useState, useEffect} from 'react'

export default function App(){

    const [fact,setFact]= useState()
    const [firtSentence,setFirtSentence] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    //fetch, sacar la informacion delas palabras
    useEffect(()=>{

        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
        // se recupera fact de data 
        // setFact(fact.data)
//.join(' ')  es para unir 
        const { fact } = data
        setFact(fact)
        const VaribleFirtSentence  =  fact.split(' ',3).join(' ')  
        setFirtSentence(VaribleFirtSentence)
        console.log(VaribleFirtSentence)
     

        })

    },[])


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

    return(<>
    hola gatito!
    <main>
    

    <div>
        primer fact, {fact}
    </div>
        {imgUrl&&<img src={imgUrl} alt="img from https://cataas.com with random text from https://catfact.ninja/fact"/>}
    </main>
    
    </>)
}