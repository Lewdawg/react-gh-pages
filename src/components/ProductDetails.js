import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';


const ProductDetails = () => {

    const { id } = useParams();

    const history = useHistory();

    const goBack = () => {
        history.push('/Products')
    }

    const [clickedLaptop, setClickedLaptop] = useState({})


    //After a certain product is clicked, new route fires off sending another request for more details
    useEffect(() => {

        const laptopData = {
            method: 'GET',
            url: `https://thelaptopshop.herokuapp.com/products/${id}`,
        }

        axios(laptopData)
            .then((result) => {
                console.log(result)
                setClickedLaptop(result.data)
            })
            .catch(err => {
                console.log(err.message)
            })

    }, [])


    return (

        <div className="product-details">


            {clickedLaptop && (
                <article>
                    <h3>{clickedLaptop.name}</h3>
                    <h4><p>Article NO:</p> {clickedLaptop.articleNo}</h4>
                    <h4><p>Description:</p> {clickedLaptop.description}</h4>
                    <p>Image:</p><img src={clickedLaptop.img}></img>
                    <h4><p>$</p>{clickedLaptop.price}</h4>
                </article>
            )}

            <button className="back" onClick={goBack}>Back</button>

        </div>

    );
}

export default ProductDetails;