import { ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react';
import { FunctionComponent } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { SectionCards } from '@/components/section-cards';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { SidebarInset, SidebarMenuButton, SidebarProvider } from '@/components/ui/sidebar';
import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from '@radix-ui/react-select';

import InputSelect from './_components/InputSelect';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainPromptProps {}

const MainPrompt: FunctionComponent<MainPromptProps> = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-row">
              <Card className="w-1/3 h-[94vh] rounded-s-sm rounded-e-sm">
                <CardHeader>
                  <CardTitle>Input Your Parameter</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                  <form className='flex flex-col gap-4'>
                   <InputSelect label={"Category"} />
                   <InputSelect label={"Model"} />
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full">
                         Generate Prompt
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <Card className="w-2/3 h-[100%] rounded-s-sm rounded-e-sm"></Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainPrompt;
