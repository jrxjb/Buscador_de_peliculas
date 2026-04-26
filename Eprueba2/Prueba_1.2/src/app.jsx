import { useEffect, useState } from "react"

export default function App() {
//Obtener hecho random https://catfact.ninja/fact

const [fact,setFact] = useState()
const [imgU,setimgU] = useState()

const urlFact = 'https://catfact.ninja/fact'
const urlImg = 'https://cataas.com/cat/says/'

useEffect( ()=>{
fetch(urlFact).then(res=>res.json())
.then(data=>{
console.log(data.fact)
setFact(data.fact)}
)},[])


useEffect(()=>{
if(!fact)return
const firstTreeWords = fact.split(' ',3).join(' ')
setimgU(`${urlImg}${firstTreeWords}`)},
[fact])

return (<>
{fact}
imagen

<img src={imgU} alt="imagen de gato con las primeras 3 palabras" />

</>)
}