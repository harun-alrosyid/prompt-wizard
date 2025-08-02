import { FunctionComponent, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';

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
  const { category, setCategory, model, setModel } =
    useContext(MainPromptContext);
  const { control } = useForm();

  return (
    <Card className="w-1/3 h-[94vh] rounded-s-sm rounded-e-sm ">
      <CardHeader>
        <CardTitle>Input Your Parameter</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4 h-[100%]">
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
          <div className="flex flex-col gap-3  max-h-[70%] overflow-auto">
            {modelPrompts
              .find(({ value }) => value === model?.value)
              ?.input.map(({ label, description, placeholder }) => (
                <Controller
                  control={control}
                  name={label}
                  key={label}
                  render={({ field }) => (
                    <InputText
                      className="min-h-24"
                      placeholder={placeholder ?? ""}
                      key={label}
                      label={label}
                      subLabel={description}
                      {...field}
                    />
                  )}
                />
              ))}
          </div>

          <div className="flex gap-3 justify-between  bottom-10 absolute] ">
            <Button variant="outline" className="w-[calc(50%-10px)]">
              Copy Prompt
            </Button>
            <Button variant="default" className="w-1/2">
              Execute
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PromptForm;
