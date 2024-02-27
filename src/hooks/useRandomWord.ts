import { useState } from 'react';
import { animals, foods, fruits } from "@pt/constants/words";

const useRandomWord = (): [string, () => void] => {
  const [randomWord, setRandomWord] = useState<string>('Start');

  const generateNewWord = () => {
    const combinedArray = [...animals, ...foods, ...fruits];
    const newWord = combinedArray[Math.floor(Math.random() * combinedArray.length)];
    setRandomWord(newWord);
  };

  return [randomWord, generateNewWord];
};

export default useRandomWord;
