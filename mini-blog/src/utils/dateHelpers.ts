const ONE_DAY_MS = 24 * 60 * 60 * 1000

// returns a date string for the specified number of hours ago
export function hoursAgo(hours: number): string {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()
}
// returns true if the post was published within the last 24 hours
export function isNewPost(datePosted: string): boolean {
  const age = Date.now() - new Date(datePosted).getTime()
  return age >= 0 && age < ONE_DAY_MS
}
// returns a formatted date string for the given date
export function formatDate(datePosted: string): string {
  return new Date(datePosted).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function getPreview(content: string, wordCount = 8): string {
  const words = content.trim().split(/\s+/)
  if (words.length <= wordCount) {
    return content
  }
  return words.slice(0, wordCount).join(' ') + '...'
}