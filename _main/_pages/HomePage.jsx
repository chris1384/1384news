import { useState, useEffect } from "react";
import { Navbar } from "../_components/Navbar";
import BodyContent from "../_components/BodyContent";
import BgVideo from "../_components/BgVideo";
import Footer from "../_components/Footer";
import NewsCard from "../_components/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../_styles/texts.css";

import video1 from "../_assets/bg.webm";

const API_URL = "https://content.guardianapis.com/search?api-key=fcb9a5de-baca-4714-b762-d5ac53a89b3d&section=music&show-fields=all&page-size=10";

function HomePage() {

    // ye i def did this first but then it changed XD

    const [newsArticles, setNewsArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // ez
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {

                const response = await fetch(`${API_URL}&page=${currentPage}`);
                const data = await response.json();
                
                setNewsArticles(prevArticles => {

                    // this might be useless but thanks copilot
                    const uniqueArticles = [...prevArticles, ...data.response.results]
                        .filter((value, index, self) =>
                            index === self.findIndex((t) => (
                                t.id === value.id
                            ))
                        );

                    return uniqueArticles;
                });

                if (totalPages === null) {
                    const pages = Math.ceil(data.response.total / 10);
                    setTotalPages(pages);
                }
                
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    // eslint-disable-next-line
    }, [currentPage]);

    const loadMoreArticles = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <>
            <Navbar />

            <BgVideo>
                <video src={video1} autoPlay loop style={{ width: "100vw", height: "calc(100vw / 1.7777)", position: "absolute", zIndex: "-1" }} />
                <div style={{ width: "100vw", justifyContent: "center", alignItems: "center" }}>
                    <div className="_paragraph">The latest news regarding the music industry!</div>
                </div>
            </BgVideo>

            <div style={{ width: "100vw", marginTop: "90px", justifyContent: "center", alignItems: "center" }}>
                <div className="_paragraph">Latest Events</div>
            </div>

            <BodyContent>
                <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-6">
                    {newsArticles.map(article => (
                        <Col key={article.id} style={{ marginBlock: "30px" }}>
                            <NewsCard
                                title={article.webTitle}
                                description={article.fields.trailText}
                                image={article.fields.thumbnail}
                                link={article.id} // Pass the full URL or ID as needed
                            />
                        </Col>
                    ))}
                </Row>
            </BodyContent>

            <BodyContent style={{ minHeight: "auto", height: "auto" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "50px" }}>
                    <Button variant="pink" onClick={loadMoreArticles} style={{ backgroundColor: "pink", borderColor: "pink", width: "200px", height: "50px" }} disabled={loading || currentPage >= totalPages}>
                        {loading ? "Loading..." : "Load More"}
                    </Button>
                </div>
            </BodyContent>

            <Footer />
        </>
    );
}

export default HomePage;
