import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from '../../screens/Profile';

describe('Profile Screen', () => {
  it('should be correctly placeholder inpur user name', () => {
    const { getByPlaceholderText } = render(<Profile />);
  
    const inputName = getByPlaceholderText('Nome');
  
    expect(inputName) .toBeTruthy(); 
  });
  
  it('should be load user data', () => {
    const { getByTestId } = render(<Profile />);
  
    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');
  
    expect(inputName.props.value).toEqual('Davi');
    expect(inputSurname.props.value).toEqual('Hoffmann');
  });
  
  it('should be exist title with value equal Perfil', () => {
    const { getByTestId } = render(<Profile />);
  
    const textTitle = getByTestId('text-title');
  
    expect(textTitle.props.children).toContain('Perfil')
  });
});
