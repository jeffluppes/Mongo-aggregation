//shows planes by type, descending

db.planesFnew.aggregate( [
  { $group:
    { _id: "$properties.PlaneType",
      number_of_planes: {$sum:1}
      }
    },
    {$sort:
      { "number_of_planes": -1}
    }
])
