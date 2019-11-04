# Emoji for decoration in text 😃

These days, it's very common to use emoji for decoration in text. This is because emoji are now widely supported; Unicode 6.0, which was released in 2010, added most emoji we use and love today, and is supported by most major operating systems and browsers.

It's not just webpages, it's become a common trend to use emoji for decoration in GitHub `README.md` files. According to [How to write a kickass README](https://dev.to/scottydocs/how-to-write-a-kickass-readme-5af9) by James Scott, "\[emoji] can be a good way to inject a bit colour and humor into your README and makes the project feel a bit more human." Even the READMEs of most of my projects use emoji for decoration.

However, this comes at an accessibility cost.

For example, the heading "🌟 Features" would be read by a screen reader as "Glowing Star Features". This is not what we want, because it may change the meaning of the text. Another example is the "💝 Sponsors" heading of [Staart Site](https://github.com/staart/site), the static site generator this website uses, being read aloud as "Heart with Ribbon Sponsors".

In the article [How Do People with Vision Impairments Use Emoji](https://www.perkinselearning.org/technology/blog/how-do-people-vision-impairments-use-emoji), author Veronica Lewis points out:

> In a more frustrating example, if my friend sends me five cake emojis, the screen reader will read "cake cake cake cake cake." This also applies for Twitter usernames, so if someone has a bunch of emoji in their name, the screen reader will read all of it.

The solution is to think of emoji as what they are -- **decorative images**. According to the [W3C tutorial on decorative images](https://www.w3.org/WAI/tutorials/images/decorative/), decorative images are those that "don't add information to the content of a page":

> Text values for these types of images would add audible clutter to screen reader output or could distract users if the topic is different from that in adjacent text.

Since emoji are actually text, we cannot use the `alt=""` attribute so they can be ignored by assistive technologies, we need to use `aria-hidden` instead. For example, look at the following paragraph:

```html
<p>Hello, world! 🌍</p>
```

The above paragraph should become:

```html
<p>Hello, world! <span aria-hidden="true">🌍</span></p>
```

Now, the emoji is still visible to sighted users, but assistive technology will ignore it. A regular expression can be used to find all emoji and replace them with a `<span>` with the `aria-hidden` attribute. Luckily, in the article [Emojis in JavaScript](https://medium.com/reactnative/emojis-in-javascript-f693d0eb79fb), Kevin Scott wrote an emoji-parsing regex based on Lodash.

In the following example, we find all the headings, links, and paragraphs, and add the `<span>` to their content:

```js
document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a").forEach(element => {
  element.innerHTML = element.innerHTML.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, `<span aria-hidden="true">$&</span>`);
});
```

Try the following [JSFiddle example](https://jsfiddle.net/anandchowdhary/8sjeoyn2/19/) with a screen reader to see this code in action.

<iframe width="100%" height="300" src="https://jsfiddle.net/anandchowdhary/14tug0qm/1/embedded/result,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Notes

- It's important to remember that emoji do sometimes add additional information and context. For example, in the message "I am 🏊," the emoji should remain (it will be read out as "I am Person Swimming") though in the message "I am swimming 🏊", it should be removed. Make sure you don't remove required information.
