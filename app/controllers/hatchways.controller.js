const axios = require("axios");

const getPosts = async (tag) => {
  try {
    return await axios.get(
      "https://api.hatchways.io/assessment/blog/posts?tag=" + tag
    );
  } catch (error) {
    console.error(error);
  }
};

// ping
exports.ping = (req, res) => {
  res.status(200).send({ success: true });
};

exports.posts = (req, res) => {
  getPosts(req.params.tag)
    .then((response) => {
      if (!response.error) {
        res.status(200).send(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
