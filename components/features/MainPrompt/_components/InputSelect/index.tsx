import { ChevronsUpDown } from 'lucide-react';
import { FunctionComponent } from 'react';

import { Card } from '@/components/ui/card';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { SidebarMenuButton } from '@/components/ui/sidebar';

interface InputSelectProps {
  label: string;
  option: Array<{ label: string; subLabel?: string; value: string }>;
}

const InputSelect: FunctionComponent<InputSelectProps> = ({
  label,
  option,
}) => {
  return (
    <Card className="py-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{label}</span>
              <span className="">{label}</span>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width)"
          align="start"
        >
          {option.map((item) => (
            <DropdownMenuItem key={item.value}>
                <div className='flex flex-col'>
              <span>{item.label}</span>
              <span className='text-xs'>{item.subLabel}</span>
                </div>
                    
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
};

export default InputSelect;
