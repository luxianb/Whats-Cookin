import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from '../Containers/Index';
import { Header, Container, Brand, Nav, NavigationLink, LogInButton, SignUpButton, ProfilePortal } from './components';

const NavigationBar = () => {
  const [loggedUser, setLoggedUser] = useState()

  useEffect(() => {
    async function fetchLoggedUserInfo() {
      const res = await axios.get('/api/session');
      console.log(res);

      setLoggedUser(res.data)
    }
    fetchLoggedUserInfo()
  }, [])

  return (
    <Header>
      <Container>
        <Brand />

        <Nav>
          <NavigationLink text="Meals" to="#" />

          <Row style={{justifyContent: 'flex-end', flex: 1}}>
            {loggedUser ? (<>
              <LogInButton />
              <SignUpButton />
            </>) : (
              <ProfilePortal img={loggedUser?.profileImage}/>
              )}
          </Row>
          
        </Nav>
      </Container>
    </Header>
)};

export default NavigationBar