import fetch from "isomorphic-unfetch";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const Cors = async (req, res) => {
  const { url } = req.query;
  
  try {
    if (req.method === 'GET' || req.method === 'HEAD') {
       const resProxy = await fetch(url, { "mode": "no-cors" });

       const data = await resProxy.json();
    
       res.status(200).json({ data }, { headers: corsHeaders });
    } else {
       const resProxy = await fetch(url, { ...req, "mode": "no-cors" });

       const data = await resProxy.text();

       res.status(200).json({ data }, { headers: corsHeaders });
    }
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
