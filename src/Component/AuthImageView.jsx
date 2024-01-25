import React from 'react'
import mainImage from "../Assets/Images/mainImage.svg"

const AuthImageView = () => {
    return (
        <img src={mainImage} alt="sd" style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
    )
}

export default AuthImageView