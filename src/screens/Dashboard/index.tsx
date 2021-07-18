import React, { ReactElement } from 'react';
import HighlightCard from '../../components/HightlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
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

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
 