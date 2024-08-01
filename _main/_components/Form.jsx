import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"

export default function CForm(props) {
    return (
        <div {...props}>
          <Form style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
              <Form.Group className="mb-2" controlId="authName">
                  <Form.Label style={{color: "black"}}>Please add the author name:</Form.Label>
                  <Form.Control type="author" placeholder="Rabbit Junk"/>
              </Form.Group>

              <Form.Group className="mb-2" controlId="songName">
                  <Form.Label style={{color: "black", marginTop: "12px"}}>And now the song name:</Form.Label>
                  <Form.Control type="song" placeholder="Neurodivergent"/>
              </Form.Group>

              <Button variant="dark" style={{marginTop: "12px"}}>
                Submit
              </Button>
          </Form>
        </div>
    )
}