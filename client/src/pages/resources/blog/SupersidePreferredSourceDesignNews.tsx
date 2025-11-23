import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SupersidePreferredSourceDesignNews() {
  const meta = {
    title:
      "How to add Superside as a preferred source for better design news",
    description:
      "Add Superside to your preferred sources and get top news on design, AI creative and more with one click.",
    image:
      "https://cdn.sanity.io/images/k0dlbavy/production/047d283623a7b51c7eb296d2b82612cb6cd0dec8-2376x1338.png",
    author: "Emanuel Rojas Otero",
    authorAvatar:
      "https://cdn.sanity.io/images/k0dlbavy/production/e7debad920fdb6404a1bc2c360c9ac4ae316d232-1080x1080.png",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "Superside News",
  };

  return (
    <>
      <Helmet>
        <title>{meta.title} | DIGITELLER CREATIVE</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={meta.author} />
        <meta property="article:section" content={meta.category} />
      </Helmet>

      <Navigation />

      <article className="bg-background text-foreground">
        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
          <div className="mb-6">
            <Link href="/blog">
              <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {meta.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {meta.title}
          </h1>

          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{meta.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={meta.date}>
                {new Date(meta.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{meta.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="overflow-hidden rounded-xl border bg-card">
            <img
              alt={meta.title}
              loading="lazy"
              className="w-full object-cover"
              style={{ objectPosition: "center" }}
              src={meta.image}
              srcSet={`${meta.image}?w=768 768w, ${meta.image}?w=1280 1280w, ${meta.image}?w=1920 1920w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
              decoding="async"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-neutral dark:prose-invert">
          {/* Placeholder content: replace with provided HTML when available */}
          <p>
            Read how you can add Superside to your Google preferred sources to
            get the top news on design, AI creative and more with just one
            click. Follow the steps below to keep your feed curated with the
            best design insights.
          </p>
          <h2>Why add Superside as a preferred source?</h2>
          <ul>
            <li>Consistently high-quality coverage of design and AI creative</li>
            <li>Actionable insights for marketing and design leaders</li>
            <li>Events, tool updates, and inspirational case studies</li>
          </ul>
          <h2>Quick steps</h2>
          <ol>
            <li>Open Google News or your preferred news app</li>
            <li>Search for “Superside”</li>
            <li>Open the Superside publisher page</li>
            <li>Select “Follow” or “Add to preferred sources”</li>
          </ol>
          <p>
            That’s it—your feed will now prioritize Superside updates alongside
            your other trusted sources.
          </p>

          {/* Author */}
          <div className="mt-12 flex items-center gap-4 border-t pt-6">
            <img
              src={meta.authorAvatar}
              alt={meta.author}
              className="h-12 w-12 rounded-lg object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="text-sm">
              <div className="font-semibold">{meta.author}</div>
              <div className="text-muted-foreground">Content Specialist</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border bg-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-semibold">
                Enjoying our content?
              </h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to The Creative Brief and get top stories in your inbox.
              </p>
            </div>
            <Link href="/blog">
              <a className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
                Explore more articles
              </a>
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  );
}


