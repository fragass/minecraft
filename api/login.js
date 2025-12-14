// api/login.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }

  const { user, pass } = req.body || {};

  if (user === process.env.USERNAME && pass === process.env.PASSWORD) {
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
}
