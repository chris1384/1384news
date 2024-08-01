import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./_main/_pages/HomePage";
import LyricsPage from "./_main/_pages/LyricsPage";
import ContactPage from "./_main/_pages/ContactPage";
import NewsPage from "./_main/_pages/NewsPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="lyrics" element={<LyricsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news/:title" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;