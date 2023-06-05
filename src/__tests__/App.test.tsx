import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App/App';

test('renders simple test', () => {
  render(<App />);
  const textElement = screen.getByText("Mi componente con tailwind");
  expect(textElement).toBeInTheDocument();

});

test('renders simple button test', () => {
  render(<App />);
  const buttonElement = screen.getByText("Haz click")
  expect(buttonElement).toBeInTheDocument();
  // No se puede hacer pruebas con console.log para poderlo hacer lo tendere que hacer como aparace abajo
  const consoleLogMock = jest.spyOn(console, 'log')
  fireEvent.click(buttonElement);
  expect(consoleLogMock).toHaveBeenCalledWith("Bienvenido a mi app")

});

/***
 * este sera la salida para usar un botón haceindo una suma:
 * import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button click event - sum', () => {
  render(<App />);
  const buttonElement = screen.getByText('Haz clic aquí');
  const resultElement = screen.getByTestId('result'); // Supongamos que el resultado se muestra en un elemento con un atributo data-testid="result"

  // Verificar que el botón y el resultado estén presentes en la pantalla
  expect(buttonElement).toBeInTheDocument();
  expect(resultElement).toBeInTheDocument();

  // Simular un evento de clic en el botón
  fireEvent.click(buttonElement);

  // Verificar el resultado de la suma
  expect(resultElement.textContent).toBe('3'); // Supongamos que la suma es 1 + 2 y el resultado esperado es '3'
});

 */
