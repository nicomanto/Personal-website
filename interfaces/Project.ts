export default interface Project {
  readonly i18nParam: string;
  readonly imgName: string;
  readonly projectGitHubURL: string;
  readonly projectWebisteURL?: string;
  readonly haveBERole: boolean;
  readonly haveFERole: boolean;
  readonly iconType: string;
}
