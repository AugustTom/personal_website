import TypingWord from "./TypingWord";
import {act, render} from "@testing-library/react";

describe('Typing word', () => {
    const typingSpeed = 1000;
    it('types one letter every second', async () => {
        const testWord = 'abc'
        const screen = render(<TypingWord word={testWord}/>);
        await act(async () => {
            for (let i = 0; i < testWord.length; i++) {
                expect(screen.getByTestId('word').textContent).toBe(testWord.slice(0, i))
                await new Promise((r) => setTimeout(r, typingSpeed));
            }
        })
    })
})
