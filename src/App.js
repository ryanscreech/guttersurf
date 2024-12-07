import React from 'react';
import './App.css';

function App() {
  const toilets = [
    {
      name: "Premium Porcelain Plus",
      originalPrice: 899,
      discountPrice: 299,
      image: "https://images.unsplash.com/photo-159722831675-6aa045a3c5fd?auto=format&fit=crop&q=80&w=500",
      description: "Luxurious comfort meets incredible savings"
    },
    {
      name: "Elite Comfort Series",
      originalPrice: 699,
      discountPrice: 249,
      image: "https://images.unsplash.com/photo-1597228316775-6aa045a3c5fd?auto=format&fit=crop&q=80&w=500",
      description: "Premium design at a fraction of the cost"
    },
    {
      name: "Classic Throne",
      originalPrice: 499,
      discountPrice: 179,
      image: "https://images.unsplash.com/photo-1597228316776-6aa045a3c5fd?auto=format&fit=crop&q=80&w=500",
      description: "Timeless elegance, unbeatable value"
    }
  ];

  return (
    <div className="app">
      <header className="hero">
        <nav>
          <div className="logo">ThriftThrone</div>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Luxury for Less but still BULK shit</h1>
          <p>Premicccccuuuuuum pre-loved toilets at revolutionary prices</p>
          <button className="cta-button">Browse Collection</button>
        </div>
      </header>

      <section className="features">
        <div className="feature">
          <h3>Premium Quality</h3>
          <p>Carefully inspected and restored</p>
        </div>
        <div className="feature">
          <h3>Huge Savings</h3>
          <p>Up to 70% off retail prices</p>
        </div>
        <div className="feature">
          <h3>Eco-Friendly</h3>
          <p>Sustainable choice for our planet</p>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {toilets.map((toilet, index) => (
            <div className="product-card" key={index}>
              <div className="product-image" style={{backgroundImage: `url(${toilet.image})`}}></div>
              <div className="product-info">
                <h3>{toilet.name}</h3>
                <p>{toilet.description}</p>
                <div className="price">
                  <span className="original-price">${toilet.originalPrice}</span>
                  <span className="discount-price">${toilet.discountPrice}</span>
                </div>
                <button className="buy-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Save?</h2>
        <p>Join thousands of satisfied customers who've discovered luxury for less</p>
        <button className="cta-button">View All Products</button>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h4>ThriftThrone</h4>
            <p>Redefining bathroom luxury</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>sales@thriftthrone.com</p>
            <p>1-800-THRONE</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#instagram">Instagram</a>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
