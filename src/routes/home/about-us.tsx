import React from "react";
import { useQuery } from "@apollo/client";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { GET_ABOUT_US } from "../../graphql/about-us";
import { Button } from "../../components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uniqueId } from "lodash";

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
              key={item.key}
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

const socials = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/synthesis.workshop/",
    icon: faInstagram,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/synthesis-workshop/",
    icon: faLinkedin,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/MatthewHorwitz1",
    icon: faTwitterSquare,
  },
  {
    label: "YouTube",
    link: "https://www.youtube.com/@SynthesisWorkshopVideos",
    icon: faYoutubeSquare,
  },
];

export const AboutUs: React.FC = () => {
  const { data } = useQuery(GET_ABOUT_US, {
    variables: {},
  });

  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col gap-y/[100px]" id="about">
      <div className="flex flex-col gap-y-8 items-center  md:w-[809px] md:max-w-[728px] md:px-3 sm:px-[25px] sm:h-auto ">
        <h2 className="text-primary text-section-title font-title font-normal leading-9">
          Subscribe to Our Socials
        </h2>
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          {socials.map(({ label, link, icon }) => (
            <Link
              key={uniqueId(label)}
              to={link}
              className="h-11 text-left flex items-center w-fit"
              target="_blank"
            >
              <Button
                className="px-4 py-2.5 w-fit flex flex-row justify-center"
                variant="social"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="text-white w-7 h-7 ml-0 mr-2.5 my-0 opacity-80"
                />
                <p className="opacity-80">{label}</p>
              </Button>
            </Link>
          ))}
        </div>
        <p className="text-primary sm:text-lg font-text md:h-auto text-center">
          <a href="mailto:synthesisworkshopvideos@gmail.com">
            Email: synthesisworkshopvideos@gmail.com
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-[80px] items-center max-w-[809px] mt-[100px] md:max-w-[728px] md:px-3 sm:px-[25px] sm:mt-[80px] ">
        <div className="flex flex-col gap-5">
          <h2 className="text-primary text-section-title font-title font-normal leading-9 ">
            About us
          </h2>
          <div className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px] sm:text-lg sm:w-auto sm:h-auto ">
            {showContent ? (
              data?.metas?.map((metaData) => (
                <DocumentRenderer
                  key={metaData.id}
                  document={metaData.about?.document}
                  renderers={renderers}
                />
              ))
            ) : (
              <Skeleton height={50} borderRadius={12} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5  ">
          <h2 className="text-primary text-section-title font-title font-normal leading-9">
            Our Mission
          </h2>
          <div className="flex flex-col">
            <div className="text-xl font-text text-primary leading-[27px] tracking-[-0.4px] sm:text-lg">
              {showContent ? (
                data?.metas?.map((metaData) => (
                  <DocumentRenderer
                    key={metaData.id}
                    document={metaData.mission?.document}
                    renderers={renderers}
                  />
                ))
              ) : (
                <Skeleton height={50} borderRadius={12} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
