import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const TelosShopApp = () => {
  return <RouterProvider router={appRouter} />
}
