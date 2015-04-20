//addtoset example that builds an array of coordinates per plane.
// This ignores double coordinates (e.g. planes remaining in one place for a while: landing)
// So this generates a lot more markers than AddToSet.
use planes;
db.planes.aggregate( [
  { $group:
    {
      _id : {"plane":"$properties.PlaneType"},
    coordinates:{$push: "$geometry.coordinates"}
    }
}
])
