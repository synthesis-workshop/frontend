// Types vs Interfaces : type when building applications, interface when building libraries
// Poster card Props created to pass any image, poster title, and poster author to reusable card.
// Button component to be replaced with reusable button component

type PosterCardProps = {
  title: string;
  author: string;
  img: string;
};

// Tailwind CSS baseline. Will be updated as it is integrated

const tailwindClasses = {
  posterCard: "w-full flex flex-wrap bg-primary font-text text-secondary",
  image: "rounded w-full  bg-accent",
  bioWrapper: "w-full my-5 leading-tight ",
  title: "text-[20px]",
  author:
    "text-white/80 text-[14px] mt-2 flex-nowrap text-ellipsis overflow-hidden line-clamp-1",
  button:
    "w-full h-[56px] py-[9px] px-[32px] rounded-lg border-2 border-solid text-[18px]",
};

export const PosterCard = (props: PosterCardProps) => {
  return (
    <div className={tailwindClasses.posterCard}>
      <img
        className={tailwindClasses.image}
        src={props.img}
        alt={props.title}
      />
      <div className={tailwindClasses.bioWrapper}>
        <h2 className={tailwindClasses.title}>{props.title}</h2>
        <p className={tailwindClasses.author}>By {props.author}</p>
      </div>
      <button className={tailwindClasses.button} type="button">
        Download ↓
      </button>
    </div>
  );
};
