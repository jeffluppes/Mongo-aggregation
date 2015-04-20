// find the fastest planes in the sample via aggregation

db.planesFnew.aggregate( [
  { $group:
    { _id: "$properties.PlaneType",
      max_speed: {$max:"$properties.Speed"}
      }
    },
    {$sort:
      { "max_speed": -1}
    }
])
