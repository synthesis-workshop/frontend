import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
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

const history = createBrowserHistory();

ReactGA.initialize("UA-177211479-1");

// Log the current page we're on since history.listen only listens for changes
ReactGA.set({ page: history.location.pathname, anonymizeIp: true });
ReactGA.pageview(history.location.pathname);

// https://stackoverflow.com/a/34837445/11646872
history.listen((update) => {
  ReactGA.set({ page: update.location.pathname });
  ReactGA.pageview(update.location.pathname);
});

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
            keyArgs: ["orderBy", "where", "take"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          problemSets: {
            keyArgs: ["orderBy", "where", "take"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
          publications: {
            keyArgs: ["orderBy", "where", "take"],
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
