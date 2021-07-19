import React, { ReactElement } from 'react';

import HighlightCard from '../../components/HightlightCard';
import TransactionCard from '../../components/TransactionCard';

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
  HighlightCards,
  Transactions,
  Title
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
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 17.000,00" 
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="01 à 16 abril"
        />
      </HighlightCards>
    
      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard />
      </Transactions>
    </Container>
  );
}
 