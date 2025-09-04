import { PostItem } from '@src/types';
import { members } from '@members';
import posts from '@.contents/posts.json';
import { config } from '@site.config';

export function getMemberByName(name: string) {
  return members.find((member) => member.nickname === name);
}

export function getMemberById(id: string) {
  return members.find((member) => member.id === id);
}

export function getMemberPostsById(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}
export function getMemberPostsByName(name: string) {
  return (posts as PostItem[]).filter((item) => item.authorName === name);
}
export function getHostFromURL(str: string) {
  const url = new URL(str);
  return url?.hostname || 'blog';
}
export function getFaviconSrcFromHostname(hostname: string) {
  return `https://www.google.com/s2/favicons?domain=${hostname}`;
}
export function getMemberPath(id: string) {
  return `/members/${encodeURIComponent(id)}`;
}
export function getPathnameFromAccess() {
  var pathname = typeof window !== 'undefined' ? location.pathname : ''
  return pathname;
}
export function getTitleFromPathname() {
  if (getPathnameFromAccess() === '/') {
    return config.topMeta.title;
  } else {
    return config.siteMeta.title;
  }
}
export function getPathFromPathname() {
  if (getPathnameFromAccess() === '/') {
    return config.topMeta.path;
  } else {
    return config.siteMeta.path;
  }
}
export function getLogoTextFromPathname() {
  if (getPathnameFromAccess() === '/') {
    return 'Blogs';
  } else {
    return 'Creators Blog';
  }
}
export function getOgImageFromPathname() {
  if (getPathnameFromAccess() === '/') {
    return config.topMeta.ogImage;
  } else {
    return config.siteMeta.ogImage;
  }
}