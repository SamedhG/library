import { ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_get, api_delete } from '../api'

export default function List() {
    const [ books, setBooks ] = useState();
    useEffect(() => {
        refresh()        
    }, [])

    function refresh() {
        api_get("/book").then((r) => {
            setBooks(r)
        })

    }
    
    console.log(books)
    return ( <Container>
        <h2 className="my-4">Books</h2>
        <Link to="/book/new" className="btn btn-primary"> Create </Link> 
        <br />
        <br />
        <ListGroup>
            { books && books.map((b, i) => (
                <ListGroup.Item key={i} className="d-flex justify-content-between">
                    { `${b.title} (Written By ${b.author.name})` }
                    <span>
                        <Link to={`/book/${b.id}`} className="btn btn-primary"> 
                            Edit
                        </Link>
                        {" "}
                        <Button onClick={() => api_delete(`/book/${b.id}`).then(refresh)}>
                            Delete
                        </Button>
                    </span>
                </ListGroup.Item>))}
        </ListGroup>
    </Container>
    )
}
