
import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid'

export const Grocery = ()=>{

  const [groceries,setGroceries] = useState([]);
     const addItem=(data)=>{

       if(data=="") return alert("add something")
         const res = {
             id:nanoid(),
             title:data
         }
        
        setGroceries([...groceries,res]);
     }

     function removeitem(id){
         let items = groceries.filter((el)=>(
             el.id!==id
         ))
         setGroceries([...items]);
     }
    return (
        <div>
   < GroceryInput addItem={addItem}/>
   {groceries.map((e)=>(
     < GroceryList Grocery={e} removeitem={removeitem} key={e.id} />
   ))}
     </div>
    )
}