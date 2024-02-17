import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import "./global/default.css";
import {
  Courses,
  Episodes,
  Home,
  ProblemSetsPage,
  PublicationsPage,
  Course,
} from "./routes";
import { Header } from "./components/header";
import { ScrollToAnchor, ScrollToTop } from "./utils/scroll";

const client = new ApolloClient({
  uri:
    //in Vite, use special object `import.meta.env` to access enviroment variables
    import.meta.env.MODE === "production"
      ? //created environment variables must be prefixed by VITE
        "https://synthesis-workshop-backend-97f537f332bd.herokuapp.com/api/graphql"
      : "https://synthesis-workshop-backend-97f537f332bd.herokuapp.com/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          episodes: {
            keyArgs: ["orderBy", "take"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
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
        <ScrollToAnchor />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <div className="bg-black/[.06] grow">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/episodes" element={<Episodes />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<Course />} />
              <Route path="/problem-sets" element={<ProblemSetsPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
