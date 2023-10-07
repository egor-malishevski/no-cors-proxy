import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  try {
    const resProxy = await fetch(req.query);
    res.status(200).json(resProxy);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
