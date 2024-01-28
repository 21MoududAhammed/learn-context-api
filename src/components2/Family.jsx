import { FamilyContext } from "./Context";
import Parent from "./Praent";
import familyInfo from "./data";

export default function Family(){
    return (
      <FamilyContext.Provider value={familyInfo}>
        <div className="family">
          <h1>Family Name: {familyInfo.name}</h1>
          <Parent/>
      </div>
      </FamilyContext.Provider>
    );
}