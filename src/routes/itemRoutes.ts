import express from "express";

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.status(200).json({
    status: "success",
    result: 0,
    data: [{ test: "" }],
  });
  next();
});

router.route("/").post((req, res, next) => {
  const body = req.body;

  // HANDLE APPENDING DATA
  res.status(201).json({
    status: "success",
    data: body,
  });

  next();
});

export default router;
