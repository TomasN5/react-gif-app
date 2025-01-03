import { useState } from "react"
import AddCategory from "./Components/AddCategory"
import GifGrid from "./Components/GifGrid"

const GifExpetApp = () => {
    
    const [categories,setCategories] = useState(['One Punch'])


    //Ese new category es el evento que recibo del onNewCategory
    const onAddCategory = (newCategory)=>{
        if (categories.includes(newCategory)) return;
        
        setCategories([newCategory,...categories])
    }

    return (
        <div>
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                        onNewCategory={(event)=>onAddCategory(event)}
            />
            
            {categories.map((category) =>(
                <GifGrid 
                key={category} 
                category={category}/>             
            ))}

        </div>
    
        

    )
}

export default GifExpetApp
//WmPCHttkeZuYswfZopKoSfD7s598oFBl