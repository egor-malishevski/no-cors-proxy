import axios from "axios";

const headers = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-language"    : "en,fr-FR;q=0.9,fr;q=0.8,es-ES;q=0.7,es;q=0.6,en-US;q=0.5,am;q=0.4,de;q=0.3",
  "Origin": "https://chat.aivvm.com",
  "Referer": "https://chat.aivvm.com/",
  "Sec-Fetch-Dest"     : "empty",
  "Sec-Fetch-Mode"     : "no-cors",
  "Sec-Fetch-Site"     : "same-origin",
  "content-type": "text/plain",
  "Cookie": "cf_clearance=.hFni6AITyC9RvGeH5WN.FZAYEWSBTUkxtmw6SOVRu8-1696706894-0-1-9c4ec4c1.f7f173e9.a42e3e70-0.2.1696706894"
}

const Cors = async (req, res) => {
  try {
    const { data } = await axios('https://chat.aivvm.com/api/chat', {
      method: "POST",
      withCredentials: true,
      headers,
      data: req ? req.body : '',
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export default Cors;
