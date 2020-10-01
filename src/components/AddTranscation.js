import React, { useState } from 'react';

const AddTranscation = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className="container-form">
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-control">
                    <label for="amount">
                        Amount <br />
                        <span className="tip">(negative - expense, postive - income)</span>
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTranscation;
