import React,{useState} from "react";

export default function ToDoItem(props){

    const [line,setLine] = useState(false)

    function handleClick(){
        setLine(prevLine => !prevLine);
    }


    return <li onClick = {handleClick} style={{"text-decoration": line ? "line-through" : "none" }}>{props.text}</li>;
}