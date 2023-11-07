import type { PropsWithChildren } from "react";
import * as React from "react";
import { useState } from "react";
// import { useState } from React;

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

export const ExpandableSection = (
  props: PropsWithChildren<MyComponentsProps>,
) => {
  const [rows, setRows] = useState<Array<number>>([]);
  const [fakeCounter, setFakeCounter] = useState(2);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const updateItems = (counter) => {
    console.log(counter);
    const res = numbers.slice(0, counter).map((number) => number);
    console.log(res);
    setRows(res);
    console.log(res);
    return res;
  };
  // const MyFunctionComponent: React.FC = (): SVGRectElement? => {
  const clicked = () => {
    // const clicked = () => {
    console.log("here");
    if (fakeCounter > 10) return <div></div>;
    setFakeCounter(fakeCounter + 2);
    updateItems(fakeCounter);
    return (
      <div className={`${props?.itemConfig["primaryLower"]}`}>More Posters</div>
    );
  };
  return (
    /**
     * should it get probs or children ?!
     */

    <div className={`${props?.itemConfig["secondaryTop"]}`}>
      {/* Dont forget to add the wrapping for flex views */}
      <div
        className={`flex flex-row justify-between items-center p-3 bg-primary text-white flex-wrap w-1200px rounded-xl relative`}
      >
        {rows.map((row) => {
          return (
            <div key={row} className="bg-lime-600 w-500px h-500px">
              {row}
            </div>
          );
        })}
      </div>
      {fakeCounter <= 10 ? ( // 10 is a replacement of the max amount of elements avalilabe to show
        <div
          onClick={clicked}
          className={`${props?.itemConfig["primaryLower"]}`}
        >
          More Posters
        </div>
      ) : (
        <div></div>
      )}
      {props?.children}
    </div>
  );
};
