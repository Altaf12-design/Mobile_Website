import React, { useState } from 'react';
import a from '../Practice/all.jpg'
const OpenAi = () => {
  const [cart, setCart] = useState([]);
  const projects = [
    {
      name: "Project 1",
      description: "A brief description of Project 1.",
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      name: "Project 2",
      description: "A brief description of Project 2.",
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
    }
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map(project => (
          <li>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <button onClick={() => setCart([...cart, project])}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cart.map(project => (
          <li>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <button onClick={() => setCart(cart.filter(p => p !== project))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCart([])}>Checkout</button>
    </div>
  );
}

export default OpenAi;
