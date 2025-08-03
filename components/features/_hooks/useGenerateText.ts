import { useState } from 'react';

import useApiGenerateText from './useApiGenerateText';

  /**
   * Handles the state and API calls for a simple text generation chat app.
   *
   * Returns an object with the following properties:
   * - results: An array of strings containing the results of the API calls.
   * - handleInputChange: A function to handle user input in the text input field.
   * - handleSubmit: A debounced function to call the API and set the results.
   * - input: The current user input in the text input field.
   * - isLoading: A boolean indicating whether the API is currently being called.
   */
const useGenerateText = () => {
  const { trigger, isMutating } = useApiGenerateText();
  
  const [results, setResults] = useState<Array<string>>([]);

  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimeout(async () => {
      const result = await trigger({
        prompt: input,
      });
      setResults((prev) => [...prev, ...result]);
    }, 2000);

    setInput("");
  };

  return {
    results,
    handleInputChange,
    handleSubmit,
    input,
    isLoading: isMutating,
  };
};

export default useGenerateText;