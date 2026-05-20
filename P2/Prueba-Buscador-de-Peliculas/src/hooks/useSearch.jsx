import { useEffect,useState,useRef } from 'react'

export default function({query}){
const [error,setError] = useState(null)
const isFirstinput= useRef(true) 
  
  useEffect(()=>{
  if(isFirstinput.current){
    isFirstinput.current=(query==="")
    return
  }
  if(query ===''){
    setError("No se puede bucar un elemento vacio")
    return
  }
  if(query.match(/^\d+$/)){
    setError("No se puede buscar una pelicula con 1 numero")
    return
  }
  if(query.length<3){
    setError("La busqueda debe tener al menos 3 caracteres")
    return
  }
  
  setError(null)

},[query])
return {error,isFirstinput}
}



