import Layout from "../components/Layout";
import CategoryLinks from "../components/CategoryLinks";
import LinkButton from "../components/LinkButton";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "Something went wrong";
  let message = "An unexpected error occurred";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Error 404";
      message = "Page not found";
    } else {
      title = `Error ${error.status}`;
      message = error.statusText;
    }
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{message}</p>
      <LinkButton to="/">Go Home</LinkButton>
      <CategoryLinks />
    </Layout>
  );
}
