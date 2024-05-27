import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal"

const UseEffect = () => {
    const [dataFromAPI, setDataFromAPI] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1").then((res) => setDataFromAPI(res.data.data))
    }, [])

    const handleOpenModal = (id) => {
        setIsOpen(true)
        setUserId(id)
    }


    return (
        <div className="peopleContainer">
            {dataFromAPI?.map((el) => (
                <div
                    key={el.id}
                    style={{
                        border: "1px solid green",
                        width: "200px",
                        margin: "2em",
                    }}
                >
                    <img src={el.avatar} alt={el.first_name} onClick={handleOpenModal} />
                    <h3>
                        {el.first_name} {el.last_name}
                    </h3>
                    <p>
                        {el.email}
                    </p>
                </div>
            ))}
            {isOpen && (<Modal
                dataFromAPI={dataFromAPI}
                userId={userId}
                setIsOpen={setIsOpen} />)}
        </div>
    )
}


export default UseEffect;