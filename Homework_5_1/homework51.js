// Finds the blogger with the most posts after unwinding the comment array
// has a limit: 1 so it works with the mongo shell (the shell gets a bit moody
// when there are too many things on the screen)
use blog;
db.posts.aggregate( [
  { $unwind: "$comments"},
  { $group:
    { _id: "$comments.author",
    number_of_comments: {$sum:1}
    }
  },
  {$sort:
    { "number_of_comments": -1}
  },
  { $limit: 1}
])
