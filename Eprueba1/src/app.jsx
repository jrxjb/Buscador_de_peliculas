import {useState, useEffect} from 'react'
import './app.css'
import useCatImage from "./hooks/customHook.jsx"

export default function App(){

const [fact,setFact]= useState()
const [firtSentence,setFirtSentence] = useState('')
// LLamar al custom hook 
 const { imgUrl } = useCatImage({firtSentence})

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




// function Update Fact
function updateFactFuntion() {
 fetch('https://catfact.ninja/fact')
 .then(res => res.json())
 .then(data => {
    const {fact} = data 
    const VariableUpdateFact = fact.split(' ',3).join(' ')
    console.log(VariableUpdateFact," update")
    setFact(fact)
     setFirtSentence(VariableUpdateFact)
})

}

    return(
    <main className='main-c'>
         hola gatito!
        <button className='boton-update-fact' onClick={updateFactFuntion}>
            botton
       </button>
        <section className='fact-url'>
            <div>
                primer fact, {fact}
            </div>
            <div>
                {imgUrl&&<img src={imgUrl} alt="img from https://cataas.com with random text from https://catfact.ninja/fact"/>}
            </div>

        </section>
    </main>
    
    )
}