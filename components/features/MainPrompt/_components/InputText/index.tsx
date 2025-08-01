import { FunctionComponent } from 'react';

import { Label } from '@/components/ui/label';
import { TextArea } from '@/components/ui/textarea';

interface InputTextProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label: string;
  subLabel?: string;
}

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A functional component that renders a labeled text input area.
 *
 * @param label - The primary label for the input field.
 * @param subLabel - An optional sub-label providing additional context.
 * @param attrs - Additional HTML attributes for the textarea element.
 */

/*******  9c0b4052-767e-4f7f-a6ff-3b5fd62c04eb  *******/
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
