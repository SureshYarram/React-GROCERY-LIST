import { Grocery } from "./Grocery"


export const GroceryList = ({Grocery,removeitem})=>{
    



   
    
return (
    <div className="showdiv">
        <div>{Grocery.title}  <button onClick={()=>{removeitem(Grocery.id)}}>remove</button></div>
        
    </div>
)
}