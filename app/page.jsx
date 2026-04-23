import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

async function loadManifesto() {
  const file = path.join(process.cwd(), "content", "manifesto.md");
  const raw = await fs.readFile(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return { meta: data, html: String(processed) };
}

export default async function Page() {
  const { meta, html } = await loadManifesto();
  return (
    <>
      <nav className="navbar">
        <span className="navbar-title">{meta.title}</span>
      </nav>
      <main className="super-content">
        <article className="notion-root">
          <header className="manifesto-header">
            <h1>{meta.title}</h1>
            <h2 className="subtitle">{meta.subtitle}</h2>
            {meta.authors?.map((a, i) => (
              <p key={i} className="author">
                {a.name}, {a.affiliation}
              </p>
            ))}
          </header>
          <div
            className="manifesto-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
    </>
  );
}
