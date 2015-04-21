// Calculating the averages per-class
// 1: unwind the scores
// 2: Filter for quizes (we don't want them)
// 3: group by student average
// 4: group by class average
// 5: sort descending or ascending (for verfication)
use test;
db.grades.aggregate([
  {$unwind: "$scores"},
  {$match:
    {"scores.type":
    {$nin: ["quiz"]}
    }
    },
  {$group:
    {_id:
      {class:"$class_id", student:"$student_id"},
       average_student_score: {$avg: "$scores.score"}}},
  {$group:
    {_id: {class_id: "$_id.class"},
        class_average: {$avg: "$average_student_score" }
    }
  },
  { $sort: {class_average:1}}
])
