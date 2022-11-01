

class HelloController {
  async index(req, res) {
    return res.json({ hello: 'Mongo' });
  }
}

export default new HelloController();