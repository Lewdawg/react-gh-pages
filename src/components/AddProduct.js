import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const AddProduct = () => {

    const history = useHistory();

    const [artNo, setArtNo] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    const newItem = (e) => {
        //console.log({ artNo, name, description, price })
        e.preventDefault();


        //const randNo = Math.floor(Math.random() * 100)
        // "id": randNo

        const newProduct = {
            method: 'POST',
            url: 'http://localhost:4000/addProduct',
            data: {
                "articleNo": artNo,
                "name": name,
                "description": description,
                "price": price,

            }
        }

        axios(newProduct)
            .then((result) => {
                console.log(result)
                history.push('/products')
            })
            .catch(err => {
                console.log(err.message)
                alert('Product not Added!')
            })
    }



    return (
        <div className="title">
            <h1>Add a Product</h1>

            <form onSubmit={newItem}>

                <label htmlFor="name">Product ArticleNo:</label>
                <input type="text" value={artNo} onChange={(e) => setArtNo(e.target.value)} required />

                <label htmlFor="name">Product Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="description">Product Description:</label>
                <textarea type="text" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label htmlFor="price">Product Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />

                {/* <input type='submit' value='Add' /> */}
                <button type='submit' >Add Product</button>
            </form>

        </div>
    );
}

export default AddProduct;