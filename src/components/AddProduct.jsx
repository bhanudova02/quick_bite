import { useState } from "react";
import { animals } from "./data/animals";
import SearchableDropdown from "./SearchableDropdown";
export function AddProduct() {
    const styleCls = {
        errorCss: 'border border-red-400 outline-none focus:ring-1 focus:border-red-500 focus:ring-red-500',
        validCss: 'border border-gray-300 focus:ring-1 focus:border-blue-500 focus:ring-blue-500',
    };

    const [product, setProduct] = useState({
        productName: '',
        productNumber: '',
        productMobile: '',
        productEmail: '',
        productCity: '',
        productDescription: '',
        productTerms: false,
        productCountry: ''
    });

    const [error, setErrors] = useState({
        productNameError: '',
        productNumberError: '',
        productMobileError: '',
        productEmailError: '',
        productCityError: '',
        productDescriptionError: '',
        productTermsError: '',
        productCountryError: ''
    });

    const validateField = (fieldName, value) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'productName':
                if (!value.trim()) {
                    errorMessage = 'Product name is required.';
                } else if (!/^[a-zA-Z]+$/.test(value.trim())) {
                    errorMessage = 'Product name must contain only letters.';
                }
                break;
            case 'productNumber':
                if (!value.trim()) {
                    errorMessage = 'Product number is required.';
                } else if (!/^[0-9]+$/.test(value.trim())) {
                    errorMessage = 'Product number must contain only numbers.';
                }
                break;
            case 'productMobile':
                if (!value.trim()) {
                    errorMessage = 'Mobile number is required.';
                } else if (!/^[0-9]{10}$/.test(value.trim())) {
                    errorMessage = 'Mobile number must contain exactly 10 digits.';
                }
                break;
            case 'productEmail':
                if (!value.trim()) {
                    errorMessage = 'Email is required.';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                    errorMessage = 'Invalid Email Address.';
                }
                break;
            case 'productCity':
                if (!value.trim()) {
                    errorMessage = 'Please select a city.';
                }
                break;
            case 'productDescription':
                if (!value.trim()) {
                    errorMessage = "Product Description Is Required";
                } else if (value.trim().length < 10) {
                    errorMessage = "Min 10 Characters Are Required";
                }
                break;
            case 'productTerms':
                if (!value) {
                    errorMessage = "You must agree to the terms.";
                }
                break;
            case 'productCountry':
                if (!value.trim()) {
                    errorMessage = "Country Is Required";
                }
            default:
                break;
        }

        return errorMessage;
    };


    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        const errorMessage = validateField(name, fieldValue);
        setProduct((prev) => ({ ...prev, [name]: fieldValue }));
        setErrors((prev) => ({ ...prev, [`${name}Error`]: errorMessage }));
    };


    const handleBlur = (e) => {
        const { name, value } = e.target;
        const errorMessage = validateField(name, value);
        setErrors((prev) => ({ ...prev, [`${name}Error`]: errorMessage }));
    };

    const handleSubmit = () => {
        const newErrors = {
            productNameError: validateField('productName', product.productName),
            productNumberError: validateField('productNumber', product.productNumber),
            productMobileError: validateField('productMobile', product.productMobile),
            productEmailError: validateField('productEmail', product.productEmail),
            productCityError: validateField('productCity', product.productCity),
            productDescriptionError: validateField('productDescription', product.productDescription),
            productTermsError: validateField('productTerms', product.productTerms),
            productCountryError: validateField('productCountry', product.productCountry),
        };

        setErrors(newErrors);

        const isValid = !Object.values(newErrors).some((errorMsg) => errorMsg !== '');

        if (isValid) {
            console.log('Product Details:', product);
        }
    };


    const [value, setValue] = useState("Select option...");



    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                        <input
                            name="productName"
                            type="text"
                            placeholder="Enter product name"
                            value={product.productName}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productNameError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productNameError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productNumber"
                            type="text"
                            placeholder="Enter Number"
                            value={product.productNumber}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productNumberError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productNumberError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productMobile"
                            type="text"
                            placeholder="Enter Mobile Number"
                            value={product.productMobile}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productMobileError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productMobileError}</span>
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="productEmail"
                            type="email"
                            placeholder="Enter Email"
                            value={product.productEmail}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productEmailError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        />
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productEmailError}</span>
                    </div>
                    <div className="flex flex-col">
                        <select
                            name="productCity"
                            value={product.productCity}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productCityError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        >
                            <option value="">Choose City</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="delhi">Delhi</option>
                            <option value="chennai">Chennai</option>
                        </select>
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productCityError}</span>
                    </div>
                    <div>
                        {/* Dropdown Search Container */}
                        <div className="flex flex-col">
                            <SearchableDropdown
                                options={animals}
                                label="name"
                                name="productCountry"
                                id="id"
                                selectedVal={product.productCountry}
                                handleChange={(val) =>
                                    handleInputChange({
                                        target: { name: "productCountry", value: val || "" },
                                    })
                                }
                                handleBlur={() =>
                                    handleBlur({
                                        target: { name: "productCountry", value: product.productCountry },
                                    })
                                }
                                claName={`${error.productCountryError ? styleCls.errorCss : styleCls.validCss} 
                                rounded-lg px-4 py-2 text-sm font-medium outline-none w-full`}
                            />
                            <span className="text-xs text-red-500 font-medium mt-1">{error.productCountryError}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <textarea
                            rows={6}
                            name="productDescription"
                            placeholder="Enter Description"
                            value={product.productDescription}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className={`${error.productDescriptionError ? styleCls.errorCss : styleCls.validCss} 
                            rounded-lg px-4 py-2 text-sm font-medium outline-none`}
                        ></textarea>
                        <span className="text-xs text-red-500 font-medium mt-1">{error.productDescriptionError}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                        <input
                            name="productTerms"
                            type="checkbox"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-xs text-black font-medium">I agree to the terms</span>
                    </div>
                    <span className="text-xs text-red-500 font-medium mt-1">{error.productTermsError}</span>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
