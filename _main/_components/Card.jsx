import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function NewsCard({ title, description, image, link }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const articleId = link.split('/').pop();
        navigate(`/news/${articleId}`);
    };

    return (
        <Card
            style={{ overflow: "hidden", margin: "0px", padding: "0px", boxSizing: "border-box", cursor: "pointer" }}
            onClick={handleClick}
        >
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ color: "black" }}>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;
