const Cors = async (req, res) => {
  try {
    const resProxy = await fetch({ ...req.query, mode: "no-cors" });
    res.status(200).json(resProxy.json());
  } catch (error) {
    res.status(400).send(error.toString());
  }
};

export default Cors;
