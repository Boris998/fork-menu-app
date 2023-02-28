import * as React from "react";
import {useRef, useState} from "react";
import Input from "../UI/Input";
import {Grid} from "@mui/material";
import classes from './MenuItemForm.module.css';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';

const MenuItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

/*
    const increaseAmountInputHandler = () => {
        amountInputRef.current.value++;
    }

    const decreaseAmountInputHandler = () => {
        amountInputRef.current.value--;
    }
*/

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
            setAmountIsValid(false);
            alert('Please enter a valid amount 1-10');
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container >
                <Grid item xs={6} align={'right'} sx={{marginTop: '1.5%', paddingRight: '2%'}}>
                    <Input
                        ref={amountInputRef}
                        input={{
                            id: 'amount_' + props.id,
                            type: 'number',
                            min: '1',
                            max: '10',
                            step: '1',
                            defaultValue: '1',
                        }}
                    />
                </Grid>
                <Grid item xs={6} align={'left'}>
                    <button type='submit' className={classes['btn-submit']} onClick={submitHandler}>
                        <p>Add to plate</p><AddShoppingCartTwoToneIcon/>
                    </button>
                </Grid>

            </Grid>
        </form>
    );
}

export default MenuItemForm;
