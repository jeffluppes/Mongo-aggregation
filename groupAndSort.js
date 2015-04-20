//shows planes by type, descending
use planes
db.planesFnew.aggregate( [
  { $group:
    { _id: "$properties.PlaneType",
      number_of_planes: {$sum:1}
      }
    },
    {$sort:
      { "number_of_planes": -1}
    }
],
{
  explain: false
})
