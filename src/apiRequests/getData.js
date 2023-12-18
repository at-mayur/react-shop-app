
// custom fetch function
async function customFetch(url, { body, config }){

    try {

        // header for request
        const headers = {
            "Content-Type": "application/json"
        };

        // configuring options for fetch.
        let configuration = {
            ...config,
            headers
        };

        // if body is present then include in configuration.
        if(body){
            // JSON.Stringify to convert object to string
            configuration.body = JSON.stringify(body);
        }

        // send request
        let response = await fetch(url, configuration);

        // get json data from response
        let data = await response.json();

        // return data
        if(response.status===200 || response.status===201){
            return {
                data,
                success: true
            };
        }
    
        return {
            success: false,
            msg: "Error getting data from API"
        };
        
    } catch (error) {
        
        console.error(error);
        return {
            success: false,
            msg: error
        };

    }

}


// function to get products list
export function getAllProducts(limit, skip){

    // url and config with method as GET
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    const responseData = customFetch(url, {config})
    .then((response) => {
        if(response.success){
            return response.data;
        }
        else{
            return [];
        }
    })
    .catch((error) => {
        console.error(error);
        return [];
    });

    return responseData;
    
}


export function getAllCategories(){

    // url and config with method as GET
    let url = `https://dummyjson.com/products/categories`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    const responseData = customFetch(url, {config})
    .then((response) => {
        if(response.success){
            return response.data;
        }
        else{
            return [];
        }
    })
    .catch((error) => {
        console.error(error);
        return [];
    });

    return responseData;
    
}

export function getAllProductsByCategory(category){

    // url and config with method as GET
    let url = `https://dummyjson.com/products/category/${category}`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    const responseData = customFetch(url, {config})
    .then((response) => {
        if(response.success){
            return response.data;
        }
        else{
            return [];
        }
    })
    .catch((error) => {
        console.error(error);
        return [];
    });

    return responseData;
    
}

export function getAllProductById(id){

    // url and config with method as GET
    let url = `https://dummyjson.com/products/${id}`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    const responseData = customFetch(url, {config})
    .then((response) => {
        if(response.success){
            return response.data;
        }
        else{
            return [];
        }
    })
    .catch((error) => {
        console.error(error);
        return [];
    });

    return responseData;
    
}

export function searchProductByQuery(query){

    // url and config with method as GET
    let url = `https://dummyjson.com/products/search?q=${query}`;
    let config = {
        method: "GET"
    };

    // get data by using above declared custom fetch
    const responseData = customFetch(url, {config})
    .then((response) => {
        if(response.success){
            return response.data;
        }
        else{
            return [];
        }
    })
    .catch((error) => {
        console.error(error);
        return [];
    });

    return responseData;
    
}