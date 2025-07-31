import { FunctionComponent } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
    label: string
    subLabel?: string
}

const InputText: FunctionComponent<InputTextProps> = ({label,subLabel,...attrs}) => {
  return (
    <div className="grid gap-1">
      <Label>{label}</Label>
      <Label className="text-xs">{subLabel}</Label>
      <Input {...attrs}/>
    </div>
  );
};

export default InputText;
