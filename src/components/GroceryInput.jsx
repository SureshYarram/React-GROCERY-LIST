import { useState } from "react"

export const GroceryInput=({addItem})=>{

      const [text,setText] = useState("")
    return(
      <div>

      <h1>Todo</h1>
<div className="inputdiv">
      
    
<input type="text" placeholder="Add Item" onChange={(e)=>{
      setText(e.target.value);
}} />
<button onClick={()=>{
  addItem(text);
}}>Add Item</button>


          
     
</div>
</div>

    )
}
