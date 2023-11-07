import { ExpandableSection } from "../../components/ExpandableSection/ExpandableSection";
import { ItemConfig } from "../../components/ExpandableSection/ExpandableSection";
// represents the diffrent background color and design that can be handled to this Component
// first 2 represents dark mode
// second 2 represent light mode
const p: ItemConfig = {
  primaryTop: `flex flex-row justify-between items-center p-3 bg-primary text-white min-h-200px w-1200px rounded-xl relative`, // dark theme top part
  primaryLower: `flex cursor-pointer justify-center items-center bg-primary text-white w-276px h-57px rounded-b-xl relative`, // dark theme lower
  secondaryTop: `flex flex-col justify-between items-center bg-secondary text-black min-h-200px w-1200px rounded-xl relative`, // light theme top
  secondaryLower: `flex cursor-pointer justify-center items-center bg-secondary text-black w-276px h-57px rounded-b-xl relative`, // light theme lower
};
export const Home = () => {
  return (
    <div>
      here
      <ExpandableSection itemConfig={p}></ExpandableSection>
    </div>
  );
};
