import { FunctionComponent } from 'react';

import { Card } from '@/components/ui/card';

type PromptResultProps = object;
const PromptResult: FunctionComponent<PromptResultProps> = () => {
  return (
    <Card className="w-2/3 h-[100%] rounded-s-sm rounded-e-sm p-8 relative">
      <Card className="w-[100%] bg-gray-100 h-[100%] rounded-s-sm rounded-e-sm relative"></Card>
    </Card>
  );
};

export default PromptResult;
