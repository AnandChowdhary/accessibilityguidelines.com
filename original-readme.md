# Accessibility Guidelines

I've wanted to write my own style guide since a few years. I usually adhere to the Chicago Manual of Style, but there are still some places where we end up disagreeing. Now that I work at [Oswald Labs](https://oswaldlabs.com), an accessibility technology company, I thought that it would be a great idea to write universal accessibiliy and design guidelines, which should be thorough yet easy to implement.

### Mission
1. It should cover all aspects of web design, from typography to images to futuristic assistive technology.
2. It should never be *complete*, it should always be evolving (that's why Github is the perfect place for it.)
3. It should have code samples to make web implementation easy.

## Progress

The first step is to make a list of topics we'd like to cover, and then links to articles and independent research/sources about each of them. Using all of this will we be able to write the guidelines. **Throw in a pull request to contribute.**

### Topics to Cover

- Text contrast ratios, sizes and weights, AA/AAA
- Link underlines, tooltips, focus states
- Alt text for images, accessible SVGs
- Color blindness, dyslexia, *Agastya* incorporation
- Using correct elements, eg. <address> and <time>, accessibility tree
- Keyboard navigation, “skip to content”
- ARIA attributes, SEO meta tags, etc.
- Semantic tags, eg. blockquote cite
- Adding speech synthesis to all content? Not good, but a case can be made
- 20% reading time Augmenta11y research
- Button text shouldn't be title cased, should be sentence cased; manual of style
- Smart quotes, manual of style, implementation guide (smartquotes.js or Hugo Markdown render)
- Translation?
- Don't use flag icons for languages, what about currencies?
  - Primark employee badges have little flags for languages (works well)
  - Flixbus website has a globe icon for English plus flag icons
- Use input autocomplete attributes for autocomplete and for password managers (see docs)=
- :focus-visible
  
### Books
- O'Reilly
- Smashing Inclusive Design
...

### Articles

**https://www.w3.org/TR/WCAG/**

#### General Accessibility

- https://soap.stanford.edu/
- https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Accessibility
- https://soap.stanford.edu/tips-and-tools/tips
- http://accessibility.voxmedia.com/
- http://www.washington.edu/accessibility/guidelines/
- https://blog.prototypr.io/designing-for-accessibility-the-ultimate-in-ux-e366165d0db7#.93oaii7f8
- https://blog.prototypr.io/the-beginner-s-guide-to-accessible-mobile-ui-design-ca13a7342c27#.bink0m5bo
- https://blog.prototypr.io/underline-links-usability-ux-and-readability-6ecf894317f3#.2b8u7ehad
- https://blog.prototypr.io/common-accessibility-problems-good-and-bad-examples-in-modern-websites-a13efb7256ad#.lml10bbo1
- https://developer.microsoft.com/en-us/microsoft-edge/tools/staticscan
- http://mrmrs.io/writing/2016/03/23/the-veil-of-ignorance/
- http://www.slideshare.net/jameschandler
- https://davidakennedy.com/2014/10/31/web-accessibility-in-60-seconds/
- https://www.sitepoint.com/popular-mistakes-in-universal-web-design/
- http://universalusability.com/access_by_design/index.html
- http://www.washington.edu/doit/programs/accesscollege/faculty-room/universal-design
- https://www.ncsu.edu/www/ncsu/design/sod5/cud/about_ud/udprinciples.htm

#### Type

- https://www.zachleat.com/web/font-checklist/

#### Lists/Newsletters

- http://www.unimelb.edu.au/accessibility/newsletters
- http://a11yweekly.com/
- http://sidebar.io/?cat=accessibility
- http://web.guidelines.gov.in/

#### UI Elements

- https://medium.com/@addyosmani/accessible-ui-components-for-the-web-39e727101a67#.nrjefpx09
- https://yeun.github.io/open-color/ (beautiful swatches)
- http://wtfhtmlcss.com/ (I want the design to be like this)
- https://css-tricks.com/accessible-svgs/
- http://html5doctor.com/cite-and-blockquote-reloaded/

#### Color blindness

- https://sidigital.co/blog/designing-for-colour-blindness
- https://uxplanet.org/108-million-web-users-are-color-blind-tips-for-designing-keeping-them-in-mind-7be71d0019a9#.jo39t8fwi
- https://medium.com/design-notes/a-tale-of-a-colour-blind-designer-9ac4cda46318#.1zqpck9bo
- https://motherboard.vice.com/read/you-think-popup-ads-are-bad-theyre-even-worse-for-the-blind
- https://www.randoma11y.com/#/?_k=o2jaoj
- http://mrmrs.io/contrast/

#### Tools

- http://wave.webaim.org/ (incredible)
- http://leaverou.github.io/contrast-ratio/
- http://www.etre.com/tools/accessibilitycheck/
- https://www.w3.org/developers/tools/

#### Checklists

- https://dequeuniversity.com/rules/axe/3.0
- **http://www.washington.edu/accessibility/checklist/**
- http://webaim.org/standards/wcag/checklist/
- http://ncdae.org/resources/cheatsheets/accessibility.php
- http://pauljadam.com/wcag20checklist.html
- http://design4access.nomensa.com/checklist.html
- https://www.w3.org/WAI/eval/preliminary
