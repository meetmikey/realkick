var winston = require('../lib/winstonWrapper').winston
    , helpers = require ('../lib/helpers')
    , constants = require ('../constants')
    , _ = require ('underscore')
    , listingUtils = require('../lib/listingUtils')
    , UserModel = require('../schema/user').UserModel

var routes = this;

exports.getListing = function( req, res ) {
  listing = listingJSON;
  console.log 'getListing, req.data: ', req.data, ', req.params: ', req.params
  var shortId = req.params.userShortId;
  UserModel.findOne({shortId: shortId}, function(mongoErr, user) {
    if ( mongoErr ) {
      winston.doMongoError( mongoErr, {}, res );

    } else if ( ! user ) {
      winston.doError( 'no user', {}, res );

    } else {
      listingUtils.getAugmentedListingData( listing, user, function(err, augmentedListingData) {
        if ( err ) {
          winston.handleError( err, res );

        } else {
          listing.augmentedData = augmentedListingData;
          res.send( listing );
        }
      });
    }
  })
}

var listingJSON = {
  "PhotoCount": 19,
  "Acres": "",
  "Address": "700 E ",
  "Agent": "52745eb4f16f064b7649a7c6",
  "AgentID": "612654",
  "AllowComments": "Yes",
  "AssociationFees": "9387.6",
  "Coordinates": {
  "Latitude": 32.714666,
  "Longitude": -117.158336
  },
  "County": "San Diego",
  "Geography": "527461b0f16f064b7649e018",
  "GuestHouse": "",
  "InternetListing": "700 W E St  1605",
  "InternetSyndication": "Yes",
  "ListingDate": "2013-05-23T00:00:00",
  "ListingPrice": "659000",
  "ListingStatus": "Active",
  "ListingType": "Residential",
  "MLSNumber": "130027318",
  "NumberOfBaths": "2",
  "NumberOfBedrooms": "2",
  "NumberOfFireplaces": "1",
  "NumberOfGarageSpaces": "1",
  "NumberOfHalfBaths": "0",
  "NumberOfStories": "1 Story",
  "Office": "52745d29f16f064b76496c94",
  "OfficeID": "64911",
  "Photos": [
    {
    "url": "/api/v1/photo/52746653f16f064b764a09fd",
    "id": "52746653f16f064b764a09fd",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_101_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746655f16f064b764a0a09",
    "id": "52746655f16f064b764a0a09",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_A01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746655f16f064b764a0a0b",
    "id": "52746655f16f064b764a0a0b",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_B01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746655f16f064b764a0a0c",
    "id": "52746655f16f064b764a0a0c",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_C01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746655f16f064b764a0a0d",
    "id": "52746655f16f064b764a0a0d",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_D01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746655f16f064b764a0a0e",
    "id": "52746655f16f064b764a0a0e",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_E01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746656f16f064b764a0a0f",
    "id": "52746656f16f064b764a0a0f",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_F01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746656f16f064b764a0a10",
    "id": "52746656f16f064b764a0a10",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_G01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746656f16f064b764a0a12",
    "id": "52746656f16f064b764a0a12",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_H01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746656f16f064b764a0a13",
    "id": "52746656f16f064b764a0a13",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_I01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746656f16f064b764a0a15",
    "id": "52746656f16f064b764a0a15",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_J01_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746653f16f064b764a09ff",
    "id": "52746653f16f064b764a09ff",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_201_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746653f16f064b764a0a00",
    "id": "52746653f16f064b764a0a00",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_301_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746654f16f064b764a0a02",
    "id": "52746654f16f064b764a0a02",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_401_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746654f16f064b764a0a03",
    "id": "52746654f16f064b764a0a03",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_501_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746654f16f064b764a0a04",
    "id": "52746654f16f064b764a0a04",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_601_81.jpg"
    },
    {
    "url": "/api/v1/photo/52746654f16f064b764a0a05",
    "id": "52746654f16f064b764a0a05",
    "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_701_81.jpg"
    },
    {
      "url": "/api/v1/photo/52746654f16f064b764a0a06",
      "id": "52746654f16f064b764a0a06",
      "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_801_81.jpg"
    },
    {
      "url": "/api/v1/photo/52746655f16f064b764a0a07",
      "id": "52746655f16f064b764a0a07",
      "Location": "http://tempo5.sandicor.com/SNDImages/54/130027318_901_81.jpg"
    }
  ],
  "Pool": "Community/Common",
  "PublicRemarks": "Live in the exclusive, exquisite Electra. Open and spacious unit located on the 16th floor with panoramic views of the city. Bamboo flooring, travertine throughout both baths, private balcony with incredible views. Open Kitchen with granite counters, Bosh and Thermador appliances.  Featured amenities include: sauna, steam room, fitness center, outdoor seating, pool, spa, BBQ area and concierge services.  ",
  "SchoolDistrict": "",
  "SquareFootage": "1161",
  "State": "California",
  "Subdivision": "Columbia District",
  "SystemID": "1004018323",
  "YearHomeBuilt": "2007",
  "ZipCode": "SAN DIEGO DOWNTOWN (92101)",
  "_id": "5277edea2ffdf8cea6eec43a"
}
