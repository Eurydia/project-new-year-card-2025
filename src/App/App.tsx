import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { FC } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router";
import { LoaderData } from "../types/loader";
import { ContentView } from "../views/ContentView";
import { HomeView } from "../views/HomeView";
import { theme } from "./theme";

const router = createBrowserRouter(
  [
    {
      index: true,
      element: <HomeView />,
    },
    {
      path: "/card",
      loader: ({ request }) => {
        const url = new URL(request.url);
        const queryParam = url.searchParams;
        if (queryParam.has("id")) {
          return redirect(`/card/${queryParam.get("id")!}`);
        }
        return redirect("/");
      },
    },
    {
      path: "/card/:id",
      element: <ContentView />,
      loader: async ({ params }) => {
        const { id } = params;
        if (id === undefined) {
          return redirect("/");
        }
        const request = await fetch(
          `/project-new-year-card-2024/assets/content/${id}.md`
        );
        if (!request.ok) {
          return redirect("/");
        }
        const content = await request.text();
        console.log(content);
        const loaderData: LoaderData = {
          content,
        };
        return loaderData;
      },
    },
  ],
  {
    basename: "/project-new-year-card-2024/",
  }
);

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url(/project-new-year-card-2024/img.jpg)",
            // background: `linear-gradient(to bottom right, ${yellow["100"]}, ${yellow["100"]}, ${orange["100"]},${orange["100"]},  ${red["100"]})`,

            // backgroundColor: red["50"],
          },
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
