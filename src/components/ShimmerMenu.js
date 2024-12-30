const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu-main-cnt">
      <div className="Resturant-heading-cnt shimmer-Resturant-heading-cnt">
        <h1 className="font-styling shimmer-f-s">some name of the Resturant</h1>
        <p className="font-styling shimmer-f-s">some cusines</p>
        <h2 className="font-styling shimmer-f-s">Menu</h2>
      </div>

        
      <div className="Menu-Resturant-container shimmer-Menu-Resturant-container w-[60%] m-auto mt-6">
      <h1 className="font-styling shimmer-f-s text-4xl relative top-2 right-64 mb-4" >some heading</h1>
        <div className="Menu-Card shimmer-Menu-Card w-full p-2">
          <div className="info shimmer-info">
            <h2 className="font-styling shimmer-f-s">heading</h2>
            <h2 className="font-styling shimmer-f-s">Price: 20</h2>
            <p className="font-styling shimmer-f-s">some description </p>
          </div>
          <div className="Menu-imgContainer">
            <button className="addToCart font-styling">ADD</button>
          </div>
        </div>

        <div className="Menu-Card shimmer-Menu-Card w-full p-2">
          <div className="info shimmer-info">
            <h2 className="font-styling shimmer-f-s">heading</h2>
            <h2 className="font-styling shimmer-f-s">Price: 20</h2>
            <p className="font-styling shimmer-f-s">some description </p>
          </div>
          <div className="Menu-imgContainer">
            <button className="addToCart font-styling">ADD</button>
          </div>
        </div>

        <div className="Menu-Card shimmer-Menu-Card w-full p-2">
          <div className="info shimmer-info">
            <h2 className="font-styling shimmer-f-s">heading</h2>
            <h2 className="font-styling shimmer-f-s">Price: 20</h2>
            <p className="font-styling shimmer-f-s">some description </p>
          </div>
          <div className="Menu-imgContainer">
            <button className="addToCart font-styling">ADD</button>
          </div>
        </div>

        <div className="Menu-Card shimmer-Menu-Card w-full p-2">
          <div className="info shimmer-info">
            <h2 className="font-styling shimmer-f-s">heading</h2>
            <h2 className="font-styling shimmer-f-s">Price: 20</h2>
            <p className="font-styling shimmer-f-s">some description </p>
          </div>
          <div className="Menu-imgContainer">
            <button className="addToCart font-styling">ADD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;
