import { FunctionComponent, HTMLAttributes } from 'react';

import { Label } from '@/components/ui/label';
import { TextArea } from '@/components/ui/textarea';

interface InputTextProps extends HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel?: string;
  placeholder?: string;
}

/**
 * A functional component that renders a labeled text input area.
 *
 * @param label - The primary label for the input field.
 * @param subLabel - An optional sub-label providing additional context.
 * @param attrs - Additional HTML attributes for the textarea element.
 */

const InputText: FunctionComponent<InputTextProps> = ({
  label,
  subLabel,
  placeholder,
  ...attrs
}) => {
  return (
    <div className="grid gap-1">
      <Label>{label}</Label>
      <Label className="text-xs">{subLabel}</Label>
      <TextArea {...attrs} placeholder={placeholder} />
    </div>
  );
};

export default InputText;
