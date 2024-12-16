import React,{useState}from "react";

function Mybutton(){
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Button clicked!');
      };
    return (
        <div>
            
      <h1> Well com come to the button page</h1>
    <button onClick={handleClick}> I am button</button>
    <p>{message}</p>
</div>
    );

}
export default Mybutton;
