import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from "../_components/Navbar";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from "../_components/Footer";
import BodyContent from "../_components/BodyContent";
import '../_styles/texts.css';

const API_URL = 'https://content.guardianapis.com/search?api-key=fcb9a5de-baca-4714-b762-d5ac53a89b3d&section=music&show-fields=all';

export default function NewsPage() {
    // ye i did this but then changed
    const navigate = useNavigate();
    const { title } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}&q=${title}`);
                const data = await response.json();
                const fetchedArticle = data.response.results.find(article => article.id.split('/').pop() === title);
                setArticle(fetchedArticle);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [title]);

    if (loading) return <div>Loading...</div>;

    if (!article) {
        return (
            <>
                <Navbar />
                <div className="_paragraph">Article not found</div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <BodyContent>
                <div className="news-body" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "800px", textAlign: "justify" }}>
                    <h1>{article.webTitle}</h1>
                    <img src={article.fields.thumbnail} alt={article.webTitle} style={{ width: "100%", height: "auto" }} />
                    <div dangerouslySetInnerHTML={{ __html: article.fields.body }}></div>
                </div>
            </BodyContent>

            <BodyContent style={{ minHeight: "auto", height: "auto" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "50px" }}>
                    <Button variant="pink" onClick={() => navigate("/")} style={{ backgroundColor: "pink", borderColor: "pink", width: "200px", height: "50px" }}>
                        Return to Main
                    </Button>
                </div>
            </BodyContent>
            <Footer />
        </>
    );
}
