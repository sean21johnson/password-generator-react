import React from 'react';

function Form({ onFormSubmit }) {
    

    return (
        <form onSubmit={onFormSubmit}>
            <div className="criteria_item_container">
                <label htmlFor="len">Password Length</label>
                <input name="len" type={"number"} defaultValue={15} min={4} max={30}/>
            </div>
            <div className="criteria_item_container">
                <label htmlFor="uppercase">Contains Uppercase Letters</label>
                <input name="uppercase" type={"checkbox"} />
            </div>
            <div className="criteria_item_container">
                <label htmlFor="lowercase">Contains Lowercase Letters</label>
                <input name="lowercase" type={"checkbox"} />
            </div>
            <div className="criteria_item_container">
                <label htmlFor="numbers">Contains Numbers</label>
                <input name="numbers" type={"checkbox"} />
            </div>
            <div className="criteria_item_container">
                <label htmlFor="symbols">Contains Symbols</label>
                <input name="symbols" type={"checkbox"} />
            </div>
            <div className="button_container">
                <button className="btn"><strong>Generate Password</strong></button>
            </div>
        </form>
    )
}

export default Form;