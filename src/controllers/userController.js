const axios = require("axios");

class UserController {
  async getUsers(req, res) {
    try {
      const users = await axios.get("https://jsonplaceholder.typicode.com/users");
      res.json(users.data);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
    }
  }
  async getPosts(req, res) {
    try {
      const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
      res.json(posts.data);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los posts", error: error.message });
    }
  }
  async getUsersAndPosts(req, res) {
    try {
      const users = await axios.get("https://jsonplaceholder.typicode.com/users");
      const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const usersAndPostsCount = [];
      const minPosts = req.query.minPosts;
      for (const user of users.data) {
        const userPosts = posts.data.filter((post) => post.userId === user.id);
        if (minPosts && userPosts.length >= minPosts && user.email != "") {
          usersAndPostsCount.push({
            fullname: user.name,
            email: user.email,
            city: user.address.city,
            postsCount: userPosts.length,
          });
        } else {
          continue;
        }
      }
      res.json(usersAndPostsCount);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener resumen de usuarios y posts", error: error.message });
    }
  }
}

module.exports = new UserController();
