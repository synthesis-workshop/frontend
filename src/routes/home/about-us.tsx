import { useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { GET_ABOUT_US } from "../../graphql/about-us";
import {
  faSquareTwitter,
  faFontAwesome,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../../components";

library.add(fas, faSquareTwitter, faFontAwesome);
export const AboutUs: React.FC = () => {
  const { loading, data } = useQuery(GET_ABOUT_US, {
    variables: {},
  });
  return (
    <div className="flex flex-col gap-y/[100px] my-24">
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-primary text-title-32px font-title font-normal leading-9">
          Subscribe to Our Socials
        </h2>
        <div className="flex flex-row gap-x-3">
          {data?.links?.map((link) => (
            <Button
              key={link.id}
              className="px-[16px] py-[10px]"
              variant="social"
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
              {link.title}
            </Button>
          ))}
        </div>
        <p className="text-primary">
          Email: <a href="#">synthesisworkshopvideos@gmail.com</a>
        </p>
      </div>
      <div className="flex flex-col gap-[80px] items-center">
        <div className="flex flex-col w-[809px] gap-[20px]">
          <h2 className="text-primary text-title-32px font-title font-normal leading-9">
            About us
          </h2>
          <p className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px]">
            {data?.metas?.map((metaData) => (
              <DocumentRenderer document={metaData.about?.document} />
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-primary text-title-32px font-title font-normal leading-9">
            Our Mission
          </h2>
          <div className="flex flex-col items-center w-[809px] gap-[30px] text-xl font-text text-primary leading-[27px] tracking-[-0.4px]">
            {/* <span className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px]"> */}
            {data?.metas?.map((metaData) => (
              <DocumentRenderer document={metaData.mission?.document} />
            ))}
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
