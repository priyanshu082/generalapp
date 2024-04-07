'use client'
import React from 'react';

const ShapesLearning = () => {
  const shapes = [
    { name: 'Square', color: 'bg-red-500' },
    { name: 'Triangle', color: 'bg-yellow-500' },
    { name: 'Circle', color: 'bg-teal-500' },
    { name: 'Rectangle', color: 'bg-purple-500' },
    { name: 'Hexagon', color: 'bg-orange-500' },
    { name: 'Pentagon', color: 'bg-pink-500' },
    { name: 'Star', color: 'bg-cyan-500' },
    { name: 'Sphere', color: 'bg-blue-500' },
  ];

  const showPopup = (shape) => {
    const popup = document.getElementById('popup');
    const title = document.getElementById('shape-title');
    const description = document.getElementById('shape-description');
    popup.style.display = 'block';
    title.textContent = shape.name;
    switch (shape.name) {
      case 'Square':
        description.textContent = "A square is a shape with four equal sides and four right angles.";
        break;
      case 'Triangle':
        description.textContent = "A triangle is a polygon with three edges and three vertices. It is one of the basic shapes in geometry.";
        break;
      case 'Circle':
        description.textContent = "A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre.";
        break;
      case 'Rectangle':
        description.textContent = "A rectangle is a quadrilateral with four right angles.";
        break;
      case 'Hexagon':
        description.textContent = "A hexagon is a six-sided polygon.";
        break;
      case 'Pentagon':
        description.textContent = "A pentagon is a five-sided polygon.";
        break;
      case 'Star':
        description.textContent = "A star is a shape with a number of points projecting from its core. The most common variant in vexillology is a five-pointed star, but many other possibilities exist.";
        break;
      case 'Sphere':
        description.textContent = "A sphere is a perfectly round geometrical object in three-dimensional space that is the surface of a completely round ball.";
        break;
      default:
        description.textContent = "";
        break;
    }
  }

  const hidePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  return (
    <div className=" text-center flex justify-center flex-col bg-pink-300">
      <h1 className="text-3xl font-bold text-gray-800 my-8">Let's Learn Shapes!</h1>
      <div className="flex flex-row flex-wrap gap-[5vw] mt-[5vw] justify-center items-center px-[20vw]">
        {shapes.map((shape, index) => (
          <div key={index} className={`shape ${shape.color} cursor-pointer relative overflow-hidden rounded-lg w-[23vw] p-[1vw] transition-transform transform hover:scale-110`} onClick={() => showPopup(shape)}>
            <svg viewBox="0 0 24 24" className="w-full h-full">
              {shape.name === 'Square' && <rect x="2" y="2" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Triangle' && <polygon points="12,2 22,21 2,21" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Circle' && <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Rectangle' && <rect x="2" y="4" width="20" height="16" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Hexagon' && <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Pentagon' && <polygon points="12,2 22,8 18,22 6,22 2,8" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Star' && <polygon points="12,2 14,8 20,8 15,12 17,18 12,14 7,18 9,12 4,8 10,8" fill="none" stroke="#fff" strokeWidth="2" />}
              {shape.name === 'Sphere' && (
                <>
                  <circle cx="12" cy="12" r="10" fill="url(#sphere-gradient)" stroke="#fff" strokeWidth="2" />
                  <defs>
                    <radialGradient id="sphere-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#6495ED', stopOpacity: 1 }} />
                    </radialGradient>
                  </defs>
                </>
              )}
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 py-2 px-4 rounded-md shadow-sm opacity-0 transition-opacity duration-300">{shape.name}</span>
          </div>
        ))}
      </div>

      <div className="popup flex  justify-center items-center" id="popup">
        <div className="popup-content bg-white p-8 rounded-lg shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="close-btn absolute top-0 right-0 mt-2 mr-2 text-xl cursor-pointer" onClick={hidePopup}>&times;</span>
          <h2 id="shape-title" className="text-2xl font-bold mb-4"></h2>
          <p id="shape-description" className="text-lg text-gray-700"></p>
          <button onClick={hidePopup} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">Close</button>
        </div>
      </div>
    </div>
  );
}

export default ShapesLearning;
