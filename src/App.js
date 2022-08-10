import './App.css';

// Components
import { Hero, Programs, Reasons, Plans, Testimonials, Join, Footer } from './importComponents'

function App() {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
