import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Label } from "../issues/interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels');
  return data;
}

export const useLabels = () => {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      // staleTime: (1000 * 60) * 60
      // placeholderData: [
      //   {
      //     id: 4884403361,
      //     node_id: "LA_kwDOAbrxp88AAAABIyIUoQ",
      //     url: "https://api.github.com/repos/facebook/react-native/labels/:open_umbrella:%20Umbrella",
      //     name: ":open_umbrella: Umbrella",
      //     color: "F5A351",
      //     default: false,
      //     description: "To label issues that serve as coordination point and drivers for tasks in the react-native repo",
      //   }
      // ]
    }
  );

  return labelsQuery;

}
