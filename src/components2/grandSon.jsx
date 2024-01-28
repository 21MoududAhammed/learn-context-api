import { useContext } from "react";
import { FamilyContext } from "./Context";


export default function GrandSon(){
    // we can receive data with any name like info 
    const info = useContext(FamilyContext);
    return (
        <div className="grand-son">
            <h1>GrandSon Name: {info.grandSonName}</h1>
        </div>
    );
}