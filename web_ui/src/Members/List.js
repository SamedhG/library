import { ListGroup, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api_get, api_delete } from '../api'

export default function List() {
    const [ members, setMembers ] = useState();
    useEffect(() => {
        refresh()        
    }, [])

    function refresh() {
        api_get("/member").then((r) => {
            setMembers(r)
        })

    }

    return ( <Container>
        <h2 className="my-4">Members</h2>
        <Link to="/member/new" className="btn btn-primary"> Create </Link> 
        <br />
        <br />
        <ListGroup>
            { members && members.map((m, i) => (
                <ListGroup.Item key={i} className="d-flex justify-content-between">
                    { `${m.firstName} ${m.lastName} (${m.username})` }
                    <span>
                        <Link to={`/member/${m.id}`} className="btn btn-primary"> 
                            Edit
                        </Link>
                        {" "}
                        <Button onClick={() => api_delete(`/member/${m.id}`).then(refresh)}>
                            Delete
                        </Button>
                    </span>
                </ListGroup.Item>))}
        </ListGroup>
    </Container>
    )
}
