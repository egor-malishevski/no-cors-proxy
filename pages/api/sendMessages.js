import axios from "axios";

const headers = {
  "accept": "*/*",
  "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
  "content-type": "application/json",
  "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Opera\";v=\"102\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "cookie": "cf_clearance=.hFni6AITyC9RvGeH5WN.FZAYEWSBTUkxtmw6SOVRu8-1696706894-0-1-9c4ec4c1.f7f173e9.a42e3e70-0.2.1696706894",
  "Referer": "https://chat.aivvm.com/ru",
  "Referrer-Policy": "same-origin",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 OPR/102.0.0.0",
}

const Cors = async (req, res) => {
  try {
    const { data } = await axios('https://chat.aivvm.com/api/chat', {
      method: "POST",
      withCredentials: true,
      headers,
      data: req ? req.body : '',
      proxy: {
        host: '104.21.33.192',
        port: 443,
      }
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
};

export default Cors;
