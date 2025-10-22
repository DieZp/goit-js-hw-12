import axios from "axios";

export default function getImagesByQuery(query) {  
  return axios
    .get('https://pixabay.com/api/', {
                    params: {
                      key: '52741134-5926d2746c8ce75ed1523309f',
                      q: query,
                      image_type: "photo",
                      orientation: 'horizontal',
                      safesearch: true,
                      per_page: 36,
                    }
                  })
    .then(response => {      
      return response.data.hits;
    })
    .catch(() => {      
      return [];
    });    
}