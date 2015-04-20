//addtoset example that builds an array of coordinates per plane.
// Not sure why you would use it, but look at all the data!
// Important to know is that there may only be one coordinate entry. So if a plane would remain in the same place
// for more than the interval between parsing, there would only be one entry.
use planes;
db.planes.aggregate( [
  { $group:
    {
      _id : {"plane":"$properties.PlaneType"},
    coordinates:{$addToSet: "$geometry.coordinates"}
    }
}
],
{
  explain: false
})
