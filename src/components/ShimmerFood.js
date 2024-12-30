const ShimmerFood = () => {
  const shimmerArray = Array(10).fill(null); // Creates an array with 10 elements

  return (
    <div className="food-cards-container">
      {shimmerArray.map((_, index) => (
        <div key={index} className="shimmer-food-img-container"></div>
      ))}
    </div>
  );
};

export default ShimmerFood;
