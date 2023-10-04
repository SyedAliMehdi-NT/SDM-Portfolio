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



fetch('https://owlapplicationbuilder.com/api/entities/simpler_digital_marketing_1580295343903_96/portfolio/get_all_en')
.then(response => response.json())
.then(data => {

  const allCategory = document.getElementById('All-category');
  const marketingCategory = document.getElementById('Marketing-category');
  const designCategory = document.getElementById('webdesign-category');
  const brandingCategory = document.getElementById('branding-category');

  // Function to render cards
  function renderCards(filterCategory = null) {
    // Clear previous content first
    document.querySelector('.col-html').innerHTML = '';

    const detailData = data.data;

    if (Array.isArray(detailData)) {
      detailData.forEach(category => {
        if (!filterCategory || category.categoryRelation === filterCategory) {
          const titleData = category.title;
          const descriptionData = category.portfolioDescription;
          const titleImage = category.portfolioImage;
          const detailBtn = category.slug;
          const cardWise = `<div class="col-lg-4 col-md-6 col-html d-block" style="font-size: 1.75rem; text-align: center;"
                  data-comp-title="Grid Column">
                  <div class="dropzone" role="group" aria-label="1 / 5" style="width: 370.857px;">
                      <picture data-htmlcomponent-type="widgets/mediamanager" class="draggable">
                          <source type="image/webp"
                              srcset="${titleImage}"
                              data-srcset="${titleImage}"
                              data-source="LOCAL" data-license_type="FREE" data-img_cid="" data-img_id="0"
                              data-search_id="" data-hash="l1_Mi5wbmc"> <img data-component-mediamanager=""
                              data-comp-title="Media Manager"
                              src="${titleImage}"
                              style="width: auto;max-width: 100%;height: auto;object-fit: cover;mask-repeat: no-repeat;-webkit-mask-repeat: no-repeat;mask-position: 50% 50%;-webkit-mask-position: 50% 50%;mask-size: auto 100%;-webkit-mask-size: auto 100%;"
                              data-src="${titleImage}"
                              data-source="LOCAL" data-license_type="FREE" data-img_cid="" data-img_id="0"
                              data-search_id="" data-hash="l1_Mi5wbmc" width="480px" height="559px" alt="2.png" class="">
                      </picture>
                      <section class="d-flex mt-3 dropzone">
                          <section class="d-flex flex-column align-items-start dropzone"
                              style="              white-space: normal;          ">
                              <h3 class="draggable"
                                  style="              color: #010F1C;              font-family: Plus Jakarta Sans;              font-size: 24px;              font-style: normal;              font-weight: 700;              line-height: 28px; /* 116.667% */          ">${titleData}</h3>
                              <p class="draggable"
                                  style="              color: #55585B;              font-family: Plus Jakarta Sans;              font-size: 16px;              font-style: normal;              font-weight: 400;              line-height: 26px; /* 162.5% */              text-align: left;          ">${descriptionData}</p>
                          </section> <a class="dropzone draggable" href="${detailBtn}"> <svg xmlns="http://www.w3.org/2000/svg"
                                  width="18" height="15" viewBox="0 0 18 15" fill="none">
                                  <g clip-path="url(#clip0_168_825)">
                                      <path d="M11.2883 1.78387L17.0012 7.49672L11.2883 13.2096" stroke="#55585B"
                                          stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                      <path d="M0.999268 7.49481H16.839" stroke="#55585B" stroke-width="1.5"
                                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </g>
                                  <defs>
                                      <clipPath id="clip0_168_825">
                                          <rect width="18" height="14" fill="white"
                                              transform="translate(-0.000732422 0.783875)"></rect>
                                      </clipPath>
                                  </defs>
                              </svg> </a>
                      </section>
                  </div>
              </div>
          </di>`; // Your card template here

          document.querySelector('.col-html').innerHTML += cardWise;
        }
      });
    } else {
      console.log('The data is not an array');
    }
  }

  allCategory.addEventListener('click', function() {
    console.log("All Work is clicked!");
    renderCards(); // This will render all cards since no filter category is provided
  });

  marketingCategory.addEventListener('click', function(){
    console.log("Marketing category is clicked!");
    renderCards('Marketing'); // Assuming 'Marketing' is the name you use in categoryRelation for Marketing items
  });

  designCategory.addEventListener('click', function() {
    console.log("Design category is clicked!");
    renderCards('Design'); // Assuming 'Design' is the name you use in categoryRelation for Design items
  });

  brandingCategory.addEventListener('click', function() {
    console.log("Branding category is clicked!");
    renderCards('Branding'); // Assuming 'Branding' is the name you use in categoryRelation for Branding items
  });

})
.catch(error => console.log('Error:', error));
