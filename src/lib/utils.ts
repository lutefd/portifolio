import { z } from 'zod';
import type { CollectionEntry } from 'astro:content';
export const ownerSchema = z.object({
  login: z.string(),
  id: z.number(),
  node_id: z.string(),
  avatar_url: z.string(),
  gravatar_id: z.string(),
  url: z.string(),
  html_url: z.string(),
  followers_url: z.string(),
  following_url: z.string(),
  gists_url: z.string(),
  starred_url: z.string(),
  subscriptions_url: z.string(),
  organizations_url: z.string(),
  repos_url: z.string(),
  events_url: z.string(),
  received_events_url: z.string(),
  type: z.string(),
  site_admin: z.boolean(),
});

export const projectSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  owner: ownerSchema,
  html_url: z.string(),
  description: z.string().nullable(),
  fork: z.boolean(),
  url: z.string(),
  forks_url: z.string(),
  keys_url: z.string(),
  collaborators_url: z.string(),
  teams_url: z.string(),
  hooks_url: z.string(),
  issue_events_url: z.string(),
  events_url: z.string(),
  assignees_url: z.string(),
  branches_url: z.string(),
  tags_url: z.string(),
  blobs_url: z.string(),
  git_tags_url: z.string(),
  git_refs_url: z.string(),
  trees_url: z.string(),
  statuses_url: z.string(),
  languages_url: z.string(),
  stargazers_url: z.string(),
  contributors_url: z.string(),
  subscribers_url: z.string(),
  subscription_url: z.string(),
  commits_url: z.string(),
  git_commits_url: z.string(),
  comments_url: z.string(),
  issue_comment_url: z.string(),
  contents_url: z.string(),
  compare_url: z.string(),
  merges_url: z.string(),
  archive_url: z.string(),
  downloads_url: z.string(),
  issues_url: z.string(),
  pulls_url: z.string(),
  milestones_url: z.string(),
  notifications_url: z.string(),
  labels_url: z.string(),
  releases_url: z.string(),
  deployments_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  git_url: z.string(),
  ssh_url: z.string(),
  clone_url: z.string(),
  svn_url: z.string(),
  homepage: z.string().nullable(),
  size: z.number(),
  stargazers_count: z.number(),
  watchers_count: z.number(),
  language: z.string().nullable(),
  has_issues: z.boolean(),
  has_projects: z.boolean(),
  has_downloads: z.boolean(),
  has_wiki: z.boolean(),
  has_pages: z.boolean(),
  has_discussions: z.boolean(),
  forks_count: z.number(),
  mirror_url: z.null(),
  archived: z.boolean(),
  disabled: z.boolean(),
  open_issues_count: z.number(),
  license: z.unknown(),
  allow_forking: z.boolean(),
  is_template: z.boolean(),
  web_commit_signoff_required: z.boolean(),
  topics: z.array(z.any()),
  visibility: z.string(),
  forks: z.number(),
  open_issues: z.number(),
  watchers: z.number(),
  default_branch: z.string(),
});

export type FeaturedProject = z.infer<typeof projectSchema>;

export async function getFeaturedProjects(
  number: 1 | 2 | 3 | 4 | 5 | 6
): Promise<FeaturedProject[]> {
  const res = await fetch(
    'https://api.github.com/users/lutefd/repos?sort=updated'
  ).then((res) => res.json());
  const projects = projectSchema.array().parse(res);
  return projects.slice(0, number);
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function sortPosts(
  posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}
