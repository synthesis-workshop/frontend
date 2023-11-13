import type { PropsWithChildren } from "react";
import * as React from "react";
import { useState } from "react";
// import { useState } from React;

// represents the diffrent designs and background colors that can be passed to the section
export interface ItemConfig {
  primaryTop: string;
  primaryLower: string;
  secondaryTop: string;
  secondaryLower: string;
}

interface MyComponentsProps {
  itemConfig: ItemConfig;
}

export const ExpandableSection = (
  props: PropsWithChildren<MyComponentsProps>,
) => {
  const [rows, setRows] = useState<Array<number>>([]); // the elements to show, for now it's array[numbers] later it should be array[nodeComponent]
  const [fakeCounter, setFakeCounter] = useState(2); // the number of elements to show it updates everytime you click on more button

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const updateItems = (counter) => {
    // it slices the array based on the number of items to show
    // the array is just representation it should be array of nodeComponents
    const res = numbers.slice(0, counter).map((number) => number);
    setRows(res);
    return res;
  };

  // to show the needed items at the first render
  React.useEffect(() => {
    numbers.slice(0, 2).map((number) => number);
    setFakeCounter(fakeCounter + 2);
    setRows(numbers.slice(0, 2).map((number) => number));
    // NOTE: Run effect once on component mount, please
    // recheck dependencies if effect is updated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function it gets called by clicking more button
  const clicked = () => {
    setFakeCounter(fakeCounter + 2);
    updateItems(fakeCounter);
  };
  return (
    // this first dev needs to chage based on what option you will use for the interior divs maybe we will need to add configuration for this as well later
    <div
      className={`flex flex-col justify-between items-center p-3 text-white min-h-200px w-1400px rounded-xl relative bg-greyBg`}
    >
      {/* <div className={`${props?.itemConfig["secondaryTop"]}`}> */}
      {/* change to this with storybook */}
      <div
        className={`flex flex-col justify-between items-center bg-secondary text-black min-h-200px w-1200px rounded-xl relative`}
      >
        {/* where children should be called */}
        {/* {props?.children} */}
        {/* Dont forget to add the wrapping for flex views "here it's implemented in Itemconfig for diffrent styles"*/}
        {rows.map((row) => {
          return (
            <div key={row} className="bg-primary w-500px h-100px">
              {row}
            </div>
          );
        })}
      </div>

      {fakeCounter <= 10 ? ( // 10 is a replacement of the max amount of elements avalilabe to show
        /* change to this with storybook */
        // <div
        //   onClick={clicked}
        //   className={`flex cursor-pointer justify-center items-center bg-secondary text-black w-276px h-57px rounded-b-xl relative`}
        // >
        <div
          onClick={clicked}
          className={`${props?.itemConfig["secondaryLower"]}`}
        >
          More Posters
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
