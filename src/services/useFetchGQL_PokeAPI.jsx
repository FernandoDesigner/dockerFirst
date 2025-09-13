import React, { createContext, useContext, useState, useEffect } from "react";
import { graphqlRequest } from "./graphqclient";

const GraphQLContext = createContext();

export function GraphQLProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = `
      {
        pokemon_v2_pokemon(limit: 10) {
          id
          name
          height
          weight
          pokemon_v2_pokemonspecy {
            color: pokemon_v2_pokemoncolor {
              name
            }
          }
        }
      }
    `;

    graphqlRequest(query, {}, "https://beta.pokeapi.co/graphql/v1beta")
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <GraphQLContext.Provider value={{ data, loading, error }}>
      {children}
    </GraphQLContext.Provider>
  );
}

export function useGraphQL() {
  return useContext(GraphQLContext);
}
