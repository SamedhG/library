import { Switch, Route } from 'react-router-dom';
import './App.scss';
import MemberList from './Members/List'
import MemberForm from './Members/Form'
import BookList from './Books/List'
import BookForm from './Books/Form'
import AuthorList from './Authors/List'
import AuthorForm from './Authors/Form'

function App() {
  return (
    <>
        <Switch>
            <Route path="/" exact>
            Home Page Goes here
            </Route>
            <Route path="/member" exact>
                <MemberList/>
            </Route>
            <Route path="/member/:id" exact>
                <MemberForm />
            </Route>
            <Route path="/book" exact>
                <BookList/>
            </Route>
            <Route path="/book/:id" exact>
                <BookForm />
            </Route>
            <Route path="/author" exact>
                <AuthorList/>
            </Route>
            <Route path="/author/:id" exact>
                <AuthorForm />
            </Route>
        </Switch>
    </>
      );
}

export default App;
