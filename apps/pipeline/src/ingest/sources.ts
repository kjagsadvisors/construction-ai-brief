// Seed list of sources for the content lake.
// Add/remove freely; ingest workers iterate this file.

export const RSS_SOURCES: { name: string; url: string }[] = [
  { name: "Construction Dive", url: "https://www.constructiondive.com/feeds/news/" },
  { name: "ENR", url: "https://www.enr.com/rss/topic/2596-construction" },
  { name: "BD+C", url: "https://www.bdcnetwork.com/rss.xml" },
  { name: "AEC Magazine", url: "https://aecmag.com/feed/" },
  { name: "ArchDaily Tech", url: "https://www.archdaily.com/category/technology/feed" },
  { name: "Autodesk Construction Cloud blog", url: "https://construction.autodesk.com/blog/feed/" },
  { name: "Procore blog", url: "https://www.procore.com/jobsite/feed/" },
  { name: "Trimble blog", url: "https://constructible.trimble.com/rss.xml" },
];

export const EXA_QUERIES: string[] = [
  "AI for construction contractors",
  "construction AI software launch",
  "AEC AI startup funding",
  "AI submittals construction",
  "AI bid leveling estimating",
  "construction generative AI workflow",
  "contech AI tool review",
];

export const ARXIV_QUERIES: string[] = [
  "construction automation",
  "BIM machine learning",
  "AEC large language model",
  "construction safety computer vision",
];

export const YOUTUBE_CHANNELS: string[] = [
  // BILT, AU, ENR FutureTech, AEC Next — channel IDs filled in during setup.
];
