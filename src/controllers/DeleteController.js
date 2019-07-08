const Post = require("../models/Post");

module.exports = {
  async store(req, res) {
    const { id } = req.params;
    await Post.deleteOne({ _id: id });

    req.io.emit("delete", id);

    return res.json({ message: "Post excluído com sucesso" });
  }
};
