import React from "react";

const Input = React.forwardRef((props, ref) => {
    return <>
        <input ref={ref}
               {...props.input}
               type="number"
               min={1}
               max={10}
               defaultValue={1}
               style={{width: '7vh', fontSize: '2.5rem', height: '5vh', borderRadius: '5px'}}
        />
    </>
});

export default Input;
