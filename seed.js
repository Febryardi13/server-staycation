var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
// seeder.connect('mongodb://127.0.0.1:27017/db_staycation', {
seeder.connect('mongodb://adm-staycation:rahasia@cluster0-shard-00-00.t77dc.mongodb.net:27017,cluster0-shard-00-01.t77dc.mongodb.net:27017,cluster0-shard-00-02.t77dc.mongodb.net:27017/db_staycation?ssl=true&replicaSet=atlas-10sdlf-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Category',
    './models/Bank',
    './models/Item',
    './models/Feature',
    './models/Activity',
    './models/Member',
    './models/Image',
    './models/Member',
    './models/Booking',
    './models/Users'
  ]);

  // Clear specified collections
  seeder.clearModels(['Category', 'Bank', 'Item', 'Member', 'Item', 'Feature', 'Image', 'Booking', 'Users'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

var data = [
  // start category
  {
    'model': 'Category',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Houses with beauty backyard',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Hotels with large living room',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') }
        ]
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Apartment with kitchen',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') }
        ]
      }
    ]
  },
  // end category
  // start item
  {
    'model': 'Item',
    'documents': [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Tabby Town',
        price: 12,
        sumBooking: 1,
        country: 'Indonesia',
        city: 'Lampung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd04') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Seattle Rain',
        price: 20,
        sumBooking: 2,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd08') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Wodden Pit',
        price: 20,
        sumBooking: 3,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd09') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd10') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd11') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd12') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        title: 'Anggana',
        price: 20,
        sumBooking: 4,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd13') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd14') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd15') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb16') }
        ],
        categoryId: '5e96cbe292b97300fc901111'
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
        title: 'Green Park',
        price: 20,
        sumBooking: 5,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd17') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd18') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd19') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd20') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Podo Wae
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
        title: 'Podo Wae',
        price: 20,
        sumBooking: 6,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd21') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd22') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd23') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd24') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
        title: 'Silver Rain',
        price: 20,
        sumBooking: 7,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd25') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd26') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd27') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd28') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
        title: 'Cashville',
        price: 20,
        sumBooking: 8,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd29') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd30') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd31') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd32') }
        ],
        categoryId: '5e96cbe292b97300fc901112'
      },

      // PS Wood
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
        title: 'PS Wood',
        price: 20,
        sumBooking: 9,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd33') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd34') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd35') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd36') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // One Five
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
        title: 'One Five',
        price: 20,
        sumBooking: 11,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd37') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd38') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd39') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd40') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
        title: 'Minimal',
        price: 20,
        sumBooking: 13,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32') }
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd41') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd42') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd43') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd43') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
        title: 'Stays Home',
        price: 20,
        sumBooking: 14,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description: 'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36') },
          // done
        ],
        featureId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') }
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd45') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd46') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd47') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd48') }
        ],
        categoryId: '5e96cbe292b97300fc901113'
      },

    ]
  },
  // end item
  // start image
  {
    'model': 'Image',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/house-with-backtard1a.jpg'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/house-with-backtard1b.jpg'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/house-with-backtard1c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/house-with-backtard2a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/house-with-backtard2b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/house-with-backtard2c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/house-with-backtard3a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
        imageUrl: 'images/house-with-backtard3b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/house-with-backtard3c.jpg'
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/house-with-backtard4a.jpg'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/house-with-backtard4b.jpg'
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/house-with-backtard4c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
        imageUrl: 'images/hotel-with-livingroom1a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
        imageUrl: 'images/hotel-with-livingroom1b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
        imageUrl: 'images/hotel-with-livingroom2c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
        imageUrl: 'images/hotel-with-livingroom2a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
        imageUrl: 'images/hotel-with-livingroom2b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
        imageUrl: 'images/hotel-with-livingroom2c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
        imageUrl: 'images/hotel-with-livingroom3a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
        imageUrl: 'images/hotel-with-livingroom3b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
        imageUrl: 'images/hotel-with-livingroom3c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
        imageUrl: 'images/hotel-with-livingroom4a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
        imageUrl: 'images/hotel-with-livingroom4b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
        imageUrl: 'images/hotel-with-livingroomc.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
        imageUrl: 'images/apartment-with-kitchen1a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
        imageUrl: 'images/apartment-with-kitchen1b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
        imageUrl: 'images/apartment-with-kitchen1c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
        imageUrl: 'images/apartment-with-kitchen2a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
        imageUrl: 'images/apartment-with-kitchen2b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
        imageUrl: 'images/apartment-with-kitchen2c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
        imageUrl: 'images/apartment-with-kitchen3a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
        imageUrl: 'images/apartment-with-kitchen3b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
        imageUrl: 'images/apartment-with-kitchen3c.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
        imageUrl: 'images/apartment-with-kitchen4a.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
        imageUrl: 'images/apartment-with-kitchen4b.jpg'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
        imageUrl: 'images/apartment-with-kitchen4c.jpg'
      }
    ]
  },
  // end image
  // start feature
  {
    'model': 'Feature',
    'documents': [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
        name: 'television',
        qty: 2,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
        name: 'unit ready',
        qty: 3,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
    

      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
        name: 'television',
        qty: 2,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
        name: 'unit ready',
        qty: 3,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },



      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa17'),
        name: 'bathroom',
        qty: 3,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa18'),
        name: 'bedroom',
        qty: 3,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa19'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa20'),
        name: 'livingroom',
        qty: 2,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa21'),
        name: 'refrigrator',
        qty: 2,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa22'),
        name: 'television',
        qty: 3,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa23'),
        name: 'unit ready',
        qty: 4,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa24'),
        name: 'mbp/s',
        qty: 2,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa25'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa26'),
        name: 'bedroom',
        qty: 1,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa27'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa28'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa29'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa30'),
        name: 'television',
        qty: 2,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa31'),
        name: 'unit ready',
        qty: 2,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa32'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa33'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa34'),
        name: 'bedroom',
        qty: 1,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa35'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa36'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa37'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa38'),
        name: 'television',
        qty: 2,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa39'),
        name: 'unit ready',
        qty: 2,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa40'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa41'),
        name: 'bathroom',
        qty: 1,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa42'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa43'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa44'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa45'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa46'),
        name: 'television',
        qty: 1,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa47'),
        name: 'unit ready',
        qty: 3,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa48'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa49'),
        name: 'bathroom',
        qty: 3,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa50'),
        name: 'bedroom',
        qty: 5,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa51'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa52'),
        name: 'livingroom',
        qty: 2,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa53'),
        name: 'refrigrator',
        qty: 2,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa54'),
        name: 'television',
        qty: 2,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa55'),
        name: 'unit ready',
        qty: 2,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa56'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },




      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa57'),
        name: 'bathroom',
        qty: 3,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa58'),
        name: 'bedroom',
        qty: 3,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa59'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa60'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa61'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa62'),
        name: 'television',
        qty: 1,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa63'),
        name: 'unit ready',
        qty: 3,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa64'),
        name: 'mbp/s',
        qty: 2,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },



      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa65'),
        name: 'bathroom',
        qty: 3,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa66'),
        name: 'bedroom',
        qty: 3,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa67'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa68'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa69'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa70'),
        name: 'television',
        qty: 1,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa71'),
        name: 'unit ready',
        qty: 3,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa72'),
        name: 'mbp/s',
        qty: 2,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },



      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa73'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa74'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa75'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa76'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa77'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa78'),
        name: 'television',
        qty: 1,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa79'),
        name: 'unit ready',
        qty: 2,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa80'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa81'),
        name: 'bathroom',
        qty: 5,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa82'),
        name: 'bedroom',
        qty: 6,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa83'),
        name: 'dining room',
        qty: 2,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa84'),
        name: 'livingroom',
        qty: 2,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa85'),
        name: 'refrigrator',
        qty: 2,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa86'),
        name: 'television',
        qty: 3,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa87'),
        name: 'unit ready',
        qty: 4,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa88'),
        name: 'mbp/s',
        qty: 2,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },


      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa89'),
        name: 'bathroom',
        qty: 2,
        imageUrl: 'images/feature-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa90'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/feature-2.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa91'),
        name: 'dining room',
        qty: 1,
        imageUrl: 'images/feature-3.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa92'),
        name: 'livingroom',
        qty: 1,
        imageUrl: 'images/feature-4.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa93'),
        name: 'refrigrator',
        qty: 1,
        imageUrl: 'images/feature-5.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa94'),
        name: 'television',
        qty: 1,
        imageUrl: 'images/feature-6.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa95'),
        name: 'unit ready',
        qty: 2,
        imageUrl: 'images/feature-7.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa96'),
        name: 'mbp/s',
        qty: 1,
        imageUrl: 'images/feature-8.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },


    ]
  },
  // end feature
  // start activity
  {
    'model': 'Activity',
    'documents': [
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd01'),
        name: 'Ballon Hot Air',
        type: 'Nature',
        imageUrl: 'images/activity-1.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd02'),
        name: 'Lake a Toba',
        type: 'Lake',
        imageUrl: 'images/activity-6.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd03'),
        name: 'Old Building Country',
        type: 'History',
        imageUrl: 'images/activity-14.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd04'),
        name: 'Basbeball Stadium A7',
        type: 'Sport',
        imageUrl: 'images/activity-4.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd05'),
        name: 'Green Lake',
        type: 'Nature',
        imageUrl: 'images/activity-5.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd06'),
        name: 'Ballon Hot Air Savana',
        type: 'Nature',
        imageUrl: 'images/activity-2.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd07'),
        name: 'Gym & Go Healty',
        type: 'Sport',
        imageUrl: 'images/activity-9.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd08'),
        name: 'Labour and Wait',
        type: 'Transportation',
        imageUrl: 'images/activity-19.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      // Done 3
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd09'),
        name: 'Museum National',
        type: 'History',
        imageUrl: 'images/activity-13.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd10'),
        name: 'Garden City',
        type: 'Nature',
        imageUrl: 'images/activity-15.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd11'),
        name: 'Gymnastic Hendrio',
        type: 'Sport',
        imageUrl: 'images/activity-10.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd12'),
        name: 'Food Station',
        type: 'Food & Drink',
        imageUrl: 'images/activity-19.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
      },
      // Done 4
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd13'),
        name: 'Sanurty Beach',
        type: 'Beach',
        imageUrl: 'images/activity-11.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd14'),
        name: 'Garden City',
        type: 'Nature',
        imageUrl: 'images/activity-15.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd15'),
        name: 'Museum Hagufde',
        type: 'History',
        imageUrl: 'images/activity-10.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd16'),
        name: 'Colasium Music Show',
        type: 'Entertainment',
        imageUrl: 'images/activity-24.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
      },
      // Done 5
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd17'),
        name: 'Sanurty Beach',
        type: 'Beach',
        imageUrl: 'images/activity-11.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd18'),
        name: 'Garden City',
        type: 'Nature',
        imageUrl: 'images/activity-15.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd19'),
        name: 'Museum Hagufde',
        type: 'History',
        imageUrl: 'images/activity-10.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd20'),
        name: 'Colasium Music Show',
        type: 'Entertainment',
        imageUrl: 'images/activity-24.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
      },
      // Done 6
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd21'),
        name: 'Museum Historical National',
        type: 'History',
        imageUrl: 'images/activity-14.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd22'),
        name: 'Sunset Beach So Good',
        type: 'Nature',
        imageUrl: 'images/activity-6.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd23'),
        name: 'Savana Green',
        type: 'Nature',
        imageUrl: 'images/activity-8.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd24'),
        name: 'Rainbow Building Cool',
        type: 'City Center',
        imageUrl: 'images/activity-25.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
      },
      // Done 7
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd25'),
        name: 'Labour and Wait 991',
        type: 'Transportation',
        imageUrl: 'images/activity-21.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd26'),
        name: 'Museum Dinosaurs National',
        type: 'History',
        imageUrl: 'images/activity-12.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd27'),
        name: 'Food Station 99',
        type: 'Food & Drink',
        imageUrl: 'images/activity-23.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd28'),
        name: 'Beach View Beautiful',
        type: 'Beach',
        imageUrl: 'images/activity-11.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
      },
      // Done 8
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd29'),
        name: 'Labour and Wait 991',
        type: 'Transportation',
        imageUrl: 'images/activity-21.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd30'),
        name: 'Museum Dinosaurs National',
        type: 'History',
        imageUrl: 'images/activity-12.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd31'),
        name: 'Food Station 99',
        type: 'Food & Drink',
        imageUrl: 'images/activity-23.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd32'),
        name: 'Beach View Beautiful',
        type: 'Beach',
        imageUrl: 'images/activity-11.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
      },
      // Done 9
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd33'),
        name: 'Gym For Healty',
        type: 'Sport',
        imageUrl: 'images/activity-10.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd34'),
        name: 'City Center View',
        type: 'Public',
        imageUrl: 'images/activity-16.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd35'),
        name: 'Basball Stadium For City',
        type: 'Sport',
        imageUrl: 'images/activity-4.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd36'),
        name: 'Food Station Famouse',
        type: 'Food & Drink',
        imageUrl: 'images/activity-7.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
      },
      // Done 10
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd37'),
        name: 'Train Station',
        type: 'Transportation',
        imageUrl: 'images/activity-21.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd38'),
        name: 'City Museum National',
        type: 'History',
        imageUrl: 'images/activity-13.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd39'),
        name: 'Rainbow City Center',
        type: 'Public',
        imageUrl: 'images/activity-25.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd40'),
        name: 'Drama Colosium Show',
        type: 'Entertaiment',
        imageUrl: 'images/activity-24.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
      },
      // Done 11
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd41'),
        name: 'Club & Beverage',
        type: 'Entertainment',
        imageUrl: 'images/activity-3.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd42'),
        name: 'Food Station',
        type: 'Food & Drink',
        imageUrl: 'images/activity-23.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd43'),
        name: 'City Center Garden',
        type: 'Nature',
        imageUrl: 'images/activity-15.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd44'),
        name: 'Shopping Mall',
        type: 'Shopping',
        imageUrl: 'images/activity-18.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
      },
      // Done 12
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd45'),
        name: 'Gym & Sport',
        type: 'Sport',
        imageUrl: 'images/activity-9.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd46'),
        name: 'Street View',
        type: 'Public',
        imageUrl: 'images/activity-17.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd47'),
        name: 'Dino Mueseum',
        type: 'History',
        imageUrl: 'images/activity-12.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90dd48'),
        name: 'Monorail Train',
        type: 'Transportation',
        imageUrl: 'images/activity-21.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
      }
    ]
  },
  // end activity

  // start booking
  {
    'model': 'Booking',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2020',
        bookingEndDate: '12-12-2020',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/buktibayar.jpeg',
          bankFrom: 'BCA',
          status: 'Proses',
          accountHolder: 'ang'
        }
      }
    ]
  },
  // end booking

  // member
  {
    'model': 'Member',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Elfin',
        lastName: 'Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phoneNumber: '082377954008'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Yein',
        lastName: 'Narayana',
        email: 'elfinsanjaya1207@gmail.com',
        phoneNumber: '082377954008'
      }
    ]
  },
  {
    'model': 'Bank',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        bankName: 'Mandiri',
        rekeningNumber: '089898',
        name: 'Febry Ardi A',
        imageUrl: 'images/logo bca.png'
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        bankName: 'BCA',
        rekeningNumber: '878678',
        name: 'Febry Ardi A',
        imageUrl: 'images/logo mandiri.png'
      }
    ]
  },
  {
    'model': 'Users',
    'documents': [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
      }
    ]
  }
];