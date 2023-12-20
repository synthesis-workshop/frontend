import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global/default.css";
import { Courses, Episodes, Home, ProblemSetsPage, PublicationsPage } from "./routes";

const client = new ApolloClient({
  uri:
    //in Vite, use special object `import.meta.env` to access enviroment variables
    import.meta.env.MODE === "production"
      ? //created environment variables must be prefixed by VITE
        "https://synthesis-workshop-backend-97f537f332bd.herokuapp.com/api/graphql"
      : "http://localhost:8080/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          problemSets: {
            keyArgs: ["orderBy", "take"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          publications: {
            keyArgs: ["orderBy", "take"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/problem-sets" element={<ProblemSetsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
