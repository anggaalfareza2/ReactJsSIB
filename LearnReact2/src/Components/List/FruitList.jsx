import React from "react";

const fruits = ["Apple", "Banana", "Cherry"];
function FruitList () {
    return (
        <ul>
            {fruits.map((fruits, index)=>(
                <li key={index}>{fruits}</li>
            ))}
        </ul>
    )
}

export default FruitList