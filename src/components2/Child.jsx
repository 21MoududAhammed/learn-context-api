import { useContext } from "react";
import GrandDaughter from "./GrandDaughter";
import GrandSon from "./grandSon";
import { FamilyContext } from "./Context";

export default function Child(){
    const info = useContext(FamilyContext);
    return (
       <div className="child">
        <h2>Child Name: {info.childName}</h2>
        <GrandSon/>
        <GrandDaughter/>
       </div> 
    );
}