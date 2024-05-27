import React from "react";

const Modal = ({ dataFromAPI, userId, setIsOpen }) => {
    const avatar = dataFromAPI.find((el) => el.id === userId);
    console.log(userId)
    return (
        <div className="modal-overlay">
            <div style={{ backgroundColor: "green", height: "400px", width: "400px" }} >
                <h2 onClick={() => setIsOpen(false)}>&times;</h2>
                <img className="modalImage" src={userId} alt={userId.first_name} />
                {console.log(userId.avatar)}
            </div>
        </div>
    )
}

export default Modal