
// import { useState, useEffect } from "react"
import { GifItem } from "./GifItem"
import {useFetchGifs} from '../hooks/useFetchGifs'
// import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({category}) => {
  
  const { images ,isLoading } = useFetchGifs ( category )

  console.log({ images, isLoading })


  return (
    <>
        <h3>{ category}</h3>
        {
          isLoading && ( <h2> Cargando...</h2>)
        }

        <div className="card-grid">
            { images.map( ( dibujo ) =>(
              //  <li key={id}>{ title }</li>
              <GifItem 
                key={ dibujo.id }
                // title={ dibujo.title }
                // url={ dibujo.url}
                { ...dibujo}
                
                />

            ))
            }
         
        </div>

    </>
  )
}
