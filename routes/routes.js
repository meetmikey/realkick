var winston = require('../lib/winstonWrapper').winston
    , helpers = require ('../lib/helpers')
    , constants = require ('../constants')
    , _ = require ('underscore')
    , async = require('async')
    , listingUtils = require('../lib/listingUtils')
    , UserModel = require('../schema/user').UserModel
    , CommentModel = require('../schema/comment').CommentModel

var routes = this;

exports.getCurrentUser = function( req, res ) {
  var shortId = req.query.userShortId;
  UserModel.findOne({shortId: shortId}, function(mongoErr, user) {
    if ( mongoErr ) {
      winston.doMongoError( mongoErr, {}, res );

    } else if ( ! user ) {
      winston.doError( 'no user', {}, res );

    } else {
      res.send( user );
    }
  });
}

exports.getListing = function( req, res ) {
  var shortId = req.query.userShortId;
  var shortListingId = req.params.id;
  var listing = listingJSON[shortListingId];
  console.log('shortListingId: ', shortListingId, ', listin: ', listing)
  if ( ! listing ) {
    res.send(400);
    return;
  }
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
          routes.getComments( shortListingId, function(err, comments) {
            if ( err ) {
              winston.handleError( err, res );

            } else {
              listing.comments = comments;
              console.log('SHORT LISTING ID: ', shortListingId, ', sending listing: ', listing)
              res.send( listing );
            }
          });
        }
      });
    }
  })
}

exports.getComments = function( shortListingId, callback ) {
  CommentModel.find({shortListingId: shortListingId}, function(mongoErr, comments) {
    if ( mongoErr ) {
      callback( winston.makeMongoError( mongoErr ) );

    } else {
      async.map( comments, function(comment, mapCallback) {
        UserModel.findOne({shortId: comment.shortUserId}, function(mongoErr, user) {
          if ( mongoErr ) {
            mapCallback( winston.makeMongoError( mongoErr ) );

          } else if ( ! user ) {
            mapCallback( null, comment );

          } else {
            comment.userImageURL = user.imageURL;
            mapCallback( null, comment );
          }
        });
      }, function(err, comments) {
        if ( err ) {
          callback( err );

        } else {
          callback( null, comments );
        }
      });
    }
  });
}

var listingJSON = {
  1: {
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
  },
  2: {
    "PhotoCount": 25,
      "Acres": "0.15",
      "Address": "1212 6th ",
      "Agent": "52745ea4f16f064b7649a50b",
      "AgentID": "607659",
      "AllowComments": "Yes",
      "AssociationFees": "0.0",
      "Coordinates": {
        "Latitude": 32.717939,
        "Longitude": -117.159358
      },
      "County": "San Diego",
      "Geography": "527461b0f16f064b7649e018",
      "GuestHouse": "Detached",
      "InternetListing": "1212  6th St",
      "InternetSyndication": "Yes",
      "ListingDate": "2013-10-03T00:00:00",
      "ListingPrice": "2370000",
      "ListingStatus": "Active",
      "ListingType": "Residential",
      "MLSNumber": "130053294",
      "NumberOfBaths": "3",
      "NumberOfBedrooms": "4",
      "NumberOfFireplaces": "2",
      "NumberOfGarageSpaces": "2",
      "NumberOfHalfBaths": "1",
      "NumberOfStories": "2 Story",
      "Office": "52745d72f16f064b76497693",
      "OfficeID": "250",
      "Photos": [
        {
          "url": "/api/v1/photo/5274ef99f16f064b764b5aac",
          "id": "5274ef99f16f064b764b5aac",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_101_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274ef9bf16f064b764b5ab0",
          "id": "5274ef9bf16f064b764b5ab0",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_201_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274ef9cf16f064b764b5ab2",
          "id": "5274ef9cf16f064b764b5ab2",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_301_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274ef9df16f064b764b5ab3",
          "id": "5274ef9df16f064b764b5ab3",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_401_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274ef9ef16f064b764b5ab4",
          "id": "5274ef9ef16f064b764b5ab4",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_501_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274ef9ff16f064b764b5ab6",
          "id": "5274ef9ff16f064b764b5ab6",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_601_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa0f16f064b764b5ab9",
          "id": "5274efa0f16f064b764b5ab9",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_701_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa1f16f064b764b5abb",
          "id": "5274efa1f16f064b764b5abb",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_801_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa2f16f064b764b5abd",
          "id": "5274efa2f16f064b764b5abd",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_901_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa3f16f064b764b5abe",
          "id": "5274efa3f16f064b764b5abe",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_A01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa4f16f064b764b5ac0",
          "id": "5274efa4f16f064b764b5ac0",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_B01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa5f16f064b764b5ac1",
          "id": "5274efa5f16f064b764b5ac1",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_C01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa6f16f064b764b5ac3",
          "id": "5274efa6f16f064b764b5ac3",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_D01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa8f16f064b764b5ac4",
          "id": "5274efa8f16f064b764b5ac4",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_E01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efa9f16f064b764b5ac7",
          "id": "5274efa9f16f064b764b5ac7",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_F01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efaaf16f064b764b5ac8",
          "id": "5274efaaf16f064b764b5ac8",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_G01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efabf16f064b764b5aca",
          "id": "5274efabf16f064b764b5aca",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_H01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efacf16f064b764b5acb",
          "id": "5274efacf16f064b764b5acb",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_I01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efadf16f064b764b5ace",
          "id": "5274efadf16f064b764b5ace",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_J01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efaef16f064b764b5ad1",
          "id": "5274efaef16f064b764b5ad1",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_K01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efaff16f064b764b5ad2",
          "id": "5274efaff16f064b764b5ad2",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_L01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efb0f16f064b764b5ad4",
          "id": "5274efb0f16f064b764b5ad4",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_M01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efb1f16f064b764b5ad6",
          "id": "5274efb1f16f064b764b5ad6",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_N01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efb2f16f064b764b5ad8",
          "id": "5274efb2f16f064b764b5ad8",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_O01_81.jpg"
        },
        {
          "url": "/api/v1/photo/5274efb3f16f064b764b5ada",
          "id": "5274efb3f16f064b764b5ada",
          "Location": "http://tempo5.sandicor.com/SNDImages/174/130053294_P01_81.jpg"
        }
      ],
      "Pool": "N/K",
      "PublicRemarks": "Charming California Shingle home,built in 1912, Historical Designation, extensively remodeled with attention to detail everywhere you look.  Open living areas, with French doors to the gorgeous gardens & Garden house. This home is exquisite in every way & has won many awards & featured in numerous magazines over the years.Includes hardwood floors, family room, gourmet kitchen with Viking stove, plus a Garden house/guest house for extra room.It captivates you from the moment you drive up (see supp)",
      "SchoolDistrict": "Coronado Unified",
      "SquareFootage": "2823",
      "State": "California",
      "Subdivision": "Coronado Village",
      "SystemID": "1004253198",
      "YearHomeBuilt": "1912",
      "ZipCode": "CORONADO (92118)",
      "_id": "527807052ffdf8cea6eed130"
    }, 3: {
      "PhotoCount": 11,
      "Acres": "",
      "Address": "875 G ",
      "Agent": "52745f98f16f064b7649c1cc",
      "AgentID": "656646",
      "AllowComments": "Yes",
      "AssociationFees": "5424.0",
      "Coordinates": {
        "Latitude": 32.712517,
        "Longitude": -117.156801
      },
      "County": "San Diego",
      "Geography": "527461b0f16f064b7649e018",
      "GuestHouse": "",
      "InternetListing": "875  G St  410",
      "InternetSyndication": "No",
      "ListingDate": "2013-09-24T00:00:00",
      "ListingPrice": "325000",
      "ListingStatus": "Active",
      "ListingType": "Residential",
      "MLSNumber": "130051230",
      "NumberOfBaths": "1",
      "NumberOfBedrooms": "1",
      "NumberOfFireplaces": "",
      "NumberOfGarageSpaces": "1",
      "NumberOfHalfBaths": "0",
      "NumberOfStories": "1 Story",
      "Office": "52745ccef16f064b764950aa",
      "OfficeID": "67253",
      "Photos": [
        {
          "url": "/api/v1/photo/5274c74bf16f064b764b0f5a",
          "id": "5274c74bf16f064b764b0f5a",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_101_70.jpg"
        },
        {
          "url": "/api/v1/photo/5274c74cf16f064b764b0f5d",
          "id": "5274c74cf16f064b764b0f5d",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_201_18.jpg"
        },
        {
          "url": "/api/v1/photo/5274c74df16f064b764b0f5f",
          "id": "5274c74df16f064b764b0f5f",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_301_19.jpg"
        },
        {
          "url": "/api/v1/photo/5274c74ef16f064b764b0f60",
          "id": "5274c74ef16f064b764b0f60",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_401_19.jpg"
        },
        {
          "url": "/api/v1/photo/5274c74ff16f064b764b0f62",
          "id": "5274c74ff16f064b764b0f62",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_501_83.jpg"
        },
        {
          "url": "/api/v1/photo/5274c750f16f064b764b0f64",
          "id": "5274c750f16f064b764b0f64",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_601_83.jpg"
        },
        {
          "url": "/api/v1/photo/5274c751f16f064b764b0f65",
          "id": "5274c751f16f064b764b0f65",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_701_83.jpg"
        },
        {
          "url": "/api/v1/photo/5274c752f16f064b764b0f68",
          "id": "5274c752f16f064b764b0f68",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_801_82.jpg"
        },
        {
          "url": "/api/v1/photo/5274c753f16f064b764b0f69",
          "id": "5274c753f16f064b764b0f69",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_901_73.jpg"
        },
        {
          "url": "/api/v1/photo/5274c754f16f064b764b0f6b",
          "id": "5274c754f16f064b764b0f6b",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_A01_73.jpg"
        },
        {
          "url": "/api/v1/photo/5274c754f16f064b764b0f6c",
          "id": "5274c754f16f064b764b0f6c",
          "Location": "http://tempo5.sandicor.com/SNDImages/158/130051230_B01_88.jpg"
        }
      ],
      "Pool": "N/K",
      "PublicRemarks": "Excellent East Village location just blocks from Petco Park and walking distance to the Gaslamp District. This home at Nexus features an open floor plan, custom bedroom build out, high ceilings, stainless steel appliances, granite counter tops, and a great city view from the West facing balcony. Secure building, fob entry with assigned under ground parking space right in front of elevator. Furniture also available for purchase. ",
      "SchoolDistrict": "",
      "SquareFootage": "768",
      "State": "California",
      "Subdivision": "East Village",
      "SystemID": "1004231840",
      "YearHomeBuilt": "2006",
      "ZipCode": "SAN DIEGO DOWNTOWN (92101)",
      "_id": "5278002b2ffdf8cea6eeceb4"
    }
}
