# Passio Navigator Manual

Published at **https://passio.github.io/navigator-manual/**

## This repository is generated — do not edit it

Every file here is produced by `manual/build.js` in the private
[`Passio/passio`](https://github.com/Passio/passio) repository and force-written
on each merge to `master`. Edits made directly to this repo will be overwritten
without warning.

To change the manual, edit the corresponding help file in `Passio/passio`. That
same file is what the **?** button in Passio Navigator shows, so a correction
here fixes the in-app help at the same time — there is only ever one copy.

| To change | Edit in `Passio/passio` |
| --- | --- |
| Page content | the help file itself, e.g. `tdb/type/user/stop/README.md` |
| Page title, section, or ordering | `manual/nav.js` |
| Which pages are published | `manual/nav.js` |
| Theme, landing page, search UI | `manual/site/` |
| Build and publish logic | `manual/build.js`, `manual/embed.js` |

## Reporting a problem

Open an issue here. Issues are welcome even though pull requests cannot be
accepted, since the content lives elsewhere.

## Search

The **Ask** button runs natural-language search entirely in your browser. The
query is embedded locally with a small model downloaded once and cached; nothing
you type is sent to a server.
