"use client";
import { FunctionComponent, useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as yup from 'yup';

import { expectResults, modelPrompts } from '@/app/constant';
import useApiGenerateText from '@/components/features/_hooks/useApiGenerateText';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { yupResolver } from '@hookform/resolvers/yup';

import { MainPromptContext } from '../../_context';
import InputSelect from '../InputSelect';
import InputText from '../InputText';

type PromptFormProps = object;

type InputField = {
  label: string;
  description: string;
  placeholder?: string;
};
type ModelPrompt = {
  value: string;
  label: string;
  subLabel: string;
  input: InputField[];
};

type FormValues = {
  [key: string]: string;
};

const createSchema = (
  model: ModelPrompt | null
): yup.ObjectSchema<FormValues> => {
  const shape: Record<string, yup.StringSchema<string>> = {};

  model?.input.forEach((field) => {
    shape[field.label] = yup.string().required(`${field.label} is required`);
  });

  return yup.object().shape(shape) as yup.ObjectSchema<FormValues>;
};

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
  const { category, setCategory, model, setModel, setResult } =
    useContext(MainPromptContext);

  const schema = createSchema(modelPrompts[0]);

  const { control, handleSubmit, watch } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: modelPrompts[0]?.input.reduce((acc, cur) => {
      acc[cur.label] = "";
      return acc;
    }, {} as Record<string, string>),
  });

  const { trigger } = useApiGenerateText();
  const onSubmit = async (data: FormValues) => {
    const propmt = Object.values(data).join("\n");
    try {
      const result = await trigger({ prompt: propmt });
      setResult(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onCopy = () => {
    const propmt = Object.values(watch()).join("\n");

    try {
      if (navigator.clipboard.writeText) {
        navigator.clipboard.writeText(propmt);
      }
      toast("Prompt copied to clipboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="w-1/3 h-[94vh] rounded-s-sm rounded-e-sm ">
      <CardHeader>
        <CardTitle>Input Your Parameter</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-4 h-[100%]"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <Button
              type="button"
              variant="outline"
              className="w-[calc(50%-10px)]"
              onClick={onCopy}
            >
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
