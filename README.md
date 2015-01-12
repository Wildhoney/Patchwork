# Patchwork

![Travis](http://img.shields.io/travis/Wildhoney/Patchwork.svg?style=flat)
&nbsp;
![npm](http://img.shields.io/npm/v/patchwork-app.svg?style=flat)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat)
&nbsp;
![Experimental](http://img.shields.io/badge/%20!%20%20-experimental-blue.svg?style=flat)

* **Bower:** `bower install patchwork-app`

# Getting Started

Patchwork uses [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) to create a convenient CSS framework that leverages the `order` property with a responsive approach.

You may well have been asked to re-order elements for different viewports &ndash; and this is where Flexbox &mdash; and of course Patchwork &mdash; excel!

As an example, consider the following markup which positions two elements adjacent to one another with equal widths:

```html
<section class="patchwork">

    <section class="column first" data-patchwork="large-size: 1">
        First
    </section>

    <section class="column second" data-patchwork="large-size: 1">
        Second
    </section>

</section>
```

When viewing on a tablet you may well be asked to place the second `section` above the first `section`; in days gone by this would have required a little JavaScript, but with Flexbox &mdash; and Patchwork &mdash; you can simply apply the following:

```html

<section class="patchwork">

    <section class="column first" data-patchwork="large-size: 1">
        First
    </section>

    <section class="column second" data-patchwork="large-size: 1, medium-order: -1">
        Second
    </section>

</section>
```