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
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }
};

export default Yelp;