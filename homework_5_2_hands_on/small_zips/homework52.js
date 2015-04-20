// filters for cities with pop > 25000 in CA and NY
// then calcs the average pop per state
// Because cities might appear in more than one state we're going multikey
use test;
db.zips.aggregate( [
  { $match:
    {
      "state": { $in: ['CA', 'NY']}
    }
  },
  { $group:
    {"_id":
          {state: "$state", city: "$city"},
          population: {$sum: "$pop"}
    }
  },
  { $match:
    {
      "population": {$gt:25000}
    }
  },
  { $group:
    {
      "_id":null, "avg_pop":{$avg:"$population"}
    }
  }
])
