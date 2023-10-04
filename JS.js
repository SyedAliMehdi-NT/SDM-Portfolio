

fetch('https://owlapplicationbuilder.com/api/entities/simpler_digital_marketing_1580295343903_96/portfolio_category/get_all_en')
  .then(response => response.json())
  .then(data => {
    const portFolio = data.data;
    console.log(portFolio);

    if (Array.isArray(portFolio)) {
        portFolio.forEach(category => {
          console.log(category);
          const portCategory = category.portfolioCategory;
          console.log(portCategory);
        });
      } else {
        console.log(TitleCategory);
      }   
  })
  .catch(error => console.log('Error:', error));


  fetch('https://owlapplicationbuilder.com/api/entities/simpler_digital_marketing_1580295343903_96/portfolio/get_all_en')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // assuming the API returns JSON data
  })
  .then(data => {
    const detailData = data.data;
    console.log(detailData);

    if (Array.isArray(detailData)) {
        detailData.forEach(category => {
          console.log(category);
          const detailCategory = category.categoryRelationey;
          console.log(detailCategory);
        });
      } else {
        console.log("Error");
      } 
     })
  .catch(error => {
    console.log('There was a problem with the fetch operation:', error.message);
  });
