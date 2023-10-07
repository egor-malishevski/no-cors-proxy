import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  try {
    const resProxy = await fetch({ ...req.query, "mode": "no-cors" });
    const data = await resProxy.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export default Cors;
