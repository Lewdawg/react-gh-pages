import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'

//import useFetch from '../products/useFetch.js'



const Products = () => {

    const [storedLaptops, setStoredLaptops] = useState([])


    useEffect(() => {

        const laptopData = {
            method: 'GET',
            url: 'http://localhost:4000/products',
        }

        axios(laptopData)
            .then((result) => {
                console.log(result)
                setStoredLaptops(result.data)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [])

    return (

        <div className="title">

            <h1>All Products</h1>

            {storedLaptops.map(laptop => {
                return (
                    <div className="product-preview" key={laptop._id}>

                        <Link to={`/products/${laptop._id}`} placeholder={laptop}>
                            <h4>{laptop.name}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>

    );
}

export default Products;