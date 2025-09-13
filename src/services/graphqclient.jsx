export async function graphqlRequest(
    query,
    variables = {},
    uri = "https://beta.pokeapi.co/graphql/v1beta"
  ) {
    const response = await fetch(uri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
  
    const { data, errors } = await response.json();
  
    if (errors) {
      throw new Error(errors.map((e) => e.message).join(", "));
    }
  
    return data;
  }
  