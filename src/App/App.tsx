import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, useEffect } from "react";
import {
  createHashRouter,
  redirect,
  RouterProvider,
} from "react-router";
import { encryptDocument } from "../core/crypto";
import { LoaderData } from "../types/loader";
import { ContentView } from "../views/ContentView";
import { HomeView } from "../views/HomeView";
import { theme } from "./theme";
const router = createHashRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/card",
    loader: ({ request }) => {
      const url = new URL(request.url);
      const queryParam = url.searchParams;
      if (!queryParam.has("id")) {
        return redirect("/");
      }
      return redirect(`/card/${queryParam.get("id")!}`);
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
      const response = await fetch(
        `${
          import.meta.env.BASE_URL
        }assets/content/${id}.enc`
      );
      if (!response.ok) {
        return redirect("/");
      }
      const contentType =
        response.headers.get("content-type");
      if (contentType === "text/html") {
        return redirect("/");
      }
      const content = await response.text();
      const loaderData: LoaderData = {
        id,
        content,
      };
      return loaderData;
    },
  },
  {
    path: "*",
    loader: () => {
      return redirect("/");
    },
  },
]);

export const App: FC = () => {
  useEffect(() => {
    (async () => {
      const { encryptedDocument, iv } =
        await encryptDocument(
          `# _Dear Aiz,_

As 2025 is getting closer, actually, by the time you are reading this message, it is most likely 2025 already.

Nonetheless, I just wanted to take a moment to send you my warmest wishes for 2025. May it bring opportunities, growth, and success. May you be blessed with good health, and fortune. May you be blessed with a reason to laugh and smile in each and every day.

**_Happy new year!_**

Sincerely,

Thanakorn Phuttharaksa
`,
          "dear-aiz"
        );
      console.debug(encryptedDocument, iv);
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
