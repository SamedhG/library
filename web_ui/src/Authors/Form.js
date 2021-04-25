import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { api_get, api_post, api_patch } from '../api';

export default function AuthorForm() {
    let history = useHistory();
    const [author, setAuthor] = useState({name: ""})

    const id = parseInt(useParams().id);

    useEffect(() => {
        if(!isNaN(id)) {
            api_get(`/author/${id}`).then(setAuthor)
        }
    }, [id])

    function update(field, ev) {
        let m1 = Object.assign({}, author);
        m1[field] = ev.target.value;
        setAuthor(m1);
    }


    function submit() {
        let func = isNaN(id) 
            ? () => api_post("/author", author)
            : () => api_patch(`/author/${id}`, author)
        func().then(() => history.push("/author"))
    }

    return (
        <Container>
            <h2 className="my-4">{isNaN(id) ? "Create" : "Edit" } Author</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" value={author.name} onChange={(ev)=> update("name", ev)} />
                </Form.Group>
                <br />
                <Button onClick={submit}>{isNaN(id) ? "Create" : "Update" }</Button>
            </Form>
        </Container>
    );
}
