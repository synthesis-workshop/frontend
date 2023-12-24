import { useQuery } from "@apollo/client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { GET_ABOUT_US } from "../../graphql/about-us";
import { Button } from "../../components";
import Instagram from "../../images/instagram_ico.svg";
import Twitter from "../../images/twitter_ico.svg";
import Linkedin from "../../images/linkedin_ico.svg";
import Youtube from "../../images/youtube_ico.svg";
const renderers: DocumentRendererProps["renderers"] = {
  inline: {
    bold: ({ children }) => {
      return <strong>{children}</strong>;
    },
  },
  block: {
    paragraph: ({ children, textAlign }) => {
      return <p style={{ textAlign }}>{children}</p>;
    },
    list: ({ children, type = "unordered" }) => {
      return (
        <ol className="mt-[30px]">
          {children.map((item) => (
            <li
              style={{ listStyleType: type, marginBottom: 15, marginLeft: 25 }}
            >
              {item}
            </li>
          ))}
        </ol>
      );
    },
  },
};

export const AboutUs: React.FC = () => {
  const { loading, data } = useQuery(GET_ABOUT_US, {
    variables: {},
  });
  return (
    <div className="flex flex-col gap-y/[100px] my-24">
      <div className="flex flex-col gap-y-8 items-center  md:w-[809px] md:max-w-[728px] md:px-3 sm:px-[25px] sm:h-auto ">
        <h2 className="text-primary text-title-32px font-title font-normal leading-9">
          Subscribe to Our Socials
        </h2>
        <div className="flex flex-row gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="https://www.instagram.com/synthesis.workshop/"
            target="_blank"
          >
            <Button
              className="px-[16px] py-[10px] sm:w-[155px] flex items-center"
              variant="social"
            >
              <img src={Instagram} />
              Instgram
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-horwitz-8a00861a4/"
            target="_blank"
          >
            <Button
              className="px-[16px] py-[10px] sm:w-[155px] flex items-center"
              variant="social"
            >
              <img src={Linkedin} />
              Linked In
            </Button>
          </a>
          <a href="https://twitter.com/MatthewHorwitz1" target="_blank">
            <Button
              className="px-[16px] py-[10px] sm:w-[155px] flex items-center"
              variant="social"
            >
              <img src={Twitter} />
              Twitter
            </Button>
          </a>
          <a
            href="https://www.youtube.com/c/SynthesisWorkshopVideos/featured"
            target="_blank"
          >
            <Button
              className="px-[16px] py-[10px] sm:w-[155px] flex items-center"
              variant="social"
            >
              <img src={Youtube} />
              YouTube
            </Button>
          </a>
        </div>
        <p className="text-primary sm:text-lg  md:h-auto text-center sm:font-[18px]">
          <a href="mailto:synthesisworkshopvideos@gmail.com">
            Email: synthesisworkshopvideos@gmail.com
          </a>
        </p>
      </div>
      {loading ? (
        <div className="mt-12"></div>
      ) : (
        <>
          <div className="flex flex-col gap-[80px] items-center max-w-[809px] mt-[100px] md:max-w-[728px] md:px-3 sm:px-[25px] sm:mt-[80px] ">
            <div className="flex flex-col gap-[20px]">
              <h2 className="text-primary text-title-32px font-title font-normal leading-9 ">
                About us
              </h2>
              <p className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px] sm:font-[18px] sm:w-auto sm:h-auto ">
                {data?.metas?.map((metaData) => (
                  <DocumentRenderer document={metaData.about?.document} />
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-[20px]  ">
              <h2 className="text-primary text-title-32px font-title font-normal leading-9">
                Our Mission
              </h2>
              <div className="flex flex-col">
                <p className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px] sm:font-[18px]">
                  {data?.metas?.map((metaData) => (
                    <DocumentRenderer
                      document={metaData.mission?.document}
                      renderers={renderers}
                    />
                  ))}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
