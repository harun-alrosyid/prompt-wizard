import { FunctionComponent } from 'react';

import { Card } from '@/components/ui/card';
import { TextArea } from '@/components/ui/textarea';

type PromptResultProps = object;
const PromptResult: FunctionComponent<PromptResultProps> = () => {
  return (
    <Card className="w-2/3 h-[100%] rounded-s-sm rounded-e-sm p-8 relative">
      <Card className="w-[100%] bg-[#ededed] h-[100%] rounded-s-sm rounded-e-sm relative">
        <TextArea
          className="w-[80%] min-h-[80px] bg-[#42404027] rounded-s-sm rounded-e-sm m-auto mt-8"
          rows={4}
        />
      </Card>
    </Card>
  );
};

export default PromptResult;
