import { useQuery } from "@tanstack/react-query"
import { IssueResponse } from "../issues/interfaces"
import { githubApi } from "../api/githubApi"

export const useIssue = (issueNumber: number) => {

  const getIssueInfo = async (issueNumber: number): Promise<IssueResponse> => {
    const { data } = await githubApi.get<IssueResponse>(`issues/${issueNumber}`)
    return data;
  }

  const getIssueComments = async (issueNumber: number): Promise<IssueResponse> => {
    const { data } = await githubApi.get<IssueResponse>(`issues/${issueNumber}/comments`)
    return data;
  }

  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssueInfo(issueNumber)
  )

  const issueCommentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueNumber),
    {

    }
  )

  return {
    issueQuery,
    issueCommentsQuery
  }
}
