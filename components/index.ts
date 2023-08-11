import Hero from './Hero';
import Button from './Button';
import Navbar from './Navbar';
import Footer from './Footer';
import TextField from './TextField';
import ProductCart from './ProductCart';

export { Hero, Button, Navbar, Footer, TextField, ProductCart };

export const menuItems = [
  { title: 'home', url: '/' },
  { title: 'products', url: '/products' },
  { title: 'contact', url: '/contact' },
  { title: 'api', url: '/api' },
];

export const fotterLinks = [
  {
    head: 'Information',
    links: [
      { title: 'privacy', url: '/privacy' },
      { title: 'blog', url: '/blog' },
    ],
  },
];
