/*import { useCallback } from "react";*/
import { getProducts } from "../components/ProductDetailContainer";

useEffect(() => {
    setIsLoading(true);
    getProducts()
        .then((result) =>
            setProducts (
                category
                result.filter((item) => item.category === category)
                : result
            )
        )
        .catch((error) => console.log.apply(error))
        .finally(() => setIsLoading(false));    
}, [category]);

export default ProductDetailContainer;