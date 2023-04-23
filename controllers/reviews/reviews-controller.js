import * as dao from "../../reviews/reviews-dao.js"


const ReviewsController = (app) => {

  const findReviewByUser = async (req, res) => {
    const review = await dao.findReviewByUser(req.params.username);
    res.json(review);
  };
  const findReviewByBeer = async (req, res) => {
    const review = await dao.findReviewByBeer(req.params.beerid);
    res.json(review);
  };

  const findExpertReviews = async (req, res) => {
    const reviews = await dao.findExpertReviews();
    res.json(reviews)
  }
  const createReview = async (req, res) => {
    const review = req.body;
    const newReview = await dao.createReview(review);
    res.json(newReview);
  };

  const updateReview = async (req, res) => {
    const review = req.body;
    const status = await dao.updateReview(req.params.id, review);
    res.send(status);
  };
  const deleteReview = async (req, res) => {
    const status = await dao.deleteReview(req.params.id);
    res.send(status);
  };


  app.get("/api/review/beerid/:beerid", findReviewByBeer);
  app.get("/api/review/username/:username", findReviewByUser);
  app.get("/api/review/expert", findExpertReviews);
  app.post("/api/review", createReview);
  app.put("/api/review/:id", updateReview);
  app.delete("/api/review/:id", deleteReview);
};

export default ReviewsController;
