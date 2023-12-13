import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTwitter,
  faFontAwesome,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faSquareTwitter, faFontAwesome);
export const AboutUs: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitterSquare} />
      Hot Coffee
    </div>
  );
};
