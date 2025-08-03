import { FunctionComponent } from 'react';

import { Card } from '@/components/ui/card';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PromptResultProps extends React.HTMLAttributes<HTMLDivElement> {}
const PromptResult: FunctionComponent<PromptResultProps> = ({ children }) => {
  return (
    <Card className="w-2/3 h-[100%] rounded-s-sm rounded-e-sm p-8 relative">
      <Card className="w-[100%] bg-gray-100 h-[100%] rounded-s-sm rounded-e-sm relative">
        {children}
      </Card>
    </Card>
  );
};

export default PromptResult;
