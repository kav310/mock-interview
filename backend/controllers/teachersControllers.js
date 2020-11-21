const Teachers = require("../models/teacher");

const teacherData = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await Teachers.findById(id);
    if (!user) {
      throw new Error("No data found");
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

const getTeachersDetails = async (req, res) => {
  const { gender, age, name } = req.query;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  let sortByAge = age == "asc" ? 1 : age == "desc" ? -1 : 0;
  if (gender != undefined && name == undefined) {
    const teachersDataCout = await Teachers.countDocuments(
      {
        gender: { $regex: gender },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(teachersDataCout / limit);
    try {
      const results = await Teachers.find({
        gender: { $regex: gender },
      })
        .sort({ age: sortByAge })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (gender == undefined && name != undefined) {
    const teachersDataCout = await Teachers.countDocuments(
      {
        name: { $regex: name },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(teachersDataCout / limit);
    try {
      const results = await Teachers.find({
        name: { $regex: name },
      })
        .sort({ age: sortByAge })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else if (name != undefined && gender != undefined) {
    const teachersDataCout = await Teachers.countDocuments(
      {
        name: { $regex: name },
        gender: { $regex: gender },
      },
      (err) => {
        if (err) console.log(err);
      }
    );
    const finalPage = Math.ceil(teachersDataCout / limit);
    try {
      const results = await Teachers.find({
        name: { $regex: name },
        gender: { $regex: gender },
      })
        .sort({ age: sortByAge })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  } else {
    const teachersDataCout = await Teachers.countDocuments({}, (err) => {
      if (err) console.log(err);
    });
    const finalPage = Math.ceil(teachersDataCout / limit);
    try {
      const results = await Teachers.find({})
        .sort({ age: sortByAge })
        .skip((page - 1) * limit)
        .limit(limit);
      return res
        .status(200)
        .send({ data: results, currentpage: page, finalPage });
    } catch (err) {
      console.log(err);
      return res.status(500).send("Something went wrong");
    }
  }
};

module.exports = { teacherData, getTeachersDetails };
