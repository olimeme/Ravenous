const apiKey = "YOUR API KEY GOES HERE";
const Yelp = {
    search(term,location,sortBy){
        const path = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(path,{
            headers: {
                Aughorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json(); 
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                jsonResponse.map(business =>{
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    };
                });
            }
        });
    }
};

export default Yelp;