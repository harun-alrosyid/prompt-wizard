import { useState } from 'react';

import useApiGenerateText from './useApiGenerateText';

const useGenerateTextChat = () => {
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

export default useGenerateTextChat;