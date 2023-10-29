// routes/home/index.tsx

import { TeamMember } from "../../components/TeamMember/TeamMember"; // Adjust the path as necessary

export const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <TeamMember
        name="Dr. Matthew Horwitz"
        position="Founder and Editor-in-chief"
        imageUrl="https://via.placeholder.com/80x108"
      />
    </div>
  );
};
