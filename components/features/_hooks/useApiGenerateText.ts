import useSWRMutation from 'swr/mutation';

export type ApiGenerateTextPaylod = {
  prompt: string;
};

type ApiResponse = {
  statusCode: number;
  status: string;
  result: string;
};

const fetcher = async (
  url: string,
  { arg }: { arg: ApiGenerateTextPaylod }
): Promise<string> => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });
  const data: ApiResponse = await res.json();
  if (data.statusCode !== 200 || data.status !== "success") {
    throw new Error("API error");
  }
  return data.result;
};

const useApiGenerateText = () => {
  return useSWRMutation<string, Error, string, ApiGenerateTextPaylod>(
    "/api/generate/text",
    fetcher
  );
};
export default useApiGenerateText;
