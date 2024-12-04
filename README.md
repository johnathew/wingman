# Wingman App

## Overview

The Wingman App is a React-based application that fetches and displays a list of products. Users can search for products and filter them based on various criteria such as price and rating.

## Features

- Fetches product data using `TanStack react-query`
- Debounced search functionality
- Loading and error handling
- Product filtering by price and rating

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/wingman-app.git
   cd wingman-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage

### Components

#### Wingman

The main component that handles fetching and displaying products. It includes search and filter functionalities.

#### Product

A component that displays individual product information.

#### Loading

A component that displays a loading indicator while data is being fetched.

#### Dropdown

A component that allows users to select a filter option.

### Hooks

#### useDebounce

A custom hook that debounces the search input to avoid excessive API calls.

### API

#### fetchProducts

A function that fetches product data from an API.

## Code Structure

```plaintext
src/
├── components/
│   ├── Loading/
│   │   └── index.tsx
│   ├── Product/
│   │   └── index.tsx
│   ├── Dropdown/
│   │   └── index.tsx
│   └── Wingman/
│       └── index.tsx
├── util/
│   └── useDebounce.ts
└── api/
    └── fetchProducts.ts
```

## Example

### Wingman Component

```tsx
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import Product from "../Product";
import Dropdown from "../Dropdown";
import { fetchProducts } from "../../api/fetchProducts";
import { useDebounce } from "../../util/useDebounce";

function Wingman() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isPending) return <Loading />;

  if (isError) return <h3>Error: {error.message}</h3>;

  const products = data.map((product) => {
    return <Product key={product.id} productInfo={product} />;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  if (filter === "Price: Low to High") {
    products.sort(
      (a, b) => a.props.productInfo.price - b.props.productInfo.price
    );
  } else if (filter === "Price: High to Low") {
    products.sort(
      (a, b) => b.props.productInfo.price - a.props.productInfo.price
    );
  } else if (filter === "Rating: Low to High") {
    products.sort(
      (a, b) =>
        a.props.productInfo.rating.rate - b.props.productInfo.rating.rate
    );
  }

  return (
    <>
      <Dropdown onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products}
      </div>
    </>
  );
}

export default Wingman;
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
