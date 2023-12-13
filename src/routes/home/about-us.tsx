import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTwitter,
  faFontAwesome,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faSquareTwitter, faFontAwesome);

// library.add(fas);
import cx from "classnames";
export const AboutUs: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faTwitterSquare} />
      Hot Coffee
    </div>
  );
};
