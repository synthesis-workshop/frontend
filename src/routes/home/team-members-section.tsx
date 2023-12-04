// import { TeamMemberProps } from "../../components";

import { TeamMember } from "../../components";

// create data
// const data: TeamMemberProps[] = [
//   {
//     className: "first",
//     name: "Dr. Matthew Horwitz",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "third",
//     name: "2",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "second",
//     name: "3",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "first",
//     name: "4",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "first",
//     name: "5",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "third",
//     name: "6",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "first",
//     name: "7",
//     title: "Founder and Editor-in-chief",
//   },
//   {
//     className: "third",
//     name: "8",
//     title: "Founder and Editor-in-chief",
//   },
// ];

const data = [
  {
    className: "first",
    name: "Dr. Matthew Horwitz",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "third",
    name: "2",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "second",
    name: "3",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "first",
    name: "4",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "first",
    name: "5",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "third",
    name: "6",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "first",
    name: "7",
    title: "Founder and Editor-in-chief",
  },
  {
    className: "third",
    name: "8",
    title: "Founder and Editor-in-chief",
  },
];

// const renderData = () => {
//   return <div>Ahmed</div>;
// };

export const TeamMembersSection = () => {
  //   renderData();
  return (
    <div className={`pt-36 mx-10 w-full max-w-screen-xl`}>
      <p className=" font-title text-3xl pb-8 ">Who We Are</p>
      <div className="flex flex-col gap-14">
        <div
          className={`grid grid-cols-3 gap-5 auto-cols-[387px] auto-rows-h-24 pd-1`}
        >
          {data.slice(0, 4).map((item) => (
            <TeamMember {...item} />
          ))}
        </div>
        <div
          className={`grid grid-cols-3 gap-5 auto-cols-[387px] auto-rows-h-24 pd-1`}
        >
          {data.slice(3, 6).map((item) => (
            <TeamMember {...item} />
          ))}
        </div>
        <div
          className={`grid grid-cols-3 gap-5 auto-cols-[387px] auto-rows-h-24 pd-1`}
        >
          {data.slice(6, 8).map((item) => (
            <TeamMember {...item} />
          ))}
        </div>
        <div className="h-60 bg-secondry">Safy</div>
      </div>
    </div>
  );
};
