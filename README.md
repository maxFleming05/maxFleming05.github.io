# Maxwell Fleming’s website

[Open the interactive portfolio](https://maxfleming05.github.io/)

`index.html` is the homepage and `portfolio.html` is a downloadable, self-contained copy of the interactive portfolio with the illustrated workspace, five projects covering game design and analytics, including the ongoing Unity prototype After Hours, a split-screen Research reader on the notebook for the DDEINT paper submitted to IPDPS 2027, an About panel, a clickable controller with Maxwell’s favorite games, a clickable blanket with Maxwell’s Whitman Sweets ultimate frisbee and captaincy section, and embedded contact-redacted documents. It works as a downloaded file without installation.

The former homepage is preserved as `projects.md`, available at `/projects.html` through the “Earlier projects” link. Its previous project links and `roadTripBox.html` remain available.

Supporting files:

- `portfolio-assets/workspace.png`: current room illustration based on Maxwell’s room reference.
- `portfolio-assets/room-preview.png`: screenshot of the finished portfolio.
- `documents/Maxwell-Fleming-Resume.pdf`: contact-redacted resume.
- `documents/Maxwell-Fleming-Recommendation.pdf`: contact-redacted recommendation.

To update projects or profile links, edit `const PORTFOLIO` in `index.html` and synchronize `portfolio.html`. The image and documents are embedded in the HTML; supporting files are included as standalone copies. Both documents remove private contact details from their previews, text views, and PDF downloads. The original room photograph and original unredacted PDFs are not included.

The Research reader shows all eight paper pages alongside an independently scrolling summary. It includes zoom, a text transcript, and the original submission PDF in `documents/DDEINT-Research-Submission.pdf`. The homepage loads page previews from `documents/ddeint/` when the reader opens. The downloadable `portfolio.html` and the local output HTML embed the paper and previews for offline use.

## Editing the writing on GitHub

1. Open `index.html` in this repository and click the pencil icon to edit it.
2. Search for `const PORTFOLIO` and then `projects:` to find project writing. Change the text inside fields such as `title`, `description`, `question`, `contribution`, `outcome`, and `artifacts`. Keep the surrounding quotes, commas, and brackets. Use `\"` for quotation marks within a text string.
3. Search for `renderAbout` to edit the About text, or `renderResearch` for the research summary.
4. Commit your changes to `main`. GitHub Pages publishes the homepage automatically after its build finishes.
5. Make the same writing changes in `portfolio.html` to keep the downloadable offline copy consistent. Do not copy the entire homepage over it: the offline copy embeds additional research assets.

The long embedded image and PDF strings do not need editing when changing the writing.
