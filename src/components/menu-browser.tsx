"use client";
import { useEffect, useRef, useState } from "react";
import { Search, SlidersHorizontal, X, ArrowUpRight } from "lucide-react";
import { menuTags } from "@/data/menu";
import type { MenuCategory, Tag } from "@/types/menu";
import { money } from "@/lib/price";
import { site } from "@/data/site";
export function MenuBrowser({ categories }: { categories: MenuCategory[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<Tag | null>(null);
  const [active, setActive] = useState(categories[0]?.id);
  const tabs = useRef<HTMLElement>(null);
  const filtered = categories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          (!tag || item.tags?.includes(tag)) &&
          `${item.name} ${item.description || ""}`
            .toLowerCase()
            .includes(query.toLowerCase().trim()),
      ),
    }))
    .filter((c) => c.items.length);
  const effectiveActive = filtered.some((c) => c.id === active)
    ? active
    : filtered[0]?.id;
  const categoryKey = filtered.map((c) => c.id).join(",");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-175px 0px -55% 0px", threshold: 0 },
    );
    document
      .querySelectorAll(".menu-category")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categoryKey]);
  useEffect(() => {
    const current = tabs.current?.querySelector<HTMLAnchorElement>(
      `[href="#${active}"]`,
    );
    if (current && tabs.current) {
      const left = current.offsetLeft - tabs.current.offsetLeft;
      tabs.current.scrollTo({
        left: left - tabs.current.clientWidth / 2 + current.clientWidth / 2,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  }, [active]);
  const count = filtered.reduce((sum, c) => sum + c.items.length, 0);
  return (
    <>
      <div className="menu-tabs-wrap">
        <nav
          className="menu-tabs container"
          aria-label="Menu categories"
          ref={tabs}
        >
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={effectiveActive === c.id ? "active" : ""}
              aria-current={effectiveActive === c.id ? "location" : undefined}
              onClick={() => {
                setQuery("");
                setTag(null);
                setActive(c.id);
              }}
            >
              {c.name}
              <span>{String(c.items.length).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="container menu-content">
        <div className="menu-tools">
          <label className="menu-search">
            <Search size={18} />
            <span className="sr-only">Search the menu</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you craving?"
              type="search"
            />
            {query && (
              <button aria-label="Clear search" onClick={() => setQuery("")}>
                <X size={16} />
              </button>
            )}
          </label>
          <div className="menu-filters" role="group" aria-label="Filter by tag">
            <SlidersHorizontal size={15} />
            <button aria-pressed={tag === null} onClick={() => setTag(null)}>
              All
            </button>
            {menuTags.map((t) => (
              <button
                key={t}
                aria-pressed={tag === t}
                onClick={() => setTag(tag === t ? null : t)}
              >
                {t.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
        <p className="results-count" aria-live="polite">
          {query || tag
            ? `${count} dishes found`
            : `${count} reasons to come hungry.`}
        </p>
        <div className="menu-layout">
          <div>
            {filtered.map((category, index) => (
              <section
                className="menu-category"
                id={category.id}
                key={category.id}
              >
                <div className="category-heading">
                  <span className="category-index">
                    {String(
                      categories.findIndex((c) => c.id === category.id) + 1,
                    ).padStart(2, "0")}
                  </span>
                  <h2>{category.name}</h2>
                  <span className="category-count">
                    {category.items.length}{" "}
                    {category.items.length === 1 ? "ITEM" : "ITEMS"}
                  </span>
                </div>
                {category.note && (
                  <p className="category-note">{category.note}</p>
                )}
                <div className="menu-grid">
                  {category.items.map((item) => (
                    <article key={item.id} className="menu-item">
                      <div className="item-heading">
                        <h3>
                          {item.name}
                          {item.featured && (
                            <span className="favorite-label">
                              HOUSE FAVORITE
                            </span>
                          )}
                        </h3>
                        {item.price !== undefined && (
                          <strong className="item-price">
                            {money(item.price)}
                          </strong>
                        )}
                      </div>
                      {item.description && <p>{item.description}</p>}
                      {item.options && (
                        <div className="price-options">
                          {item.options.map((o) => (
                            <span key={o.label}>
                              <span>{o.label}</span>
                              <strong>{money(o.price)}</strong>
                            </span>
                          ))}
                        </div>
                      )}
                      {item.priceNote && (
                        <p className="price-note">{item.priceNote}</p>
                      )}
                      {item.addOns && (
                        <div className="add-ons">
                          {item.addOns.map((a) => (
                            <span key={a}>{a}</span>
                          ))}
                        </div>
                      )}
                      {item.tags && (
                        <div className="item-tags">
                          {item.tags.map((t) => (
                            <span key={t} className={`tag tag-${t}`}>
                              {t.replace("-", " ")}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
                {index === 0 && (
                  <div className="small-menu-note">
                    A little something to get the table talking.
                  </div>
                )}
              </section>
            ))}
            {count === 0 && (
              <div className="empty-state">
                <h2>No bites found.</h2>
                <p>Try another search or clear your filters.</p>
                <button
                  className="button"
                  onClick={() => {
                    setQuery("");
                    setTag(null);
                  }}
                >
                  Show full menu
                </button>
              </div>
            )}
          </div>
          <aside className="menu-aside">
            <span className="eyebrow">YOUR TABLE IS WAITING</span>
            <h3>
              COME HUNGRY.
              <br />
              LEAVE HAPPY.
            </h3>
            <p>
              Lunch, dinner, or just because. There’s always something good
              around the corner.
            </p>
            <a href={site.tel} className="text-link">
              {site.phone}
              <ArrowUpRight size={14} />
            </a>
            <hr />
            <span className="eyebrow">MAKE IT YOURS</span>
            <p>
              Bring your favorite bottle.
              <br />
              We’re proudly B.Y.O.B.
            </p>
            <span className="aside-stamp">
              EST.<strong>2016</strong>PITTSTON, PA
            </span>
          </aside>
        </div>
      </div>
    </>
  );
}
