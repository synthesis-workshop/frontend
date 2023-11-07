import { ExpandableSection } from "../../components/ExpandableSection/ExpandableSection";
import { ItemConfig } from "../../components/ExpandableSection/ExpandableSection";
const p: ItemConfig = {
  primaryTop: `flex flex-row justify-between items-center p-3 bg-primary text-white h-200px w-1200px rounded-xl relative`, // dark theme top part
  primaryLower: `flex cursor-pointer justify-center items-center bg-primary text-white w-276px h-57px rounded-b-xl relative`, // dark theme lower
  secondaryTop: `flex flex-col justify-between items-center p-3 bg-secondary text-black h-200px w-1200px rounded-xl relative`, // light theme top
  secondaryLower: `flex cursor-pointer justify-center items-center bg-secondary text-black w-276px h-57px rounded-b-xl relative`, // light theme lower
};
export const Home = () => {
  return (
    <div>
      here
      <ExpandableSection itemConfig={p} count={10}></ExpandableSection>
    </div>
  );
};
