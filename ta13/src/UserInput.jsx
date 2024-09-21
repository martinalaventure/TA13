import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserInput() {
  const { setUserName } = useContext(UserContext);

  const handleChange = (e) => {
    setUserName(e.target.value); 
  };

  return (
    <div>
      <h2>Actualizar Nombre de Usuario</h2>
      <input 
        type="text" 
        placeholder="Escribe tu nombre" 
        onChange={handleChange}
      />
    </div>
  );
}

export default UserInput;
