import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{

        getGifs(category)
           .then(img => {


                    console.log(img);
                    setstate({
                        data: img,
                        loading:false
                      }) 


              }
            );     



    },[category]);



    return state;// {data: [], loading: true}
};