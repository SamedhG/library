import { ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_get, api_delete } from '../api'

export default function List() {
    const [ authors, setAuthors ] = useState();
    useEffect(() => {
        refresh()        
    }, [])

    function refresh() {
        api_get("/author").then((r) => {
            setAuthors(r)
        })

    }

    return ( <Container>
        <h2 className="my-4">Authors</h2>
        <Link to="/author/new" className="btn btn-primary"> Create </Link> 
        <br />
        <br />
        <ListGroup>
            { authors && authors.map((a, i) => (
                <ListGroup.Item key={i} className="d-flex justify-content-between">
                    { a.name}
                    <span>
                        <Link to={`/author/${a.id}`} className="btn btn-primary"> 
                            Edit
                        </Link>
                        {" "}
                        <Button onClick={() => api_delete(`/author/${a.id}`).then(refresh)}>
                            Delete
                        </Button>
                    </span>
                </ListGroup.Item>))}
        </ListGroup>
    </Container>
    )
}
