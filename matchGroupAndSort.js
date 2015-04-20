//shows planes by type, descending, after removing all GRND, GLID and NAN planes

db.planesFnew.aggregate( [
  { $match:
    { 'properties.PlaneType':
      { $nin: ["GRND", "GLID", ""]}
    }
  },
  { $group:
    { _id: "$properties.PlaneType",
      number_of_planes: {$sum:1}
      }
    },
    {$sort:
      { "number_of_planes": -1}
    }
])