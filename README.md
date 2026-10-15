# Maxwell Fleming’s website

[Open the interactive portfolio](https://maxfleming05.github.io/)

`index.html` is the homepage and `portfolio.html` is a downloadable, self-contained copy of the interactive portfolio with the illustrated workspace, seven projects covering game design and analytics, including the ongoing Unity prototype After Hours, a split-screen Research reader on the notebook for the DDEINT paper submitted to IPDPS 2027, an About panel, a clickable controller with Maxwell’s favorite games, a clickable blanket with Maxwell’s Whitman Sweets ultimate frisbee and captaincy section, and embedded contact-redacted documents. It works as a downloaded file without installation.

The former homepage is preserved as `projects.md`, available at `/projects.html` through the “Earlier projects” link. Its previous project links and `roadTripBox.html` remain available.

Supporting files:

- `portfolio-assets/workspace.png`: current room illustration based on Maxwell’s room reference.
- `portfolio-assets/room-preview.png`: screenshot of the finished portfolio.
- `documents/Maxwell-Fleming-Resume.pdf`: contact-redacted resume.
- `documents/Maxwell-Fleming-Recommendation.pdf`: contact-redacted recommendation.

To update projects or profile links, edit `const PORTFOLIO` in `index.html` and synchronize `portfolio.html`. The image and documents are embedded in the HTML; supporting files are included as standalone copies. Both documents remove private contact details from their previews, text views, and PDF downloads. The original room photograph and original unredacted PDFs are not included.

The Research reader shows all eight paper pages alongside an independently scrolling summary. It includes zoom, a text transcript, and the original submission PDF in `documents/DDEINT-Research-Submission.pdf`. The homepage loads page previews from `documents/ddeint/` when the reader opens. The downloadable `portfolio.html` and the local output HTML embed the paper and previews for offline use.
