import React, {useState} from 'react';

const initalValues = {
    name : '',
    size : '',
    pepperoni : false,
    sausage : false,
    beef : false,
    canadianBacon : false,
    dicedTomatoes : false,
    onions : false,
    specialText : ''
    }

const Form = (props) => {

const [pizza, setPizza] = useState(initalValues);
const {name, size, pepperoni, sausage, beef, canadianBacon, dicedTomatoes, onions, specialText} = pizza;

const [disabled, setDisabled] = useState(true)

const [submitOrder, setSubmitOrder] = useState(false)


const onChange = (evt) => {
    const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
    setPizza({ ...pizza, [evt.target.name]: value})
}

const onSubmit = (evt) => {
    evt.preventDefault();
    setSubmitOrder(true);
}

    return(
        <div>
            <h2>Build Your Own Pizza</h2>

            <form id='buildPizza' onSubmit={onSubmit}>
                <label>Order Name :
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Choose a Size :
                    <select id='pizza-size'
                        name='size'
                        value={size}
                        onChange={onChange}
                    >
                        <option>--Select a Size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </label>
                <br/>
                <label>
                    Add Toppings (pick up to 4)
                </label>
                <label>Pepperoni
                    <input
                        checked={pepperoni}
                        type='checkbox'
                        name='pepperoni'
                        value = 'pepperoni'
                        onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    checked={sausage}
                    type='checkbox'
                    name='sausage'
                    value='sausage'
                    onChange={onChange}
                    />
                </label>
                <label>Beef
                    <input
                        checked={beef}
                        type='checkbox'
                        name='beef'
                        value='beef'
                        onChange={onChange}
                    />
                </label>
                <label>Canadian Bacon
                    <input
                        checked={canadianBacon}
                        type='checkbox'
                        name='canadianBacon'
                        value='canadianBacon'
                        onChange={onChange}
                    />
                </label>
                <label>Diced Tomatoes
                    <input
                        checked={dicedTomatoes}
                        type='checkbox'
                        name='dicedTomatoes'
                        value='dicedTomatoes'
                        onChange={onChange}
                    />
                </label>
                <label>Onions
                    <input
                        checked={onions}
                        type='checkbox'
                        name='onions'
                        value='onions'
                        onChange={onChange}
                    />
                </label>
                <label>Special Instructions
                    <input
                        type='text'
                        name='specialText'
                        placeholder='Any special instructions?'
                        value={specialText}
                        onChange={onChange}
                    />
                </label>
                <br/>
                <button id= 'orderBtn' type='submit' disabled={disabled}>Add to Order</button>
            </form>
            {submitOrder}
        </div>
    )
}

export default Form;