import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { api_get, api_post, api_patch } from '../api';

export default function MemberForm() {
    let history = useHistory();
    const [member, setMember] = useState({
        username: "", firstName: "", lastName: "", password: "", 
        email: "", dateOfBirth: new Date().toISOString().split("T")[0]})

    const id = parseInt(useParams().id);

    useEffect(() => {
        if(!isNaN(id)) {
            api_get(`/member/${id}`).then((m) => {
                const date = new Date(m.dateOfBirth).toISOString().split('T')[0];
                setMember({...m, dateOfBirth: date})
            })
        }
    }, [id])

    function update(field, ev) {
        let m1 = Object.assign({}, member);
        m1[field] = ev.target.value;
        setMember(m1);
    }


    function submit() {
        const m = {...member, dateOfBirth: new Date(member.dateOfBirth).toISOString()}
        let func = isNaN(id) 
            ? () => api_post("/member", m)
            : () => api_patch(`/member/${id}`, m)
        func().then(() => history.push("/member"))
    }

    return (
        <Container>
            <h2 className="my-4">{isNaN(id) ? "Create" : "Edit" } Member</h2>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="input" value={member.firstName} onChange={(ev)=> update("firstName", ev)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="input" value={member.lastName} onChange={(ev)=> update("lastName", ev)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="input" value={member.username} onChange={(ev)=> update("username", ev)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="input" value={member.email} onChange={(ev)=> update("email", ev)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={member.password} onChange={(ev)=> update("password", ev)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" value={member.dateOfBirth} onChange={(ev)=> update("dateOfBirth", ev)} />
                </Form.Group>
                <br />
                <Button onClick={submit}>{isNaN(id) ? "Create" : "Update" }</Button>
            </Form>
        </Container>
    );
}
