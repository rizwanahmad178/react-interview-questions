import React, { useState } from 'react';

export default function CheckItem() {
    const itemArr = ["Cricket", "Football", "BasketBall", "Hockey"];
    const [arr, setArr] = useState(itemArr);
    const [check, setCheck] = useState(Array(itemArr.length).fill(false));

    const handleDelete = (idx) => {
        const newArr = arr.filter((item, index) => idx !== index);
        setArr(newArr);
        // Remove the checked state for the deleted item
        const newCheck = [...check];
        newCheck.splice(idx, 1);
        setCheck(newCheck);
    };

    const handleCheckBox = (index) => {
        const newCheck = [...check];
        newCheck[index] = !newCheck[index];
        setCheck(newCheck);
    };

    return (
        <div>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={check[index] || false}
                            onChange={() => handleCheckBox(index)}
                        />
                        {item}{' '}
                        {check[index] && (
                            <button onClick={() => handleDelete(index)}>
                                Delete Item
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
