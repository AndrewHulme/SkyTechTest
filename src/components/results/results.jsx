import React from "react";

function Results(props) {
  return (
    <div id="results">
      <table>
        <tbody>
          <tr>
            <th>Media Type</th>
            <th>Name/Title</th>
          </tr>

          {props.results.map((result) => (
            <tr
              id={"id" + result.id}
              className="tableRow"
              key={result.id}
              onClick={() => props.onDetails(result)}
            >
              <td>{result.media_type !== undefined && result.media_type}</td>
              <td>{result.title !== undefined ? result.title : result.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
