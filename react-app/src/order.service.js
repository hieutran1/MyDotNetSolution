import React, { useEffect, useState } from 'react';

function App() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/order/1')
      .then(res => res.json())
      .then(data => setOrder(data));
  }, []);

  return (
    <div>
      <h1>Order</h1>
      {order && <pre>{JSON.stringify(order, null, 2)}</pre>}
    </div>
  );
}

export default App;