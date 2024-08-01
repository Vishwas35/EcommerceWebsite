import { useParams } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8000/product/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products = await response.json();
            setProduct(products);
        };

        getProduct();
    }, [id]);

    return (
        <>
            <div key={product._id} className="product-detail-card">
                <img src={product.image_url} alt={product.name} className="product-image" />
                <h3 className="title-text">{product.name}</h3>
                <p className="normal-text">{product.description}</p>
                <p className="normal-text">${product.price}</p>
                <button className="button-style" onClick={
                    async () => {
                        const response = await fetch('http://localhost:8000/api/cart', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ userId: "66ac0dad27956050442088eb", productId: product._id, quantity: 1 }),
                        });

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        response.json();
                    }}>
                    Add to Cart
                </button>
            </div>
        </>
    );
}

export default ProductDetails;
