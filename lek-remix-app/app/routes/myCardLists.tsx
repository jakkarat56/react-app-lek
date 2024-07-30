import { useState } from "react";

let nextId = 0;
export default function CardLists (){
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [cards, setCards] = useState([]);
    
    function handleClickAdd(n:string,d:string){
        console.log("Caed List",cards);
        setCards([
            ...cards,
            {
                id: nextId++,
                name: n,
                desc: d
            }
        ]);

    }

    return(
        <div>
            <label>Create Card Name:</label>
            <input 
                name="cName"
                className="border-1"
                onChange={(e) => setName(e.target.value)}
            /><hr />
            <label>Description:</label>
            <textarea 
                name="cDesc"
                rows={4}
                cols={50}
                className="border-2"
                onChange={(e) => setDesc(e.target.value)}
            />
            <hr />
            <button 
            onClick={() => handleClickAdd(name, desc)}
            className = "border bg-green-300 h-18 w-20"
            >
                Add Card
            </button>
            <hr />
            <h1>My Card Lists :</h1>
        </div>
    )
}