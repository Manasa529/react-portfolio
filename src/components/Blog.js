import React from 'react';
import './Blog.css';

const Blog = () => {
    const title = "The Ultimate Guide to Healthy Eating";
    const author = "Jane Smith";
    const description = "Eating healthy is essential for maintaining energy, improving mood, and boosting immunity. Discover practical tips and meal ideas to lead a healthier lifestyle.";
    const image = "https://picsum.photos/400/200?random=2";
    const styles = {
    container: {
      textAlign: 'center',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
    },
    author: {
      fontSize: '1rem',
      fontStyle: 'italic',
      marginBottom: '10px',
      color: '#7f8c8d',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#34495e',
    }
  };
  return (
    <div className="blog-container" style={styles.container}>
      <img src={image} alt="Blog" className="blog-image" />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.author}>By {author}</p>
      <p style={styles.description}>{description}</p>
      <div className="blog-footer">Posted on: 15 October 2025</div>
    </div>
  )
}

export default Blog
