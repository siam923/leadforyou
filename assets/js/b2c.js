// Pricing data objects
const pricingData = [
  {
    "B2C Pricing": {
      Facebook: {
        Standard: {
          "Unique Static Content Designs": 10,
          "Content & Copywriting": 10,
          "Email campaign, design and brand consultancy": true,
          "Campaign management and digital event management": true,
          "Content Calendar (monthly) and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$349/ Month",
        },
        Premium: {
          "Unique Static Content Designs": 12,
          "Motion Videos/ Dynamic Content": 4,
          "Content & Copywriting": 16,
          "Email campaign, design and brand consultancy": true,
          "Campaign management and digital event management": true,
          "Content Calendar (monthly) and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$549/ Month",
        },
      },
      Instagram: {
        Standard: {
          "Unique Static Content Designs": 8,
          "Content & Copywriting": 8,
          "Email campaign, design and brand consultancy": true,
          "Campaign management and digital event management": true,
          "Content Calendar (monthly) and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$249/ Month",
        },
        Premium: {
          "Unique Static Content Designs": 10,
          "Motion Videos/ Dynamic Content": 6,
          "Content & Copywriting": 16,
          "Email campaign, design and brand consultancy": true,
          "Campaign management and digital event management": true,
          "Content Calendar (monthly) and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$599/ Month",
        },
      },
      Twitter: {
        Standard: {
          "Research on trending and upcoming tweets": true,
          "Focused campaign management and brand consultancy": true,
          "Unique static content designs": 8,
          "Unique content copywriting (tweets)": 8,
          "Monthly content calendar and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$399/ Month",
        },
        Premium: {
          "Research on trending and upcoming tweets": true,
          "Focused campaign management and brand consultancy": true,
          "Unique static content designs": 12,
          "Unique dynamic content design": 4,
          "Unique content copywriting (tweets)": 16,
          "Monthly content calendar and reporting": true,
          "Media Buying (Boosting) - as per requirements and charges applicable": true,
          Price: "$599/ Month",
        },
      },
    },
  },
];
// Function to generate the HTML for pricing items
function generatePricingItems(pricingData) {
  const pricingItemsContainer = document.getElementById("pricing-items");

  for (const category in pricingData) {
    const categoryData = pricingData[category];

    for (const platform in categoryData) {
      const platformData = categoryData[platform];

      for (const plan in platformData) {
        const planData = platformData[plan];

        const pricingItemHTML = `
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pricing-item">
              <h3>${plan}</h3>
              <h4><sup>৳</sup>${planData.Price}<span> / month</span></h4>
              <ul>
                ${generateFeaturesList(planData)}
              </ul>
              <a href="#" class="buy-btn">Buy Now</a>
            </div>
          </div>
        `;

        pricingItemsContainer.innerHTML += pricingItemHTML;
      }
    }
  }
}

// Function to generate the HTML for pricing item features list
function generateFeaturesList(planData) {
  let featuresListHTML = "";

  for (const feature in planData) {
    if (feature !== "Price") {
      const featureValue = planData[feature];
      const featureListItemHTML = featureValue
        ? `<li><i class="bi bi-check"></i>${feature}</li>`
        : `<li class="na"><i class="bi bi-x"></i><span>${feature}</span></li>`;

      featuresListHTML += featureListItemHTML;
    }
  }

  return featuresListHTML;
}

// Call the function to generate the pricing items
generatePricingItems(pricingData);
