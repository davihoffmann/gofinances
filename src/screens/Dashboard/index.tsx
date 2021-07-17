import React, { ReactElement } from 'react';
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName
} from './styles';
 
export default function Dashboard(): ReactElement {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://github.com/davihoffmann.png'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Davi</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
        
      </Header>
    </Container>
  );
}
 