import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

function AddUpdateCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        if (id) {
            const getCategory = async () => {
                const response = await fetch(`http://localhost:8000/categories/${id}`);
                if (!response.ok) {
                    alert('Something went wrong!!')
                    return;
                }
                const category = await response.json();
                setFormData({
                    name: category.name,
                    description: category.description
                });
            };
            getCategory();
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = id ? await fetch(`http://localhost:8000/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }) : await fetch('http://localhost:8000/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                alert('Something went wrong!!')
                return;
            }
            alert(`Category ${!id ? 'added' : 'updated'} successfully!`);
            navigate(-1);
        } catch (error) {
            console.error('Error adding category:', error);
            alert('Failed to add category.');
        }
    };

    return (
        <>
            <div className="product-detail-card">
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="input-types">
                        <label>Category Name:</label>
                        <input
                            type="text" name="name" value={formData.name} onChange={handleChange} required
                        />
                    </div>
                    <br />
                    <div className="input-types">
                        <label>description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <br /><br />
                    <button type="submit" className="button-style">{id ? 'Update' : 'Add'} Category</button>
                </form>
            </div>
        </>
    );
}

export default AddUpdateCategory;
