import { useState, React } from 'react'
import { GraphQLProvider, useGraphQL } from "./context/GraphQLContext";
import Table from './components/TableU'


function PokemonsView() {
  const { data, loading, error } = useGraphQL();

  if (loading) return <p>⏳ Cargando...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Pokémones PRUEBA GITHUB 
      </h1>
      <Table data={data.pokemon_v2_pokemon} />
    </div>
  );
}

function App() {

  return (
    <GraphQLProvider>
      <PokemonsView />
    </GraphQLProvider>
  )
}

export default App
