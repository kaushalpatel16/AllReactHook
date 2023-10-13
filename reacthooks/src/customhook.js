import React from 'react';
import useApi from './apicustomhook';


function MyComponent() {
  const apiUrl = 'https://631189bb19eb631f9d742399.mockapi.io/Faculty';
  const { data, loading, error } = useApi(apiUrl, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
        
      ))}
    </div>
  );
}

export default MyComponent;
