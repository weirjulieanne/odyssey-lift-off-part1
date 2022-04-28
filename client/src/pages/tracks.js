import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      thumbnail
      title
      modulesCount
      length
      author {
        photo
        name
        id
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return "Loading....";
  if (error) return `ERROR ${error.message}`;

  return <Layout grid>{JSON.stringify(data)} </Layout>;
};

export default Tracks;
