import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'


const Products = () => {

    const [storedLaptops, setStoredLaptops] = useState([])

    //Sending a request with axios
    useEffect(() => {

        const laptopData = {
            method: 'GET',
            url: 'http://localhost:4000/products',
        }

        axios(laptopData)
            //If good request, save data to state variable.
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

            {/* loop through retrieved data and for each ("data".name) print out to page */}
            {storedLaptops.map(laptop => {
                return (
                    <div className="product-preview" key={laptop._id}>

                        {/* Each rendered name is a link to further details */}
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