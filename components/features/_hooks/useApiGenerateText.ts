import useSWRMutation from 'swr/mutation';

export type ApiGenerateTextPaylod = {
  prompt: string;
};

type ApiResponse = {
  statusCode: number;
  status: string;
  result: string;
};

/**
 * Fetcher function for useSWRMutation.
 *
 * Makes a POST request to the given url with the given payload,
 * and returns the result as a string.
 *
 * @param {string} url The URL to make the request to
 * @param {object} options The options object
 * @param {ApiGenerateTextPaylod} options.arg The payload to send
 * @returns {Promise<string>} The result of the request
 */
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

/**
 * Makes a POST request to the text generation API with the given payload,
 * and returns the generated text as a string.
 *
 * @returns {object} The result of the request. The object has the following
 * properties:
 *   - trigger: A function that makes the request. It takes the payload as an
 *     argument and returns a promise that resolves to the result.
 *   - data: The result of the request. It is an empty string until the request
 *     is made and resolved.
 *   - error: An error object if the request fails. It is null until the request
 *     is made and fails.
 *   - isMutating: A boolean that is true while the request is in progress, and
 *     false when the request is not in progress.
 */
const useApiGenerateText = () => {
  return useSWRMutation<string, Error, string, ApiGenerateTextPaylod>(
    "/api/generate/text",
    fetcher
  );
};
export default useApiGenerateText;
