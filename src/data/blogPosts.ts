// Starter blog posts targeting low-competition, artist-intent keywords
// surfaced via Semrush research. Add new posts here — the sitemap
// generator and /blog routes pick them up automatically.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  content: string; // markdown-lite (paragraphs + ## headings + - lists)
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-im-building-art-supply-tracker",
    title: "Why I'm Building Art Supply Tracker: An Art Studio Management App for Artists",
    description:
      "Art Supply Tracker is a new art studio management app for artists who need to track supplies, manage projects, make shopping lists, and protect creative work.",
    keyword: "art studio management app",
    publishedAt: "2026-05-19",
    readingMinutes: 6,
    content: `My art studio should be a beacon of inspiration.

Some days, it is.

Other days, it looks like it is quietly heralding the apocalypse.

Most artists know this feeling. You walk into your studio ready to make something, then spend the next hour looking for the paint, brush, canvas, brayer, sketchbook, ink, medium, or tool you know you own.

Nothing kills creative momentum faster than hunting for the one supply you need right now.

That frustration is exactly why I started building Art Supply Tracker, an art studio management app designed specifically for artists.

## The problem: artists need better studio tools

I wanted something simple.

I needed a way to:

- Track my art supplies
- Know where my materials were stored
- Make shopping lists
- Connect supplies to specific art projects
- Track what I used, what I needed, and what kept disappearing into the void
- Keep better records for artwork, costs, and planning

I looked through apps in the Google Play Store. I searched online. I found inventory apps, project management apps, notes apps, and studio-adjacent tools.

But I could not find the thing I actually wanted.

I did not want three separate apps cobbled together with digital duct tape. I wanted one art studio management system made for the way artists actually work.

So I decided to build it.

## Why art supply inventory matters

Art supplies are not just "stuff."

They are tools, materials, investments, experiments, unfinished ideas, future projects, and sometimes tiny expensive gremlins hiding in drawers.

When artists cannot find what they already own, we lose time, money, and creative energy. We rebuy supplies. We forget what we have. We lose track of what went into a project.

That matters.

An artist should be able to know:

- Which supplies they own
- Where those supplies are stored
- What supplies were used in a project
- How much a project cost to make
- Which supplies need to be replaced
- Which tools and materials are used most
- What should be packed, insured, archived, or documented

Other industries have software that tracks everything.

Artists deserve that too.

## The move that made this urgent

Last May, I had to move everything into storage.

That brought back a very specific kind of dread because the last time I moved, I lost a moving box full of finished paintings and works in progress. I also lost both of my easels and more supplies than I want to think about.

That was not just inconvenient.

It was heartbreaking.

Artists need better ways to document and protect their supplies, tools, projects, and finished work. Not because we are all trying to turn our studios into corporate warehouses, but because our work matters.

Our materials matter.

Our time matters.

## The first prototype

I started vibe coding my own little app.

And it worked.

Sort of.

I built a rough prototype, then kept adjusting it. The more I worked on it, the more I realized this was not just a quick personal tool. It could become something much bigger.

Building Art Supply Tracker started to feel like working on a long-term artwork. I kept refining the shape, the structure, the features, and the purpose.

Then my laptop's hard drive died.

And it took the code with it.

That was not my favorite plot twist.

## The comeback plan

I could have given up.

Instead, I decided to rebuild Art Supply Tracker into a stronger art studio management system for artists, students, hobbyists, classrooms, studios, and working professionals.

The core features I'm building include:

- Art supply inventory
- Art project management
- Shopping lists
- Supply-to-project linking
- Cost tracking
- Time tracking
- Studio organization tools
- Inspiration panels
- Artist-friendly community features
- Privacy-first design for creative work

The goal is not to make artists use rigid business software.

The goal is to give artists practical tools that respect how creative work actually happens.

## Built for artists, not to exploit artists

Artists have been burned by technology over and over again.

That is why privacy matters here.

Art Supply Tracker is being built with a clear promise: the app is not here to steal artwork, train AI on artists' creative work, or turn artists into raw material for someone else's product.

The goal is to help artists organize supplies, plan projects, understand costs, and protect their creative records.

Artists should be able to use modern tools without feeling like the tool is quietly picking their pockets.

## What the demo can do now

The current demo is live for laptops and desktop computers.

Right now, you can:

- Add art supplies
- Add projects
- Link supplies to projects
- Delete supplies and projects

It is still a demo, so please do not add your entire studio inventory yet.

The beta version will include saved accounts and memory. When beta launches, anything beta testers add will carry forward into the full app.

## Why this matters

Artists are doers.

We solve problems with whatever is in reach. We build, repair, reuse, invent, patch, paint, sculpt, stitch, sand, print, glue, and occasionally mutter at the universe until it cooperates.

Art Supply Tracker comes from that same place.

I needed this tool. I could not find it. So I started building it.

If the business world will not make room for artists, we will sculpt, assemble, and paint the room ourselves.

## Try the demo and join the beta

You can try the working desktop demo now, and if you want to help shape the future of artist tools, sign up to be a beta tester.

Your voice, like your art, matters here.

Want the bigger picture? Read [the full story behind ArtSupplyTracker](/about), see [how we protect your studio data](/privacy), or browse [more studio guides on the blog](/blog).

[Join the Beta](/#signup).`,
  },
  {
    slug: "how-to-organize-art-supplies",
    title: "How to Organize Art Supplies: A Studio System That Actually Sticks",
    description:
      "A practical, repeatable system for organizing art supplies — by medium, by project, and by frequency of use — so you spend less time hunting and more time making.",
    keyword: "how to organize art supplies",
    publishedAt: "2026-05-01",
    readingMinutes: 7,
    content: `Every artist hits the same wall: you start a piece, reach for a tube of cadmium red, and ten minutes later you're elbow-deep in a drawer of dried-out markers. Organizing art supplies isn't about being tidy — it's about protecting your creative momentum.

## Start with what you actually use

Before buying a single storage bin, do a 30-minute audit. Pull everything out of one drawer or shelf and sort it into three piles: **use weekly**, **use sometimes**, and **haven't touched in a year**. The third pile is the secret to a working studio — donate, gift, or recycle it.

## Organize by frequency, not by category

The classic mistake is sorting supplies by type ("all paints together, all brushes together"). That looks neat but works against you. Instead:

- **Arm's reach**: tools you use every session — your primary palette, two or three brushes, your sketchbook.
- **One step away**: supplies for your current project or series.
- **Stored**: backups, seasonal mediums, and supplies for techniques you only revisit occasionally.

## Label everything you can't see at a glance

Clear bins beat opaque ones. When you have to use opaque storage, label the front *and* the top — your future self will thank you when you're stacking things mid-project.

## Track quantities, not just locations

Knowing where your titanium white lives is half the battle. Knowing you have *one tube left* is the other half. This is exactly why we built ArtSupplyTracker — so you stop discovering you're out of a critical supply at 9pm on a Sunday.

## Make a "restock list" part of your weekly ritual

Five minutes at the end of each studio week to note what's running low saves the panic order later. Better yet, let an app do it for you.

Ready to stop losing supplies in the chaos? [Join the Beta](/#signup) — ArtSupplyTracker keeps your inventory, locations, and reorder list in one private place.`,
  },
  {
    slug: "art-studio-setup-checklist",
    title: "Art Studio Setup: A No-Nonsense Checklist for Working Artists",
    description:
      "Setting up an art studio? Here's a complete checklist covering lighting, storage, workflow zones, and the small details that separate a functional studio from a frustrating one.",
    keyword: "art studio setup",
    publishedAt: "2026-05-05",
    readingMinutes: 8,
    content: `A great studio doesn't need a huge budget or a converted warehouse. It needs three things working together: **good light, defined zones, and a system for what's inside it.**

## Lighting comes first

Natural north light is the gold standard for painters, but most of us work odd hours. Pair daylight with two adjustable lamps using 5000K bulbs at 90+ CRI. One lights your work surface, the other lights your reference or palette. Skip warm "cozy" bulbs — they will lie to you about color.

## Define three zones

Even in a small space, separate your studio into:

1. **The make zone** — easel, drafting table, or main work surface.
2. **The wet zone** — water source, palette, mediums, anything that might drip.
3. **The dry zone** — paper, sketchbooks, finished work, anything you don't want spattered.

When zones blur, supplies migrate and disappear. Hard boundaries beat good intentions.

## Storage that matches your workflow

Closed storage protects supplies from dust and UV. Open shelving keeps frequently used items visible. Use both — closed for archival and backup, open for daily tools. Vertical wall space is your most underused asset.

## Power, ventilation, and a chair you can sit in for hours

Run extra outlets if you can. Add a small fan or open a window for solvent-based work. And spend real money on a chair — back pain ends studio sessions faster than running out of supplies.

## Build the inventory before you fill the shelves

The day you set up a new studio is the easiest day to log what you own. Every supply gets photographed once, tagged with a location, and you'll never wonder "did I already buy that?" again.

ArtSupplyTracker is built for exactly this moment. [Join the Beta](/#signup) and start your new studio with a clean, searchable inventory from day one.`,
  },
  {
    slug: "how-to-catalog-artwork",
    title: "How to Catalog Artwork: A Simple System for Artists Who Hate Spreadsheets",
    description:
      "A clear, low-effort method for cataloging your artwork — what to record, how to photograph it, and why a good catalog protects your career, your insurance claims, and your sanity.",
    keyword: "how to catalog artwork",
    publishedAt: "2026-05-10",
    readingMinutes: 6,
    content: `Cataloging your artwork sounds like paperwork. It's actually one of the highest-leverage things an artist can do — for insurance, for gallery submissions, for estate planning, and for simply knowing what you've made.

## What to record for every piece

You don't need a museum-grade database. You need these fields, consistently:

- **Title** and **inventory number** (a simple year-based ID like 2026-014 works fine)
- **Medium and substrate** (e.g. "oil on linen")
- **Dimensions** (HxWxD)
- **Year completed**
- **Materials used** (link these to your supply records if you can)
- **Location** (studio, gallery, sold to)
- **Photographs** — at least one straight-on shot in even light, plus detail shots

## Photograph it once, properly

Lay the work flat or hang it square. Use diffuse daylight or two equal-angled lights to eliminate glare. Shoot at the highest resolution your camera offers. Re-shooting later is painful — get it right when the work is fresh.

## Link supplies to artworks

This is the part most catalogs miss. Recording that *Spring Garden, 2026* used a specific batch of pigments protects you if a color fails in five years, helps you reorder a palette you loved, and gives collectors documentation they trust.

## Why it matters for insurance

A loss claim without a catalog is a negotiation. A loss claim with photographs, dimensions, materials, and provenance is a payout. Insurers want documentation; cataloging is how you give it to them.

## Make it a five-minute habit

The trick is catching each piece as it finishes, not letting them pile up. A finished work that sits uncatalogued for six months will probably never be cataloged properly.

ArtSupplyTracker handles artwork records, supply links, and photo storage in one private place — no spreadsheets, no AI training on your art. [Join the Beta](/#signup).`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
