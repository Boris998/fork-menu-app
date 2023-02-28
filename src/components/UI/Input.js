import React from "react";

const Input = React.forwardRef((props, ref) => {
    return <>
        <input ref={ref}
               {...props.input}
               type="number"
               min={1}
               max={10}
               defaultValue={1}
               style={{width: '5vh', fontSize: '2rem', height: '3vh', borderRadius: '5px'}}
        />
    </>
});

export default Input;
