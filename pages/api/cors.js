import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { url } = req.query;
  
  try {
    if (req.method === 'GET' || req.method === 'HEAD') {
       const resProxy = await fetch(url, { "mode": "no-cors" });

       const data = await resProxy.json();
    
       res.status(200).json({ data });
    } else {
       const resProxy = await fetch(url, { ...req, "mode": "no-cors" });

       const data = await resProxy.text();

       res.status(200).json({ data });
    }
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
