"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiXCircle } from "react-icons/fi";

const UploadModal = ({ setModals, handleChange }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [thumbnailIndex, setThumbnailIndex] = useState(null); // for UI highlighting

    const maxImages = 8;
    const minImages = 4;
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/svg+xml"];

    const onDrop = useCallback((acceptedFiles) => {
        const currentCount = images.length;
        const totalCount = currentCount + acceptedFiles.length;

        if (totalCount > maxImages) {
            setError(`You can upload a maximum of ${maxImages} images.`);
            return;
        }

        let validationError = "";
        const validFiles = [];

        acceptedFiles.forEach((file) => {
            if (!allowedTypes.includes(file.type)) {
                validationError = "Only SVG, PNG, JPG, and GIF files are allowed.";
            } else {
                validFiles.push(file);
            }
        });

        if (validationError) {
            setError(validationError);
        } else {
            setError("");
            const updatedImages = [...images, ...validFiles];
            setImages(updatedImages);

            const filePreviews = updatedImages.map((file) => URL.createObjectURL(file));
            handleChange({ target: { name: "image_urls", value: filePreviews } });

            // If no thumbnail selected yet, set the first one as default
            if (thumbnailIndex === null && filePreviews.length > 0) {
                setThumbnailIndex(0);
                handleChange({ target: { name: "thumbnail_url", value: filePreviews[0] } });
            }
        }
    }, [images, handleChange, thumbnailIndex]);

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);

        const updatedUrls = updatedImages.map((file) => URL.createObjectURL(file));
        handleChange({ target: { name: "image_urls", value: updatedUrls } });

        if (thumbnailIndex === index) {
            setThumbnailIndex(null);
            handleChange({ target: { name: "thumbnail_url", value: "" } });
        } else if (thumbnailIndex > index) {
            setThumbnailIndex(thumbnailIndex - 1);
        }
    };

    const selectThumbnail = (index) => {
        const url = URL.createObjectURL(images[index]);
        setThumbnailIndex(index);
        handleChange({ target: { name: "thumbnail_url", value: url } });
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: allowedTypes.join(","),
        multiple: true,
    });

    const handleNext = (e) => {
        e.preventDefault();
        if (images.length < minImages) {
            setError(`Please upload at least ${minImages} images.`);
            return;
        }
        setError("");
        setModals("moreDetails");
        window.scrollTo(0, 0);
    };

    return (
        <section className="min-h-screen md:p-16 p-4 mt-20 flex flex-col gap-16">
            <div className="flex justify-between items-center">
                <h1 className="md:font-semibold text-xl">New Listing</h1>
                <p className="text-center text-sm border py-1 px-6 border-gray-300">3 of 4</p>
            </div>

            <form className="flex flex-col items-center gap-10 mx-auto w-full max-w-2xl">
                <div className="flex flex-col items-center gap-1">
                    <h2 className="text-1xl md:text-2xl font-semibold text-blue-500">
                        Image Upload
                    </h2>
                    <p className="text-sm md:text-base text-center">
                        Please upload between {minImages} and {maxImages} images
                    </p>
                </div>

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

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Image Grid with Thumbnail Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((image, index) => {
                        const imgURL = URL.createObjectURL(image);
                        return (
                            <div
                                key={index}
                                className={`relative border-2 rounded-md p-1 cursor-pointer ${
                                    thumbnailIndex === index ? "border-blue-500" : "border-transparent"
                                }`}
                                onClick={() => selectThumbnail(index)}
                            >
                                <img
                                    src={imgURL}
                                    alt={`Uploaded ${index + 1}`}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                {thumbnailIndex === index && (
                                    <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-xs text-center py-0.5 rounded-b-md">
                                        Thumbnail
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeImage(index);
                                    }}
                                    className="absolute top-0 right-0 bg-gray-700 text-white rounded-full p-1 hover:bg-red-500"
                                >
                                    <FiXCircle size={14} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={handleNext}
                    className="bg-[#23396A] text-sm text-white py-2 w-full flex justify-center border rounded-md"
                >
                    Next
                </button>
            </form>
        </section>
    );
};

export default UploadModal;
