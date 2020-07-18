import React,{  }  from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // const [images, setimages] = useState([]);

    const {loading,data:images} = useFetchGifs(category);

    console.log(loading);

    //  //Ejemplo para useEffect
    //  //const [count, setcount] = useState(0);

 

    return (
      <>
        <h3 className="card animate__animated animate__fadeIn"> {category} </h3>
        
        {loading && <p className="card animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
          {/* Ejemplo para useEffect. no es necesario para el ejercicio <h2> {count} </h2>
          <button onClick= { ()=> setcount( count + 1 )  }>Count</button>  */}
          {
            images.map(img =>(
              <GifGridItem
                  key={img.id}
                  {...img}
              />
            ))
          }

              {/* {images.map( (img)=> (
                  <GifGridItem  key={ img.id }
                                { ...img }/>
              ))} */}
        </div>
      </>  


    )
}
