import { FunctionComponent, useContext } from 'react';

import { expectResults, modelPrompts } from '@/app/constant';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { MainPromptContext } from '../../_context';
import InputSelect from '../InputSelect';
import InputText from '../InputText';

type PromptFormProps = object;

/**
 * The main form component for the main prompt feature.
 *
 * This component renders a card that contains a form with two input selects and a
 * variable number of input texts. The first input select is for selecting the
 * category of the prompt. The second input select is for selecting the model of
 * the prompt. The input texts are dynamically generated based on the model
 * selected.
 *
 * The form also includes a button to generate the prompt based on the input
 * values.
 */
const PromptForm: FunctionComponent<PromptFormProps> = () => {
    const { category, setCategory, model, setModel } = useContext(MainPromptContext);
  return (
    <Card className="w-1/3 h-[94vh] rounded-s-sm rounded-e-sm">
      <CardHeader>
        <CardTitle>Input Your Parameter</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <InputSelect
            label={"Category"}
            option={expectResults}
            value={category}
            onSelect={setCategory}
            disabled
          />
          <InputSelect
            label={"Model"}
            option={modelPrompts.map(({ value, label, subLabel }) => ({
              value,
              label,
              subLabel,
            }))}
            value={model}
            onSelect={setModel}
          />

          {modelPrompts
            .find(({ value }) => value === model?.value)
            ?.input.map(({ label, description }) => (
              <InputText key={label} label={label} subLabel={description} />
            ))}

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
  );
};

export default PromptForm;
