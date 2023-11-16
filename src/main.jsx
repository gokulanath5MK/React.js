import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const priceCard = [
  {
    "id": 1,
    "Header": "FREE",
    "features": ['✓ Single UserActivation', '✓ 50GB Storage', '✓ Unlimited Public Projects', '✓ Community Access', 'x Unlimited Private Projects', 'x Dedicated Phone Support', 'x Free Subdomain', 'x Monthly Status Reports']
  },
  {
    "id": 2,
    "Header": "PLUS",
    "features": ['✓ 5 Users', '✓ 50GB Storage', '✓ Unlimited Public Projects', '✓ Community Access', '✓ Unlimited Private Projects', '✓ Dedicated Phone Support', '✓ Free Subdomain', 'x Monthly Status Report']
  },
  {
    "id": 3,
    "Header": "PRO",
    "features": ['✓ Unlimited Users', '✓ 50GB Storage', '✓ Unlimited Public Projects', '✓ Community Access', '✓ Unlimited Private Projects', '✓ Dedicated Phone Support', '✓ Free Subdomain', '✓ Monthly Status Reports']
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(<App priceCard={priceCard} />);