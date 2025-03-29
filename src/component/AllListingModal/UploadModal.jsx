import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";

const UploadModal = ({ setModals }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");

    const maxImages = 8;
    const minImages = 4;
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/svg+xml"];

    const onDrop = useCallback((acceptedFiles) => {
        if (images.length + acceptedFiles.length > maxImages) {
            setError(`You can upload a maximum of ${maxImages} images.`);
            return;
        }

        let newImages = [];
        let validationError = "";

        acceptedFiles.forEach((file) => {
            if (!allowedTypes.includes(file.type)) {
                validationError = "Only SVG, PNG, JPG, and GIF files are allowed.";
                return;
            }

            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                if (img.width > 800 || img.height > 400) {
                    validationError = "Images must be 800x400px or smaller.";
                }
                URL.revokeObjectURL(img.src);
            };

            newImages.push(file);
        });

        if (validationError) {
            setError(validationError);
        } else {
            setError("");
            setImages((prev) => [...prev, ...newImages]);
        }
    }, [images]);

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: allowedTypes.join(","),
        multiple: true,
    });

    return (
        <section className="min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-40">
            <div className="flex justify-between items-center">
                <h1 className="md:font-semibold">New Listing</h1>
                <p className="text-center text-sm border py-1 px-6 border-gray-300">
                    2
                </p>
            </div>

            <form className="flex flex-col items-center gap-10 mx-auto">
                <div className="flex flex-col items-center gap-1">
                    <h2 className="text-1xl md:text-2xl font-semibold md:font-normal text-blue-500">
                        Image Upload
                    </h2>
                    <p className="text-sm md:text-base text-center">
                        Please upload a minimum of {minImages}, and a maximum of {maxImages} images
                    </p>
                </div>

                {/* Drag & Drop Area */}
                <div
                    {...getRootProps()}
                    className="flex border w-full p-6 rounded-sm border-gray-300 flex-col items-center gap-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                    <input {...getInputProps()} />
                    <FiUploadCloud className="text-3xl text-gray-500" />
                    <p className="text-sm text-center">
                        <span className="text-blue-500">Click to upload</span> or drag and drop <br />
                        SVG, PNG, JPG, or GIF (max. 800x400px)
                    </p>
                </div>

                <button type='submit' onClick={() => setModals("secondAddress")} className='bg-[#23396A] text-sm text-white py-2 cursor-pointer w-full flex justify-center border rounded-md'>
                    Next
                </button>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Image Preview Grid */}
                <div className="grid grid-cols-4 gap-2">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Uploaded ${index + 1}`}
                                className="w-20 h-20 object-cover rounded-md"
                            />
                            <button
                                onClick={() => removeImage(index)}
                                className="absolute top-0 right-0 bg-gray-700 text-white rounded-full p-1"
                            >
                                <FiXCircle size={14} />
                            </button>
                        </div>
                    ))}
                </div>
            </form>
        </section>
    );
};

export default UploadModal;
