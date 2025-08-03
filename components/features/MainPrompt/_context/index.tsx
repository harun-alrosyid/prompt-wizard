import React from 'react';

import { Option } from '../_components/InputSelect';

interface MainPromptContext {
  category?: Option;
  setCategory: (category: Option) => void;
  model?: Option;
  setModel: (model: Option) => void;
  result?: string ;
  setResult: (model: string) => void;
}

export const MainPromptContext = React.createContext<MainPromptContext>({
  category: undefined,
  setCategory: () => {},
  model: undefined,
  setModel: () => {},
  result: undefined,
  setResult: () => {},
});
