import React, { useState, useEffect } from "react";

// Use your div content structure
const feedItems = [
  { id: 1, title: "Name 1" },
  { id: 2, title: "Name 2" },
  { id: 3, title: "Name 3" },
  { id: 4, title: "Name 4" },
];

const Scroll_Ai = () => {
  // State to track the index of the single currently visible item
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Set up the interval timer
    const interval = setInterval(() => {
      // Logic to advance the slide index and loop
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % feedItems.length);
    }, 3000); // 3 seconds delay for transition

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    // Outer container: Sets the stage for the slides and centers the content
    <div className="flex justify-center items-center h-64 w-full p-4">
      {/* Inner viewport/window: Now only handles dimensions and overflow. */}
      <div className="relative w-full max-w-xl h-full overflow-hidden">
        {/* Map over all items */}
        {feedItems.map((item, index) => {
          const isCurrent = index === currentSlideIndex;
          let positionClass = "";

          // Determine the starting/ending position
          if (isCurrent) {
            positionClass = "translate-x-0 opacity-100"; // ACTIVE: Visible, centered
          } else if (index === (currentSlideIndex + 1) % feedItems.length) {
            positionClass = "translate-x-full opacity-0"; // NEXT: Starts off the right
          } else {
            positionClass = "-translate-x-full opacity-0"; // PREVIOUS: Moved off the left
          }

          return (
            <div
              key={item.id}
              className={`
                            absolute top-0 left-0 w-full h-full p-6 bg-gray-700/80
                            flex flex-col justify-center items-center text-center rounded-lg shadow-xl
                            transition-all duration-700 ease-in-out 
                            ${positionClass}
                        `}
            >
              <h1 className="text-3xl font-extrabold text-white mb-2">
                {item.title}
              </h1>
              <p className="text-white text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                earum quaerat mollitia sed beatae maiores...
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scroll_Ai;
