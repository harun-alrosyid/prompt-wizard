"use client";
import { FunctionComponent, useState } from 'react';
import { Toaster } from 'sonner';

import { expectResults } from '@/app/constant';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import { Option } from './_components/InputSelect';
import PromptForm from './_components/PromptForm';
import PromptResult from './_components/PromptResult';
import { MainPromptContext } from './_context';

type MainPromptProps = object;

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

  const [result, setResult] = useState<string | "">("");

  const sidebarActive = false;
  return (
    <MainPromptContext
      value={{ category, setCategory, model, setModel, result, setResult }}
    >
      <Toaster />
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        {sidebarActive && <AppSidebar variant="floating" />}
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-row">
                <PromptForm />
                <PromptResult>{result}</PromptResult>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </MainPromptContext>
  );
};

export default MainPrompt;
