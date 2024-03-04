import React from 'react';

const PanelDeAdministracion = () => {
  return (
    <div className="admin-table-container">
    <table className="admin-table">
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
          <th>Columna 3</th>
          <th>Columna 4</th>
          <th>Columna 5</th>
          <th>Columna 6</th>
          <th>Columna 7</th>
          <th>Columna 8</th>
          <th>Columna 9</th>
          <th>Columna 10</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(10)].map((_, colIndex) => (
              <td key={colIndex}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};


export default PanelDeAdministracion