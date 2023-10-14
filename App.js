import React from 'react';
import  ReactDOM from 'react-dom/client';

const Header=()=>{
return (
    <div className="header">
<div className='logo-container'>
    <img  src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg"
    className="logo"/>

</div>
<div className='nav-items'>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
</ul>
</div>
    </div>
)
}
const TList=[
    {
    "id": "750592",
    "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83649?collection_id=83649&tags=layout_CCS_Biryani&type=rcv2",
    "text": "Biryani",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for biryani",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani",
    "frequencyCapping": {}
    },
    {
    "id": "750580",
    "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
    "text": "pizzas",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for pizza",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
    "frequencyCapping": {}
    },
    {
    "id": "762797",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
    "text": "Burgers",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for burger",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
    "frequencyCapping": {}
    },
    {
    "id": "750582",
    "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
    "text": "North Indian",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for north indian",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
    "frequencyCapping": {}
    },
    {
    "id": "750223",
    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
    "text": "Rolls",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for roll",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
    "frequencyCapping": {}
    },
    {
    "id": "750588",
    "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
    "text": "Chinese",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chinese",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
    "frequencyCapping": {}
    },
    {
    "id": "750203",
    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
    "text": "Paratha",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for paratha",
    "altTextCta": "open"
    },
    "entityId": "80476",
    "frequencyCapping": {}
    },
    {
    "id": "750226",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
    "text": "Salad",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for salad",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
    "frequencyCapping": {}
    },
    {
    "id": "750597",
    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
    "text": "Ice Cream",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for icecream",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
    "frequencyCapping": {}
    },
    {
    "id": "750132",
    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
    "text": "Dosa",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for dosa",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    "frequencyCapping": {}
    },
    {
    "id": "749874",
    "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
    "text": "Cakes",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for cakes",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    "frequencyCapping": {}
    },
    {
    "id": "750217",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
    "text": "Pav Bhaji",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for pav bhaji",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    "frequencyCapping": {}
    },
    {
    "id": "749761",
    "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
    "text": "Khichdi",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for khicdhi",
    "altTextCta": "open"
    },
    "entityId": "80456",
    "frequencyCapping": {}
    },
    {
    "id": "750644",
    "imageId": "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80441?collection_id=80441&tags=layout_CCS_Idli&type=rcv2",
    "text": "Idli",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for idly",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli",
    "frequencyCapping": {}
    },
    {
    "id": "749879",
    "imageId": "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80383?collection_id=80383&tags=layout_CCS_CholeBhature&type=rcv2",
    "text": "Chole Bhature",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for chhole bhatoore",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80383&tags=layout_CCS_CholeBhature",
    "frequencyCapping": {}
    },
    {
    "id": "749774",
    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
    "text": "Noodles",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for noodles",
    "altTextCta": "open"
    },
    "entityId": "80464",
    "frequencyCapping": {}
    },
    {
    "id": "750584",
    "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
    "text": "South Indian",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for south indian",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
    "frequencyCapping": {}
    },
    {
    "id": "750636",
    "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
    "text": "Kebabs",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for kebabs",
    "altTextCta": "open"
    },
    "entityId": "80452",
    "frequencyCapping": {}
    },
    {
    "id": "750111",
    "imageId": "v1675667630/PC_Creative%20refresh/Desserts_2.png",
    "action": {
    "link": "https://www.swiggy.com/collections/83662?collection_id=83662&tags=layout_CCS_Dessert&type=rcv2",
    "text": "Dessert",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurant curated for dessert",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83662&tags=layout_CCS_Dessert",
    "frequencyCapping": {}
    },
    {
    "id": "750572",
    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
    "action": {
    "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
    "text": "Pure Veg",
    "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
    "altText": "restaurants curated for veg",
    "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
    "frequencyCapping": {}
    }
    ]

const resList=  [
    {
    "info": {
    "id": "85860",
    "name": "Sargam Food",
    "cloudinaryImageId": "bqgtntm79sjwhd5kdajl",
    "locality": "Kasturba Road",
    "areaName": "Kasturba Road",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Chinese",
    "North Indian",
    "South Indian",
    "Burgers",
    "Pizzas",
    "Biryani"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "85860",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "178390",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 12,
    "lastMileTravel": 0.2,
    "serviceability": "SERVICEABLE",
    "slaString": "12 mins",
    "lastMileTravelString": "0.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:15:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/sargam-food-kasturba-road-rajkot-85860",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "237666",
    "name": "McDonald's",
    "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
    "locality": "Reliance Mall",
    "areaName": "150 Feet Ring Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "237666",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "630",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 4.1,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "4.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 00:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-reliance-mall-150-feet-ring-road-rajkot-237666",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "518648",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Crystal Mall",
    "areaName": "Kalawad Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 3.9,
    "feeDetails": {
    "restaurantId": "518648",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3000
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3000
    },
    "parentId": "166",
    "avgRatingString": "3.9",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 4.3,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "4.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-crystal-mall-kalawad-road-rajkot-518648",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "85692",
    "name": "The Grand Thakar - TGT",
    "cloudinaryImageId": "aqjtcoxwuvbcnykea5ci",
    "locality": "Jhulelal Nagar",
    "areaName": "Jubeli Chowk",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Gujarati",
    "Punjabi",
    "Chinese",
    "Italian",
    "Continental",
    "Mexican"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "85692",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "257532",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 0.6,
    "serviceability": "SERVICEABLE",
    "slaString": "18 mins",
    "lastMileTravelString": "0.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-grand-thakar-tgt-jhulelal-nagar-jubeli-chowk-rajkot-85692",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "74542",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "l61kfmxdy3nblqymzxak",
    "locality": "Tagore Road",
    "areaName": "Sardar Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.1,
    "veg": true,
    "feeDetails": {
    "restaurantId": "74542",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "2456",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 25,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 00:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-tagore-road-sardar-nagar-rajkot-74542",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "139260",
    "name": "Bali's Punjabi Dhaba ",
    "cloudinaryImageId": "uyy2xze0b9sb8qmitg5o",
    "locality": "Sarveshwar Chowk",
    "areaName": "Sarveshwar Chowk",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Punjabi",
    "Chinese",
    "Thalis"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "139260",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "362434",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 13,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "13 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/balis-punjabi-dhaba-sarveshwar-chowk-rajkot-139260",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "103384",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "vwpscdnalrg9yxi1yckp",
    "locality": "Tagore Road",
    "areaName": "Dr Yagnik Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "103384",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "4961",
    "avgRatingString": "4.2",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 18,
    "lastMileTravel": 2.3,
    "serviceability": "SERVICEABLE",
    "slaString": "18 mins",
    "lastMileTravelString": "2.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-tagore-road-dr-yagnik-road-rajkot-103384",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "117666",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Vivekanand Society",
    "areaName": "Race Course Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Healthy Food",
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "117666",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "2",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:15:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-vivekanand-society-race-course-road-rajkot-117666",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "179018",
    "name": "The Grand Thakkar Restaurant",
    "cloudinaryImageId": "av8bconcgezv75wnxqon",
    "locality": "Kothariya Colony",
    "areaName": "80 Ft Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Thalis",
    "Gujarati",
    "Punjabi",
    "Chinese",
    "South Indian"
    ],
    "avgRating": 3.9,
    "veg": true,
    "feeDetails": {
    "restaurantId": "179018",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "230568",
    "avgRatingString": "3.9",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 15:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-grand-thakkar-restaurant-kothariya-colony-80-ft-road-rajkot-179018",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "84304",
    "name": "Rajmandir Food Zone - Astron Chowk",
    "cloudinaryImageId": "m6hrehrzr0mwfzjbsnav",
    "locality": "Tagore Road",
    "areaName": "Astron Chowk",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Burgers",
    "Pizzas"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "84304",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "165747",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "15 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/rajmandir-food-zone-astron-chowk-tagore-road-astron-chowk-rajkot-84304",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "565577",
    "name": "Burger Singh (Big Punjabi Burgers)",
    "cloudinaryImageId": "trxxjppwefx6zvwju5to",
    "locality": "Tirupati Nagar Main Road",
    "areaName": "150 Feet Ring Road",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Burgers",
    "Snacks",
    "Indian",
    "Fast Food",
    "Desserts",
    "Beverages",
    "American"
    ],
    "avgRating": 4.2,
    "veg": true,
    "feeDetails": {
    "restaurantId": "565577",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "375065",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-tirupati-nagar-main-road-150-feet-ring-road-rajkot-565577",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "74052",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Kalawad Road",
    "areaName": "150 Feet Ring Road",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "74052",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "721",
    "avgRatingString": "3.8",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-kalawad-road-150-feet-ring-road-rajkot-74052",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "120216",
    "name": "Baskin Robbins - Ice Cream Desserts",
    "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
    "locality": "Vivekanand Society",
    "areaName": "Race Course",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "120216",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "5588",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "15 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-vivekanand-society-race-course-rajkot-120216",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "458696",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
    "locality": "Janta Society",
    "areaName": "Kotecha Nagar",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "458696",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "6249",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹169"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-janta-society-kotecha-nagar-rajkot-458696",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "84297",
    "name": "Babji Grill Kitchen",
    "cloudinaryImageId": "jo5mbzzqd16zzoz9ayxr",
    "locality": "Beldar Street ",
    "areaName": "Sadar Bazar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Mughlai",
    "North Indian",
    "Biryani",
    "Arabian",
    "Kebabs",
    "Tandoor"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "84297",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "6479",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 11,
    "lastMileTravel": 0.1,
    "serviceability": "SERVICEABLE",
    "slaString": "11 mins",
    "lastMileTravelString": "0.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/babji-grill-kitchen-beldar-street-sadar-bazar-rajkot-84297",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "83618",
    "name": "Adingo",
    "cloudinaryImageId": "9da025e43b78745e0c60a2ecc3960645",
    "locality": "Subhash Road",
    "areaName": "Limda Chowk",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Gujarati",
    "Thalis",
    "Punjabi",
    "Biryani",
    "North Indian",
    "Fast Food",
    "Beverages",
    "Chinese"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "83618",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "27145",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 0.6,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "0.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/adingo-subhash-road-limda-chowk-rajkot-83618",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "214923",
    "name": "Iqbal Restaurant",
    "cloudinaryImageId": "umnt1isog8xq57hijqek",
    "locality": "Lohana Para",
    "areaName": "Lakhajiraj Road",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Mughlai",
    "North Indian",
    "Biryani",
    "Tandoor",
    "Kebabs",
    "Seafood"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "214923",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "107307",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:15:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/iqbal-restaurant-lohana-para-lakhajiraj-road-rajkot-214923",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "93813",
    "name": "Shree Chinese & Punjabi",
    "cloudinaryImageId": "kyrimysg0hm91ghn5ez9",
    "locality": "Dr Yagnik Road",
    "areaName": "Yagnik Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Punjabi",
    "Chinese",
    "Biryani",
    "Indian",
    "North Indian"
    ],
    "avgRating": 3.7,
    "veg": true,
    "feeDetails": {
    "restaurantId": "93813",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "184393",
    "avgRatingString": "3.7",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 14,
    "lastMileTravel": 1.6,
    "serviceability": "SERVICEABLE",
    "slaString": "14 mins",
    "lastMileTravelString": "1.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/shree-chinese-and-punjabi-dr-yagnik-road-rajkot-93813",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "345379",
    "name": "Cafe Coffee Day",
    "cloudinaryImageId": "dlygqxslay7o1pjum90s",
    "locality": "Vivekanand Society",
    "areaName": "Race Course",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Beverages",
    "Cafe",
    "Snacks",
    "Desserts",
    "Burgers",
    "Ice Cream",
    "Bakery",
    "Fast Food"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "345379",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "1",
    "avgRatingString": "4.0",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 17,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "17 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-13 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cafe-coffee-day-vivekanand-society-race-course-rajkot-345379",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "416519",
    "name": "Rasoi Studio",
    "cloudinaryImageId": "w6bx51netp6bz8oyllrr",
    "locality": "Akshar Marg",
    "areaName": "Akshar Marg",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Pastas",
    "Desserts",
    "Chinese",
    "North Indian",
    "South Indian",
    "Burgers",
    "Pizzas",
    "Biryani"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "416519",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 2500
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 2500
    },
    "parentId": "167331",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 2.3,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "2.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-10-12 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/rasoi-studio-akshar-marg-rajkot-416519",
    "type": "WEBLINK"
    }
    }
    ]
//{name,cuisine,rating,Eta} and use it like name , cuisine etc 
 const RestCard=(props)=>{
    // const {name,cuisine,rating,Eta,resData}=props;
    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId}=resData?.info

    return(
        <div className='res-card' style={{backgroundColor:"#80c0c0"}}>
            
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(' , ')}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime}</h5>
        </div>
    )
 }

const MindMenu=(props)=>{
    const {menuData} =props
    console.log(menuData.imageId)
    const {text,link}=menuData?.action
    imglink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+menuData.imageId
    // console.log(link)
    return(
        <div className='Mtype'>
            <a href={link}>
            <img className="typelogo" src={imglink}/>
            {/* <h3>{text}</h3> */}
            </a>
        </div>
    )
}

const Body=()=>{
    return (
        <div className='body'>
            <div className='search'>
                Search

            </div>
            <div className='top'><b>What's On Your Mind</b>
            <div className='top-con'>
            {
                TList.map(v=>(
                    <MindMenu menuData={v} key={v.id} />
                ))
            }
            </div>
          </div>
            <div className='middle'>
                <b>Top Restraurants In Your Area For Online Delivery</b></div>
            <div className='res-con'>
              {resList.map(d=>(
                <RestCard resData={d} key={d.info.id} / >
              ))} 
            
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className='app'>

            <Header/>
        <Body/>
        </div>
        
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
//console.log(root)

root.render(<AppLayout/>)
//render replace the data not append


