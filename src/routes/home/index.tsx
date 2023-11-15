// routes/home/index.tsx
import EpisodesSection from "../../components/episodes-section/episodes-section";
export const Home = () => {
  const num: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <EpisodesSection card={num}></EpisodesSection>
      {/* <div className=" sm:text-green md:text-pink lg:text-blue xl:text-yellow"> */}
      {/* Ahmed */}
      {/* </div> */}
    </div>
  );
};
