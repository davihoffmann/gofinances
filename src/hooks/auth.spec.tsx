import 'jest-fetch-mock'

import { renderHook, act } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';
import fetchMock from 'jest-fetch-mock';
import { startAsync } from 'expo-auth-session';

import { AuthProvider, useAuth } from './auth';

jest.mock('expo-auth-session');
fetchMock.enableMocks();

describe('Auth Hook', () => {
  it('Should be able to sign in with Google Account', async () => {

    //Primeiro, nós precisamos do Token. Então, vamos Mockar a função de startAsync.
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      params: {
        access_token: 'any_token',
      }
    });

    //Agora que temos o Token, vamos mockar a requisição ttp dos dados de profile do usuário.
    fetchMock.mockResponseOnce(JSON.stringify(
      {
        id: 'any_id',
        email: 'davi@email.com',
        name: 'Davi',
        photo: 'any_photo.png'
      } 
    ));

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    // Você até pode usar esse console.log para visualizar os dados.
    console.log("USER PROFILE =>", result.current.user);

    expect(result.current.user).toBeTruthy();
  })
})