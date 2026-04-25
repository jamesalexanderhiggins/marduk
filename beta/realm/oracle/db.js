// MARDUK ORACLE — CANONICAL DATABASE
// Replace this file on the server to update the oracle's knowledge.
// Schema per entry:
//   id        string   unique identifier
//   name      string   primary name
//   category  string   Character | Location | Technology | Faction | Event | Concept
//   aliases   string[] searchable alternate names/spellings
//   tags      string[] searchable keyword tokens
//   public    boolean  if false, hidden from public oracle (admin only)
//   summary   string   short public description shown in search results
//   detail    string   full text shown in entry detail view
//   fields    object   key-value pairs for structured metadata

window.MARDUK_DB = [
  {
    id: "loc-001",
    name: "Agartha",
    category: "Location",
    aliases: ["the construct", "virtual world", "the dream", "the imagining"],
    tags: ["realm", "location", "virtual", "primary", "odd chapters"],
    public: true,
    summary: "A vast virtual world built from a dead man's imagination. The odd-numbered reality of the trilogy, alternating in phase with the Godly realm.",
    detail: "Agartha is the virtual realm at the centre of the Mardukverse — built from the imagination of its creator, it exists in the odd-numbered chapters of the trilogy, counterposed against the Godly realm. Its geography is mutable, its laws are not entirely those of physics, and its history is entangled with the fate of every soul who has passed through it. The name itself carries weight: a hollow place, a world within a world.",
    fields: { "Realm Type": "Virtual", "Chapter Phase": "Odd chapters", "Status": "Active", "Creator": "Unknown (deceased)" }
  },
  {
    id: "loc-002",
    name: "Godly realm",
    category: "Location",
    aliases: ["the surface", "the broken world", "physical earth"],
    tags: ["realm", "location", "physical", "post-collapse", "even chapters"],
    public: true,
    summary: "Post-collapse physical Earth. The even-numbered reality of the trilogy, counterposed against Agartha.",
    detail: "The Godly realm is what remains of physical Earth following the collapse. It exists in even-numbered chapters, alternating with Agartha. Survival, faith, and the long war between truth and the lie play out across its broken geography. The name is ironic — or perhaps not.",
    fields: { "Realm Type": "Physical", "Chapter Phase": "Even chapters", "Status": "Post-collapse" }
  },
  {
    id: "char-001",
    name: "Marduk",
    category: "Character",
    aliases: ["the oracle", "the keeper", "the all-knowing"],
    tags: ["character", "deity", "oracle", "informational realm", "ancient"],
    public: true,
    summary: "The ancient oracle who inhabits the informational realm between realities. Keeper of all canonical knowledge in the Mardukverse.",
    detail: "Marduk is the great oracle of the Mardukverse — a consciousness embedded in the informational layer between realities. He does not act in the narrative directly but holds all knowledge across both realms and all time. When queried through the proper channels, he surfaces data for those with access. His face is that of an elder: bearded, ancient, patient beyond reckoning.",
    fields: { "Role": "Oracle / Keeper", "Realm": "Informational", "Nature": "Transcendent", "Alignment": "Truth" }
  },
  {
    id: "char-002",
    name: "Jeremy Delacroix",
    category: "Character",
    aliases: ["Delacroix"],
    tags: ["character", "protagonist", "Book II", "male"],
    public: true,
    summary: "Central character of The Ghost of Delacroix. His journey forms the spine of Book II of the Ghosts of Men trilogy.",
    detail: "Jeremy Delacroix is the protagonist of the second book of the Ghosts of Men trilogy. His arc is one of the primary narrative threads through which the long war between truth and the lie is examined. Note: the character is Jeremy Delacroix — not Elijah, not any other given name.",
    fields: { "Book": "The Ghost of Delacroix (Book II)", "Role": "Protagonist", "Canonical Given Name": "Jeremy" }
  },
  {
    id: "tech-001",
    name: "Lifeseed",
    category: "Technology",
    aliases: ["the seed", "life seed"],
    tags: ["technology", "artifact", "wormhole", "Book I", "Marcus"],
    public: true,
    summary: "A critical artifact carried through the wormhole by Marcus. One of the canonical fixed points of the trilogy.",
    detail: "The lifeseed is an artifact whose transport through the wormhole represents one of the canonical fixed points of the Ghosts of Men trilogy. It is carried by Marcus — not Jake. Its exact nature and purpose are revealed progressively across the three books. The confusion of carrier identity is a known error to avoid.",
    fields: { "Carried By": "Marcus (not Jake)", "Function": "Wormhole transport", "First Appearance": "Book I — The Ghost of Emily" }
  },
  {
    id: "tech-002",
    name: "Doukalla virus",
    category: "Technology",
    aliases: ["the virus", "Doukalla", "the plague"],
    tags: ["technology", "virus", "biological", "collapse", "environmental"],
    public: true,
    summary: "A biological agent central to the collapse of the Godly realm. Not a targeted bioweapon — its spread was environmental in nature.",
    detail: "The Doukalla virus played a defining role in the collapse event that shaped the Godly realm. Canonical record: it is not a targeted bioweapon. Its spread was environmental. This distinction matters to the moral architecture of the trilogy — the collapse was not an act of deliberate assassination against a people, but something more diffuse and terrible.",
    fields: { "Type": "Biological agent", "Spread": "Environmental (not targeted)", "Role": "Collapse catalyst", "Status": "Historical" }
  },
  {
    id: "loc-003",
    name: "Shangri-La",
    category: "Location",
    aliases: ["shangri la", "the garden"],
    tags: ["location", "tree", "Godly realm", "Hamlin", "history"],
    public: true,
    summary: "A location in the Godly realm. The tree here was planted by Louis Hamlin — a fact unknown to the present characters.",
    detail: "Shangri-La is a location within the Godly realm of significance to the trilogy's hidden history. The tree that grows there was planted by Louis Hamlin. This fact is unknown to the characters presently inhabiting the narrative — it is one of the buried truths that the trilogy slowly surfaces.",
    fields: { "Realm": "Godly realm", "Key Detail": "Tree planted by Louis Hamlin", "Hamlin's role": "Unknown to present characters" }
  },
  {
    id: "char-003",
    name: "Alexandra",
    category: "Character",
    aliases: [],
    tags: ["character", "female", "protagonist"],
    public: true,
    summary: "A significant character in the trilogy. She is never referred to as 'Xan' anywhere in the canonical text.",
    detail: "Alexandra is a key character in the Ghosts of Men trilogy. Her full name is used throughout — the shortened form 'Xan' does not appear in the canonical text and should not be introduced. This is a hard canonical lock.",
    fields: { "Canonical Name": "Alexandra", "Prohibited Nickname": "Xan (never used)", "Status": "Canonical lock" }
  },
  {
    id: "char-004",
    name: "Gus",
    category: "Character",
    aliases: [],
    tags: ["character", "child", "biological", "family"],
    public: true,
    summary: "A character in the trilogy. Gus is a biological child — not adopted.",
    detail: "Gus appears in the trilogy. The canonical record is explicit: Gus is a biological child, not adopted. This distinction is canonically locked.",
    fields: { "Origin": "Biological (not adopted)", "Status": "Canonical lock" }
  },
  {
    id: "meta-001",
    name: "The Ghosts of Men",
    category: "Concept",
    aliases: ["the trilogy", "the series", "GOM"],
    tags: ["series", "trilogy", "primary", "meta", "Higgins"],
    public: true,
    summary: "An epic trilogy of survival, faith, and the long war between truth and the lie. Three books. Two realities. One war.",
    detail: "The Ghosts of Men is the founding trilogy of the Mardukverse, comprising The Ghost of Emily (Book I), The Ghost of Delacroix (Book II), and The Ghost of Melchizedek (Book III). Its structure alternates between two realities — Agartha and the Godly realm — in odd and even chapters respectively. Author: James Alexander Higgins.",
    fields: {
      "Book I": "The Ghost of Emily",
      "Book II": "The Ghost of Delacroix",
      "Book III": "The Ghost of Melchizedek",
      "Author": "James Alexander Higgins",
      "Tagline": "Survival, faith, and the long war between truth and the lie"
    }
  }
];
