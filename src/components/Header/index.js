import React from 'react';

import {Link} from 'react-router-dom';
import {Container, Content, Profile} from './styles';
import Logo from '~/assets/logo-purple.svg';

export default function header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>José Vinícius</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="José Vinícius"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
