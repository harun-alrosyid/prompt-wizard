import { Copy } from 'lucide-react';
import { FunctionComponent } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import InputSelect from './_components/InputSelect';
import InputText from './_components/InputText';

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
                  <form className="flex flex-col gap-4">
                    <InputSelect
                      label={"Category"}
                      option={[
                        { label: "Text", value: "Text" },
                        { label: "Media", value: "Media" },
                        { label: "Music", value: "Music" },
                      ]}
                    />
                    <InputSelect
                      label={"Model"}
                      option={[
                        {
                          label: "APE",
                          subLabel: "(Action, Purpose, Expectation)",
                          value: "APE1",
                        },
                        {
                          label: "APE",
                          subLabel: "(Action, Purpose, Expectation)",
                          value: "APE2",
                        },
                        {
                          label: "APE",
                          subLabel: "(Action, Purpose, Expectation)",
                          value: "APE3",
                        },
                      ]}
                    />

                    <InputText label="Action" subLabel="Action" />
                    <InputText label="Purpose" subLabel="Purpose" />
                    <InputText label="Expectation" subLabel="Expectation" />

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
  );
};

export default MainPrompt;
