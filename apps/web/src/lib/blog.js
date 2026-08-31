const markdownModules = Object.entries(
  import.meta.glob('../../content/blog/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
  })
).map(([path, raw]) => {
  const fileName = path.split('/').pop().replace(/\.md$/, '');
  return { slug: fileName, raw: typeof raw === 'string' ? raw : '' };
});

function parseFrontmatter(raw) {
  if (!raw || typeof raw !== 'string') return { data: {}, content: '' };

  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const [, frontmatter, content] = match;
  const data = {};

  for (const line of frontmatter.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return { data, content };
}

export const blogPosts = markdownModules
  .filter(({ raw }) => typeof raw === 'string' && raw.trim())
  .map(({ slug, raw }) => {
    const { data, content } = parseFrontmatter(raw);

    return {
      slug: data.slug || slug,
      title: data.title,
      description: data.description,
      category: data.category,
      content,
    };
  });

export const allBlogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
