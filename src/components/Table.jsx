import React from "react";

export default function Table({ data }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr style={{ backgroundColor: "#f4f4f4" }}>
          <th style={thStyle}>ID</th>
          <th style={thStyle}>Nombre</th>
          <th style={thStyle}>Altura</th>
          <th style={thStyle}>Peso</th>
          <th style={thStyle}>Color</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id}>
            <td style={tdStyle}>{p.id}</td>
            <td style={tdStyle}>{p.name}</td>
            <td style={tdStyle}>{p.height}</td>
            <td style={tdStyle}>{p.weight}</td>
            <td style={tdStyle}>{p.pokemon_v2_pokemonspecy.color?.name || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const thStyle = { padding: "0.75rem", borderBottom: "2px solid #ddd", textAlign: "left" };
const tdStyle = { padding: "0.75rem", borderBottom: "1px solid #ddd" };
