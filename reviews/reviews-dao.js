import reviewsModel from "./reviews-model.js";

export const createReview = async (review) => {
  const newReview = await reviewsModel.create(review);
  return newReview;
};

export const updateReview = async (id, review) => {
  const newReview = await reviewsModel.updateOne({ _id: id }, review);
  return newReview;
};

export const deleteUser = async (id) => {
  const newReview = await reviewsModel.updateOne({ _id: id });
  return newReview;
};

export const findReviewByUser = async (username) => {
  const reviews = await reviewsModel.find({ username: username });
  return reviews;
};

export const findReviewByBeer = async (beerid) => {
  const reviews = await reviewsModel.find({ beerid });
  return reviews;
};

export const findExpertReviews = async () => {
  const reviews = await reviewsModel.find({ byExpert: true });
  return reviews;
};


