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

## After Hours feature

After Hours is the full-width featured project above four smaller project cards, arranged in two columns on desktop and one on mobile. Its detail view contains the full case study, a section menu, and horizontally scrollable comparison tables on narrow screens.

The cleaned Markdown reference is `content/after-hours.md`. The displayed case-study HTML is in the readable `AFTER_HOURS_ARTICLE` constant in `index.html` and `portfolio.html`; edit those constants together when changing the full story. The short tile description, metrics, and tags remain in the After Hours entry in `PORTFOLIO.projects`. Updating the Markdown reference alone does not change the live story.

Private contact details use readable masks instead of black bars in both documents: the resume shows `m**@*.com` and `425-*-***`, the recommendation uses the same style, and the resume location is shown as “Location withheld.” The original contact text and links are excluded from the public PDFs.

## After Hours media

The featured project includes Rook and Bunny images that open the defender and enemy showcases. The case study has two selectable model viewers and a Fireman ladder-placement video beneath “Walls that can be broken.” The Bunny, Chick, and Helicopter inline clips under the art-pass description are omitted.

`media/after-hours/` contains 13 optimized JPEG posters and 13 silent H.264 MP4 clips. `AFTER_HOURS_MEDIA` in both HTML copies defines their paths and captions. Keep the adjacent media directory with a downloaded `portfolio.html`; the videos use relative files. Clips play on request and pause when another clip starts, when they leave view, or when the panel closes. Original Unity captures are not included in the repository.
