import useInput from "../../../hooks/use-input";
import {useEffect, useState} from "react";
import classes from './Checkout.module.css';
import {Button} from "@mui/material";

const Checkout = props => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueInputChangeHandler: nameInputChangeHandler,
        valueInputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredPostalCode,
        isValid: postalCodeIsValid,
        hasError: postalCodeHasError,
        valueInputChangeHandler: postalCodeInputChangeHandler,
        valueInputBlurHandler: postalCodeInputBlurHandler,
        reset: resetPostalCodeInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueInputChangeHandler: streetInputChangeHandler,
        valueInputBlurHandler: streetInputBlurHandler,
        reset: resetStreetInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueInputChangeHandler: cityInputChangeHandler,
        valueInputBlurHandler: cityInputBlurHandler,
        reset: resetCityInput
    } = useInput(value => value.trim() !== '');

    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) setFormIsValid(true);
    }, [nameIsValid, streetIsValid, postalCodeIsValid, cityIsValid]);

    const confirmHandler = e => {
        e.preventDefault();

        if (!formIsValid) return;

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postal: enteredPostalCode
        });

        resetNameInput();
        resetStreetInput();
        resetPostalCodeInput();
        resetCityInput();
    }

    const nameInputClasses = nameHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    const streetInputClasses = streetHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    const postalCodeInputClasses = postalCodeHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    const cityInputClasses = cityHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type='text'
                    id='name'
                    value={enteredName}
                    onBlur={nameInputBlurHandler}
                    onChange={nameInputChangeHandler}
                />
                {nameHasError && <label>Name field is required</label>}
            </div>
            <div className={streetInputClasses}>
                <label htmlFor="street">Street</label>
                <input
                    type='text'
                    id='street'
                    value={enteredStreet}
                    onBlur={streetInputBlurHandler}
                    onChange={streetInputChangeHandler}
                />
                {streetHasError && <label>Street field is required</label>}
            </div>
            <div className={postalCodeInputClasses}>
                <label htmlFor="postal">Postal Code</label>
                <input
                    type='text'
                    id='postal'
                    value={enteredPostalCode}
                    onBlur={postalCodeInputBlurHandler}
                    onChange={postalCodeInputChangeHandler}
                />
                {postalCodeHasError && <label>Postal code field is required</label>}
            </div>
            <div className={cityInputClasses}>
                <label htmlFor="city">City</label>
                <input
                    type='text'
                    id='city'
                    value={enteredCity}
                    onBlur={cityInputBlurHandler}
                    onChange={cityInputChangeHandler}
                />
                {cityHasError && <label>City field is required</label>}
            </div>
            <Button type='submit' disabled={!formIsValid}>
                Proceed
            </Button>
        </form>
    );

}

export default Checkout;