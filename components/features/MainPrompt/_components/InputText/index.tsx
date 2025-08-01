import { FunctionComponent } from 'react';

import { Label } from '@/components/ui/label';
import { TextArea } from '@/components/ui/textarea';

interface InputTextProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel?: string;
}

const InputText: FunctionComponent<InputTextProps> = ({
  label,
  subLabel,
  ...attrs
}) => {
  return (
    <div className="grid gap-1">
      <Label>{label}</Label>
      <Label className="text-xs">{subLabel}</Label>
      <TextArea {...attrs} />
    </div>
  );
};

export default InputText;
