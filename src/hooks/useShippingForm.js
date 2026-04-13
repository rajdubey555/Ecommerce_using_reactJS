import React, { useEffect, useState } from 'react'

const useShippingForm = (onSubmit) => {
const defaultData ={
    
            fullName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            country: "India",
        
}

    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("shippingData")
        try {
             return saved ? JSON.parse(saved) : defaultData
        } catch (error) {
              console.error("Invalid JSON in localStorage", error);
           return defaultData
        }
       
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        localStorage.setItem("shippingData", JSON.stringify(formData))
    }, [formData])

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Validation Logic
    const validate = () => {
        let newErrors = {};

        if (!formData.fullName.trim())
            newErrors.fullName = "Full name is required";

        if (!/^[0-9]{10}$/.test(formData.phone))
            newErrors.phone = "Enter valid 10-digit phone";

        if (!formData.email.includes("@"))
            newErrors.email = "Enter valid email";

        if (!formData.address.trim())
            newErrors.address = "Address is required";

        if (!formData.city.trim())
            newErrors.city = "City is required";

        if (!formData.state.trim())
            newErrors.state = "State is required";

        if (!/^[0-9]{6}$/.test(formData.pincode))
            newErrors.pincode = "Enter valid pincode";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            if (onSubmit) onSubmit(formData);
        }
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
    };
};



export default useShippingForm
