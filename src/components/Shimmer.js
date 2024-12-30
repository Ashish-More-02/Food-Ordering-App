const Shimmer = () => {
  return (
    <>
      <div className="Search-component">
        <input type="text" placeholder="Whats on your mind?"></input>
        <button>Search</button>
        <button
          className={`filter-btn`}
          id="body-btn-filter"
        >
          Top Rated Restaurants
        </button>
      </div>
      <h1 className="h1-shimmer">Top Rated Restaurants</h1>
      <div className="shimmer-container Resturant-container">
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
        <div className="shimmer-cards Card">
            <div className="img-shimmer"></div>
            <h1 className="h1-shimmer2">random text</h1>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
