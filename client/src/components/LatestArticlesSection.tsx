import React from "react";

type Post = {
  title: string;
  href: string;
  category: string;
  readTime: string;
  image: {
    alt: string;
    src: string;
    srcSet?: string;
    width?: number;
    height?: number;
  };
  author?: {
    name: string;
    title?: string;
    avatar: {
      alt: string;
      src: string;
      srcSet?: string;
      width?: number;
      height?: number;
    };
  };
  excerpt?: string;
};

const latestPosts: Post[] = [
  {
    title:
      "How to add Superside as a preferred source for better design news ",
    href: "/blog/superside-preferred-source-design-news",
    category: "Superside News",
    readTime: "5 min read",
    image: {
      alt: "How to add Superside as a preferred source for better design news ",
      src: "https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=1188",
      srcSet:
        "https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=297 297w, https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=594 594w, https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=891 891w, https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=1188 1188w, https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=1782 1782w, https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png?auto=format&fit=max&q=100&w=2376 2376w",
      width: 1188,
      height: 669,
    },
    author: {
      name: "Emanuel Rojas Otero",
      title: "Content Specialist",
      avatar: {
        alt: "Emanuel Rojas Otero",
        src: "https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png?auto=format&fit=max&q=100&w=540",
        srcSet:
          "https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png?auto=format&fit=max&q=100&w=270 270w, https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png?auto=format&fit=max&q=100&w=540 540w, https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png?auto=format&fit=max&q=100&w=810 810w, https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png?auto=format&fit=max&q=100&w=1080 1080w",
        width: 540,
        height: 540,
      },
    },
    excerpt:
      "Read how can you add Superside to your Google's preferred sources to get the top news on design, AI creative and more with just one click!",
  },
  {
    title:
      "7 Ways Lloyds Built a Design System Teams Actually Want to Use",
    href: "/blog/7-ways-lloyds-built-a-design-system-teams-actually-want-to-use",
    category: "Design Inspiration",
    readTime: "10 min read",
    image: {
      alt: "7 Ways Lloyds Built a Design System Teams Actually Want to Use",
      src: "https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=1934",
      srcSet:
        "https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=484 484w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=967 967w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=1451 1451w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=1934 1934w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=2418 2418w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=2901 2901w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=3385 3385w, https://cdn.sanity.io/images/k0dlbavy/production/8bf44586fc348032aedc6bd87cf6d10fea662683-3868x1442.png?auto=format&fit=max&q=100&w=3868 3868w",
      width: 1934,
      height: 721,
    },
    author: {
      name: "Team Superside",
      title: "An extension of your in-house team",
      avatar: {
        alt: "Team Superside",
        src: "https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=954",
        srcSet:
          "https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=239 239w, https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=477 477w, https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=716 716w, https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=954 954w, https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=1431 1431w, https://cdn.sanity.io/images/k0dlbavy/production/e91a49bf45fd0d02425aafb5cd33f1bf6a1162b0-1908x1932.png?auto=format&fit=max&q=100&w=1908 1908w",
        width: 954,
        height: 966,
      },
    },
  },
  {
    title: "New: Manage teams and budgets in Superspace",
    href: "/blog/new-manage-teams-and-budgets-in-superspace",
    category: "Superside News",
    readTime: "5 min read",
    image: {
      alt: "New: Manage teams and budgets in Superspace",
      src: "https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=792",
      srcSet:
        "https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=198 198w, https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=396 396w, https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=594 594w, https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=792 792w, https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=1188 1188w, https://cdn.sanity.io/images/k0dlbavy/production/9837942667050dcad5629e86c5d0e8595fda981b-1584x892.png?auto=format&fit=max&q=100&w=1584 1584w",
      width: 792,
      height: 446,
    },
    excerpt:
      "Assign monthly budgets to individual teams, move funds on the fly, and get detailed usage data in Superspace. Here's how.",
  },
];

export function LatestArticlesSection() {
  return (
    <section
      className="relative transition-colors bg-transparent"
      data-testid="pageSection"
      aria-label="Latest articles"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 768:px-8 1280:px-0">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex items-center justify-between pb-8">
            <div className="flex items-center gap-4">
              <h2 className="font-heading tracking-[0.1px] text-bor-2xl md:text-bor-4xl lg:text-bor-4xl xl:text-bor-7xl">
                Latest articles
              </h2>
            </div>
            <a href="/blog/all" className="inline-flex">
              <button className="group/button overflow-hidden rounded-surface font-semibold text-center text-bor-foreground relative flex flex-row items-center gap-1 text-sm transition-all">
                <span className="flex items-center justify-center gap-2">
                  <span>See All</span>
                  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true">
                      <rect width="256" height="256" fill="none"></rect>
                      <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                    </svg>
                  </span>
                </span>
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, idx) => (
              <article key={idx} className="flex flex-col relative pb-4 768:pb-8">
                <div className="relative mb-6 max-w-full overflow-hidden rounded-lg">
                  <a href={post.href} aria-label={post.title}>
                    <img
                      alt={post.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover rounded-lg transition-transform duration-500"
                      src={post.image.src}
                      srcSet={post.image.srcSet}
                      width={post.image.width}
                      height={post.image.height}
                    />
                  </a>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <span className="text-bor-sm 1280:text-bor-base uppercase font-semibold tracking-15">
                    {post.category}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-dark" aria-hidden="true"></div>
                  <span className="text-bor-base 1280:text-bor-lg">{post.readTime}</span>
                </div>

                <div className="mb-6 768:mb-10">
                  <a href={post.href} className="group relative before:absolute before:inset-0">
                    <h3 className="font-heading tracking-[0.1px] text-bor-xl md:text-bor-2xl lg:text-bor-2xl xl:text-bor-2xl mt-3 mb-2 line-clamp-2">
                      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-bottom-left bg-no-repeat transition-[background] duration-500" style={{ backgroundSize: "0% 2px" }}>
                        {post.title}
                      </span>
                    </h3>
                  </a>
                  {post.excerpt && (
                    <span className="text-bor-base 1280:text-bor-lg line-clamp-2">
                      {post.excerpt}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex flex-row items-center gap-3">
                  {post.author?.avatar && (
                    <div className="flex h-12 w-12 1024:h-14 1024:w-14 overflow-hidden rounded-lg">
                      <img
                        alt={post.author.avatar.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover"
                        src={post.author.avatar.src}
                        srcSet={post.author.avatar.srcSet}
                        width={post.author.avatar.width}
                        height={post.author.avatar.height}
                      />
                    </div>
                  )}
                  <div className="flex shrink flex-col gap-1 text-xs leading-6 md:text-base">
                    {post.author?.name && (
                      <span className="font-semibold">{post.author.name}</span>
                    )}
                    {post.author?.title && <span>{post.author.title}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestArticlesSection;

