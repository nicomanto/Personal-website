export default interface ProjectCard {
  readonly i18nParam: string;
  readonly imgName: string;
  readonly projectGitHubURL: string;
  readonly projectWebisteURL?: string;
  readonly haveBERole: boolean;
  readonly haveFERole: boolean;
}
