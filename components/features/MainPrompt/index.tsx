"use client";
import { Copy } from 'lucide-react';
import { FunctionComponent, useState } from 'react';

import { expectResults } from '@/app/constant';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { Card } from '@/components/ui/card';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { Option } from './_components/InputSelect';
import PromptForm from './_components/PromptForm';
import { MainPromptContext } from './_context';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainPromptProps {}

/**
 * The main prompt component.
 *
 * This component is the main entry point for the UI. It renders the main
 * sidebar and the main content area.
 *
 * The main content area is split into two parts: the left side is for the
 * prompt form, and the right side is for the AI's response.
 *
 * The user can select a category from the sidebar, and then enter a prompt
 * into the prompt form. When the user submits the form, the AI will generate
 * a response based on the category and prompt.
 *
 * The AI's response will be displayed in the right side of the main content
 * area.
 */
const MainPrompt: FunctionComponent<MainPromptProps> = () => {
  const [category, setCategory] = useState<Option>(expectResults[0]);

  const [model, setModel] = useState<Option>();
  
  return (
    <MainPromptContext value={{ category, setCategory, model, setModel }}>
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
                <PromptForm />
                <Card className="w-2/3 h-[100%] rounded-s-sm rounded-e-sm p-8">
                  <Card className="w-[100%] bg-[#ededed] h-[100%] rounded-s-sm rounded-e-sm relative">
                    <Copy className="absolute top-4 right-4" />
                  </Card>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </MainPromptContext>
  );
};

export default MainPrompt;
