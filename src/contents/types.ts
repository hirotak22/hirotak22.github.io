export type Language = "ja" | "en";

export type LinkItem = readonly [label: string, href: string];

export type ProfileContent = {
  readonly name: string;
  readonly affiliation: string;
  readonly laboratory: string;
  readonly laboratoryLink: string;
  readonly position: string;
  readonly email: string;
  readonly links: readonly LinkItem[];
};

export type ResearchWork = {
  readonly authors: string;
  readonly journal: string;
  readonly year: string;
  readonly href: string;
};

export type ResearchTopic = {
  readonly title: string;
  readonly description: string;
  readonly works: readonly ResearchWork[];
};

export type BiographyItem = {
  readonly period: string;
  readonly affiliation: string;
};

export type Publication = {
  readonly year: string;
  readonly title: string;
  readonly authors: string;
  readonly journal: string;
  readonly link: string;
};

export type Presentation = {
  readonly year: string;
  readonly detail: string;
  readonly type: string;
  readonly note?: string;
};

export type ActivitySection = {
  readonly title: string;
  readonly rows: readonly (readonly string[])[];
};

export type SiteContent = {
  readonly language: Language;
  readonly siteName: string;
  readonly description: string;
  readonly alternateLabel: string;
  readonly contentLabel: string;
  readonly sectionLabel: string;
  readonly labels: {
    readonly profile: string;
    readonly email: string;
    readonly links: string;
    readonly lastUpdated: string;
  };
  readonly headings: {
    readonly research: string;
    readonly biography: string;
    readonly publications: string;
    readonly presentations?: string;
    readonly activities: string;
  };
  readonly profile: ProfileContent;
  readonly lastUpdated: string;
  readonly researchTopics: readonly ResearchTopic[];
  readonly biographyItems: readonly BiographyItem[];
  readonly activities: readonly ActivitySection[];
};
