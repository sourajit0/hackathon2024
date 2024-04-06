import React, { useState } from 'react';
import ProductFormCard from './AddProduct';

const ParentPage = () => {
    const [formDetails, setFormDetails] = useState(null);

    const handleFormSubmit = (formData) => {
        setFormDetails(formData);
        console.log(formData);
    };

    return (
        <div>
            <ProductFormCard onSubmitForm={handleFormSubmit} />
        </div>
    )
}

export default ParentPage;
