import { useContext } from "react";
import Child from "./Child";
import { FamilyContext } from "./Context";

export default function Parent(){
    const info = useContext(FamilyContext)
    return (
        <div className="parent">
            <h2>Parent Name : {info.parentName}</h2>
            <p>Parent Age: {info.parentAge} Years old</p>
            <Child/>
        </div>
    );
}