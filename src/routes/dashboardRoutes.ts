import express from "express";
import dashboard from "../models/dashboard";

const router = express.Router();

router.get("/getData", async (req, res) => {
    const data = await dashboard.find({});
    res.json(data);
})
router.get("/upload", (req, res) => {
    try {
        res.send("<h1>Connect to local host</h1>");
        return res.status(200).json({ message: "connect to db" });
    } catch (error) {
        res.status(500);
    }
});
router.post("/users", (req, res) => {
    const body = req.body;
    if (!body ||
        !body.intensity) {
        return res.status(400).json({ msg: "All fields are req..." })
            ;
    }
})
export default router;