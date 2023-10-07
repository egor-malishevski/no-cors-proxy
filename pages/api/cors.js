import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { url } = req.query;
  
  try {
    let resProxy;

    if (req.method === 'GET' || req.method === 'HEAD') {
       resProxy = await fetch(url, { headers: req.headers, method: req.method, params: req.params, "mode": "no-cors" });
    } else {
       resProxy = await fetch(url, { ...req, "mode": "no-cors" });
    }

    const data = await resProxy.json();

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
