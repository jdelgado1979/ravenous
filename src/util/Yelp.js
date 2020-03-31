const apiKey =
  "dXFiU_heACh5ZHwqPPVn3249I03iLecj9gjndSqrI_k7tq2fh38ybve9KvbaQIUSR6xW11buwrdFTvxe3ple3g1SrJ70wXrjKI0zmlBhgKXB6W1lqxw2pyVbAXN1XnYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
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
