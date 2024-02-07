import { useEffect, useState } from "react";

const useFileGenrator = (bookImage) => {


    // useEffect(() => {
    //     // making blob file
    //     if (bookImage) {
    const fetchImageAsFile = async (fileUrl) => {
        try {
            const response = await fetch(fileUrl);
            const blob = await response.blob();
            const file = new File([blob], "image.jpg", { type: blob.type });

            return file
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    //     }
    // }, [bookImage]);

    return { fetchImageAsFile };
};

export default useFileGenrator;
