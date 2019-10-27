# Opening external links in new tabs

In the article [Opening External Links: Same Tab or New?](https://www.caktusgroup.com/blog/2017/03/01/opening-external-links-same-tab-or-new/), author Basia Coulter asked 5 users whether they prefer to open external links in a new tab or not, and found a split between users' preferences. In the article [Why External Links Should Open in New Tabs](https://uxmovement.com/navigation/why-external-links-should-open-in-new-tabs/), UX Movement founder Anthony argues that external links should indeed open in new tabs because going back and forth between two sites slows down flow, uses more resources, and might even result in inaccurate traffic analytics.

According to [WCAG 2.0 G201](https://www.w3.org/TR/WCAG20-TECHS/G201.html), if you're going to open a link in a new window, you should warn your users about it:

> Opening new windows automatically when a link is activated can be disorienting for people who have difficulty perceiving visual content, and for some people with cognitive disabilities, if they are not warned in advance.

Providing this information will help users decide whether they want to leave the current window or not, which can be particularly helpful for screen reader users. Users will also understand that the "back" button will not work, and they'll need to return to the previous window to get to this location again.

[WCAG 2.0 H83](https://www.w3.org/TR/WCAG20-TECHS/H83.html) states that information from the `target` attribute can be used by user agents to inform the user that the given link will open in a new tab (and user agents can be configured not to open a new tab), but this indication should be provided in the link text for those not using assistive technology.

For example, if you have the following link:

```html
<a href="help.html" target="_blank">Show Help</a>
```

Using JavaScript, you can write a method that automatically adds this text:

```ts
const newTabLinks = document.querySelectorAll(`a[target="_blank"]`);
newTabLinks.forEach(link => {
  link.innerHTML = `${link.innerHTML} (opens in new window)`;
});
```

This message is added to all links that open in new tabs:

```html
<a href="help.html" target="_blank">Show Help (opens in new window)</a>
```

## Adding attributes via JavaScript

If you haven't added the `[target="_blank"]` attribute, you can programmatically add it to all external links. In the following example, the `isExternal` function is based on a [Stack Overflow answer by Gumbo](https://stackoverflow.com/a/6238456/1656944).

```ts
const isExternal = url => {
  const match = url.match(
    /^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
  );
  if (match.length < 2) return false;
  if (
    typeof match[1] === "string" &&
    match[1].length > 0 &&
    match[1].toLowerCase() !== location.protocol
  )
    return true;
  if (
    typeof match[2] === "string" &&
    match[2].length > 0 &&
    match[2].replace(
      new RegExp(
        ":(" + { "http:": 80, "https:": 443 }[location.protocol] + ")?$"
      ),
      ""
    ) !== location.host
  )
    return true;
  return false;
};
const allLinks = document.querySelectorAll("a");
allLinks.forEach(link => {
  if (isExternal(links.getAttribute("href"))) {
    link.classList.add("external");
    link.innerHTML = `${link.innerHTML} (opens in new window)`;
  }
});
```

## External link icon

Using an icon instead of the required text is not ideal, but might be done for a more minimal UI. If this is the case, alternate text should be provided for the icon.

The following [JSFiddle example](https://jsfiddle.net/anandchowdhary/8sjeoyn2/19/) uses CSS to hide the alternate text from sighted users but makes it available to screen readers.

<iframe width="100%" height="300" src="https://jsfiddle.net/anandchowdhary/8sjeoyn2/19/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Notes

- In modern desktop browsers, links with `[target="_blank"]` open in a new tabs instead of new windows. However, this is not the case in all browsers.
