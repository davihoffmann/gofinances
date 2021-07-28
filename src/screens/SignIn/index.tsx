import React, { ReactElement, useState } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import SignInSocialButton from '../../components/SignInSocialButton';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';

export default function SignIn(): ReactElement {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch(error) {
      console.error(error);
      Alert.alert('Não foi possível conectar a conta Google.');
      setIsLoading(false);
    }
  }

  async function handlesignInWithApple() {
    try {
      setIsLoading(true);
      await signInWithApple();
    } catch(error) {
      console.error(error);
      Alert.alert('Não foi possível conectar a conta Apple.');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça o seu login com{'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} onPress={handleSignInWithGoogle} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} onPress={handlesignInWithApple} />
        </FooterWrapper>

        { isLoading && <ActivityIndicator style={{ marginTop: 18 }} color={theme.colors.primary} size="large" /> }
      </Footer>
    </Container>
  );
}
