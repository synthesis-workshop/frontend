import React from "react";

interface PublicationCard {
  section: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  category: string;
  doi: string;
}

const PublicationCard: React.FC<PublicationCard> = ({
  section,
  title,
  subtitle,
  author,
  date,
  category,
  doi,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <span className="text-gray-600">{section}</span>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mb-2">{subtitle}</p>
      <p className="text-gray-600 mb-2">Author: {author}</p>
      <p className="text-gray-600 mb-2">Date: {date}</p>
      <p className="text-gray-600 mb-2">Category: {category}</p>
      <p className="text-gray-600 mb-2">DOI: {doi}</p>
      <a href="#" className="text-blue-600 hover:underline">
        Read the Full Article
      </a>
    </div>
  );
};

export default PublicationCard;
