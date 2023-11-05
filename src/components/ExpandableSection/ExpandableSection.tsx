import type { PropsWithChildren } from "react";

export interface ItemConfig {
  primaryTop: string;
  primaryLower: string;
  secondaryTop: string;
  secondaryLower: string;
}

interface MyComponentsProps {
  itemConfig: ItemConfig;
  count: number;
}
// const array = [1, 2, 3, 4, 5, 6];
// let m = new Map();
// const elementsToShow = (num: number) => {
//   for (let i = 1; i <= 6; i++);
//   m.set(1, 1);
// };

const clicked = () => {
  console.log("here");
};

export const ExpandableSection = (
  props: PropsWithChildren<MyComponentsProps>,
) => {
  return (
    /**
     * should it get probs or children ?!
     */

    <div className={`flex flex-col justify-between items-center bg-greyBg`}>
      <div className={`${props?.itemConfig["secondaryTop"]}`}>
        {props?.count}
      </div>
      <div onClick={clicked} className={`${props.itemConfig["primaryLower"]}`}>
        More Posters
      </div>
      {props.children}
    </div>
  );
};
