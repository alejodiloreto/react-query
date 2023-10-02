import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi"
import { IssueResponse } from "../issues/interfaces"

const getIssues = async (): Promise<IssueResponse[]> => {
  const { data } = await githubApi.get<IssueResponse[]>('/issues');
  console.log(data)
  return data;
}

export const useIssuesList = () => {

  const issuesQuery = useQuery(
    ['issues'],
    getIssues
  )

  return {
    issuesQuery
  }
}
