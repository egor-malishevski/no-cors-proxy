import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { url } = req.query;
  
  try {
    const resProxy = await fetch(url, { ...req, "mode": "no-cors" });
    res.status(200).send(resProxy);
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
