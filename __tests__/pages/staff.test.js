import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import Home from '../../src/app/staff/page'
import '@testing-library/jest-dom'


 
describe('Guess A Number Game', () => {
 beforeEach(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.5); 
  });
  it('renders a page and has all components', () => {
    // BDD
    // GIVEN a page
    render(<Home />)

    // WHEN 
    
    //THEN  all components are rendered 
    expect(screen.getAllByTestId("title")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("inputField")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("buttonId")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("output")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("message")[0]).toBeInTheDocument();
  })

it('should start game on button click',() => {
  render(<Home />)
  const buttons = screen.getAllByTestId("buttonId");
  const button = buttons[0];
  
  fireEvent.click(button)
  expect(button).toHaveTextContent("Game Started. Press Again To Restart.");
  expect(screen.getAllByTestId("output")[0]).toHaveTextContent("...");
  expect(screen.getAllByTestId("message")[0]).toHaveTextContent("...");

  })

  it('should trigger game logic when enter is pressed', () => {
    render(<Home />)
    const inputField = screen.getAllByTestId("inputField")[0]


    fireEvent.keyUp(inputField, {key: 'Enter', code: 'Enter'})

    expect(screen.getAllByTestId("output")[0]).toHaveTextContent("Processing ...")


  }) 

   it('should win the game with a correct guess', async () => {
    render(<Home />);
    const inputField = screen.getAllByTestId("inputField")[0];
    const button = screen.getAllByTestId("buttonId")[0];

    fireEvent.click(button);
    
    // Set randGuess to the value you want to test
    const correctGuess = 500;

    act(() => {
      fireEvent.change(inputField, { target: { value: correctGuess } });
      fireEvent.keyUp(inputField, { key: 'Enter', code: 'Enter' });
    });

    await waitFor(() => {
      expect(screen.getAllByTestId("output")[0]).toHaveTextContent("Congratulations! You guessed the correct number !!! :)");
    });
  });

  it('should give hint while guessing', () => {
  render(<Home />);
  const inputField = screen.getAllByTestId("inputField")[0];
  const button = screen.getAllByTestId("buttonId")[0];
  const messageElement = screen.getByTestId("message");

  fireEvent.click(button);

  
  const randGuess = 500;

  act(() => {
    fireEvent.change(inputField, { target: { value: randGuess + 100 } });
    fireEvent.keyUp(inputField, { key: 'Enter', code: 'Enter' });
  });

  expect(messageElement).toHaveTextContent("Too high");

  act(() => {
    fireEvent.change(inputField, { target: { value: randGuess - 100 } });
    fireEvent.keyUp(inputField, { key: 'Enter', code: 'Enter' });
  });

  expect(messageElement).toHaveTextContent("Too low");

 });

})