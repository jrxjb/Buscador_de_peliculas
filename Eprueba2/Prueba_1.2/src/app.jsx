import { useEffect, useState } from "react"
import  useCatFact  from "./hooks/catFact.jsx"

export default function App() {
//Obtener hecho random https://catfact.ninja/fact

const [fact,setFact] = useState()
const [imgU,setimgU] = useState()

//Custom Hook

const {imgU2} = useCatFact({fact})

const urlFact = 'https://catfact.ninja/fact'
const urlImg = 'https://cataas.com/cat/says/'

function updateFactAndPicture(){
   
fetch(urlFact).then(res=>res.json())
.then(data=>{
console.log(data.fact)
setFact(data.fact)}
)
}

useEffect( ()=>{
    updateFactAndPicture()
},[])


useEffect(()=>{
if(!fact)return
const firstTreeWords = fact.split(' ',3).join(' ')
setimgU(`${urlImg}${firstTreeWords}`)},
[fact])



return (<>
{fact}
imagen
<img src={imgU} alt="imagen de gato con las primeras 3 palabras" />


<h1>prueba de url 2 </h1>
 <img src={imgU2} alt="imagen prueba u2"/>

 <button onClick={updateFactAndPicture}>Update</button> 

</>)
}