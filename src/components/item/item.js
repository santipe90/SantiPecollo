import React, { useState } from "react";


export function Item() {
    
    const getRemes = (remeraData) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            return resolve(remeraData)
          }, 2000)
        })
    }

    const remeraData = [
        {
        name: 'Remera Cresta',
        description: 'Color negro',
        price: 1200,
        stock: 5,
        img: { reme1 }
      }
    ]

    useEffect(() => {
        getRemes( remeraData ).then(result => {
            console.log(result)
            setRemes(result);
        });
    }, [])


        return (
            <div className='App'>
                <h1>Remera</h1>
                <button onClick={handleClick}>Comprar</button>
                <h2>{remeraData}</h2>
            </div>
        )
        }

        export default Item