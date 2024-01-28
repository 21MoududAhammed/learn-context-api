import { useContext } from "react";
import { FamilyContext } from "./Context";

export default function GrandDaughter(){
    const familyInfo = useContext(FamilyContext);
    return (
        <div className="grand-daughter">
            <h2>GrandDaughter Name: {familyInfo.grandDaughterName}</h2>
        </div>
    );
}