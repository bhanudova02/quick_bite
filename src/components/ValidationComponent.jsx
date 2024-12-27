import { useState } from "react";

export function ValidationComponent() {
    const defaultCss = "border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium focus:ring-1";

    const [formState, setFormState] = useState({
        productName: "",
        number: "",
        mobileNumber: "",
        email: "",
        city: "",
        description: "",
        checkbox: false,
    });

    const handleBlur = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;
        setFormState((prev) => ({ ...prev, [name]: fieldValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted successfully!", formState);
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                        <input
                            name="productName"
                            type="text"
                            placeholder="Enter product name"
                            className={defaultCss}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="number"
                            type="text"
                            placeholder="Enter Number"
                            className={defaultCss}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="mobileNumber"
                            type="text"
                            placeholder="Enter Mobile Number"
                            className={defaultCss}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            className={defaultCss}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="flex flex-col">
                        <select
                            name="city"
                            className={defaultCss}
                            onBlur={handleBlur}
                        >
                            <option value="">Choose City</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="delhi">Delhi</option>
                            <option value="chennai">Chennai</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-6 mb-10">
                    <div className="flex flex-col">
                        <textarea
                            name="description"
                            rows={6}
                            placeholder="Enter product description"
                            className={defaultCss}
                            onBlur={handleBlur}
                        ></textarea>
                    </div>

                    {/* Checkbox */}
                    <div>
                        <div className="flex items-center space-x-2">
                            <input
                                name="checkbox"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                checked={formState.checkbox}
                                onChange={(e) => setFormState({ ...formState, checkbox: e.target.checked })}
                                onBlur={handleBlur}
                            />
                            <span className="text-xs text-black font-medium">I agree to the terms</span>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
