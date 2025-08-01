import { ChevronsUpDown } from 'lucide-react';
import { FunctionComponent } from 'react';

import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { SidebarMenuButton } from '@/components/ui/sidebar';

export type Option = {
  label: string;
  subLabel?: string;
  value: string;
};
interface InputSelectProps {
  label: string;
  option: Array<Option>;
  value?: Option;
  onSelect: (option: Option) => void;
  disabled?: boolean;
}

/**
 * A dropdown select component that displays a label and value.
 * If the user is not disabled, the component will display a dropdown
 * menu with options when clicked.
 *
 * @param {string} label - The label to display
 * @param {Array<Option>} option - The options to display in the dropdown
 * @param {Option | undefined} value - The currently selected value
 * @param {(option: Option) => void} onSelect - The function to call when an option is selected
 * @param {boolean} [disabled=false] - Whether the component is disabled
 * @returns {JSX.Element} The component
 */
const InputSelect: FunctionComponent<InputSelectProps> = ({
  label,
  option,
  value,
  onSelect,
  disabled,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className={`data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground border-2 border-[#ededed] min-h-12 ${
            disabled ? " bg-[#ededed]" : ""
          }`}
        >
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-medium">{label}</span>
            <span className="">{value?.label}</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      {!disabled && (
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width)"
          align="start"
        >
          {option.map((item) => (
            <DropdownMenuItem key={item.value} onClick={() => onSelect(item)}>
              <div className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-xs">{item.subLabel}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default InputSelect;
