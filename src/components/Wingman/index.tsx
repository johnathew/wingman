import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/api";
import Product from "../Product";
import { useState } from "react";
import Dropdown from "../Dropdown";
import SearchBar from "../SearchBar";
import { useDebounce } from "../../util/useDebounce";
import Loading from "../Loading";
import Error from "../Error";

function Wingman() {

    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    const debouncedSearch = useDebounce(search);

    const { isPending, isError, data } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isPending) return <Loading />

    if (isError) return <Error />

    const products = data.map((product) => {
        return <Product key={product.id} productInfo={product} />
    })

    const handleFilterChange = (filter: string) => {
        setFilter(filter)
    }

    if (filter === 'Price: Low to High') {
        products.sort((a, b) => a.props.productInfo.price - b.props.productInfo.price)
    } else if (filter === 'Price: High to Low') {
        products.sort((a, b) => b.props.productInfo.price - a.props.productInfo.price)
    } else if (filter === 'Rating: Low to High') {
        products.sort((a, b) => a.props.productInfo.rating.rate - b.props.productInfo.rating.rate)
    } else if (filter === 'Rating: High to Low') {
        products.sort((a, b) => b.props.productInfo.rating.rate - a.props.productInfo.rating.rate)
    } else if (filter === 'Featured') {
        products.sort((a, b) => a.props.productInfo.id - b.props.productInfo.id)
    }



    if (debouncedSearch) {
        const filteredProducts = products.filter((product) => {
            return product.props.productInfo.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        })
        return (
            <>
                <Dropdown onFilterChange={handleFilterChange} ariaLabel="Filter products" />
                <SearchBar onChange={setSearch} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {filteredProducts}
                </div>
            </>
        );
    }

    return (
        <>
            <Dropdown onFilterChange={handleFilterChange} ariaLabel="Filter products" />
            <SearchBar onChange={setSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {products}
            </div>
        </>
    );
}

export default Wingman;