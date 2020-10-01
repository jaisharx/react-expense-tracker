import React from 'react';

const AddTranscation = () => {
    return (
        <div className="container-form">
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" placeholder="Enter name" />
                </div>
                <div className="form-control">
                    <label for="amount">
                        Amount <br />
                        <span className="tip">(negative - expense, postive - income)</span>
                    </label>
                    <input type="number" placeholder="Enter amount" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTranscation;
