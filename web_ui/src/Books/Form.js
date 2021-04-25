import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { api_get, api_post, api_patch } from '../api';

export default function BookForm() {
    let history = useHistory();
    const [book, setBook] = useState({ title: "", authorId: -1})

    const id = parseInt(useParams().id);

    useEffect(() => {
        if(!isNaN(id)) {
            api_get(`/book/${id}`).then(setBook)
        }
    }, [id])

    function update(field, ev) {
        let m1 = Object.assign({}, book);
        m1[field] = ev.target.value;
        setBook(m1);
    }


    function submit() {
        const b = {...book, authorId: parseInt(book.authorId)}
        let func = isNaN(id) 
            ? () => api_post("/book", b)
            : () => api_patch(`/book/${id}`, b)
        func().then(() => history.push("/book"))
    }

    return (
        <Container>
            <h2 className="my-4">{isNaN(id) ? "Create" : "Edit" } Book</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="input" value={book.title} onChange={(ev)=> update("title", ev)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="number" value={book.authorId} onChange={(ev)=> update("authorId", ev)} />
                </Form.Group>
                <br />
                <Button onClick={submit}>{isNaN(id) ? "Create" : "Update" }</Button>
            </Form>
        </Container>
    );
}
