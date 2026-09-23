# paolobarucca.com — GitHub Pages version

## Put it online (10 minutes, all in the browser)

1. On GitHub, create a **public** repository named `YOURUSERNAME.github.io`.
2. Click **Add file → Upload files** and drag in everything in this folder.
3. Also upload your photos from the current site, named exactly:
   - `photo.jpg` (your portrait — the headphones photo from your Linktree works well)
   - `kentaro.jpeg`, `marcelina.jpeg` (team photos)
   (Pages hide missing images automatically, so the site works without them.)
4. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
5. After a minute or two the site is live at `https://YOURUSERNAME.github.io`.

## Contact form

1. Sign up free at formspree.io and create a form.
2. In `contact.html`, replace `YOUR_FORM_ID` with the ID they give you.

## Keep your domain (paolobarucca.com)

Once you're happy with the GitHub version:

1. **Settings → Pages → Custom domain**: type `paolobarucca.com` and save.
2. Wherever your domain's DNS is managed (WordPress.com if you bought it there),
   replace the existing records with:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `YOURUSERNAME.github.io`
3. Wait for DNS to update (minutes to a few hours), then tick **Enforce HTTPS**.

## Editing later

Click any `.html` file on GitHub → pencil icon → edit the text → **Commit changes**.
The site updates within a minute.
