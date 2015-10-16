# Incuna Transitions Library

This library contains a series of sass mixins that can be used to add transitions and animations to your sites.

It is largely based on Hover.css from [Ian Lunn](https://github.com/IanLunn/Hover). We simplified the library a bit and converted to support sass files only. All of these files can be found in the [hover](https://github.com/incuna/incuna-transitions/tree/master/hover) folder along with the original `README.md` and license for the Hover.css library.

The remainder of the incuna-transitions library will contain sass mixins to provide a greater variety of functional animations and transitions. This portion of the library is a work in progress and will grow with time.

# Guidelines for Effects
##### The following is a slightly modified version of the [Hover.css](https://github.com/IanLunn/Hover) `CONTRIBUTING.md` file and provides some useful advice for adding to / editing the library.

1. Effects should work with only one HTML element. This way, developers only need add a class to their element for your fancy effect to work on their page. CSS pseudo-elements are perfectly acceptable as they don't require additional changes to HTML. Please use the more up-to-date two colons for pseudo elements (::before and ::after).

2. Aim to provide subtle effects that enhance user experience.

3. Our version of Hover.css is only available in .sass format, so please use this format only when submitting files.

4. Try not to use transitions and animations together on the same effect, [we've found this is buggy in Webkit/Blink browsers](https://github.com/IanLunn/Hover/issues/24).

5. Consider submitting an effect that is paired with an opposite, for example: `Bounce In`/`Bounce Out`, `Float`/`Sink`, `Icon Back`/`Icon Forward`.

## Browser Testing Effects

The Hover.css project attempts to deliver effects that work in the latest versions of modern browsers (Firefox, Chrome, Safari, Opera, Internet Explorer 10+), as well as providing simple CSS fixes for older browsers where possible (a fallback color when `rgba()` is used for example).

Fallbacks for older browsers are the responsibility of the developer adding Hover.css to their page, as described in the README's [Browser Support section](https://github.com/IanLunn/Hover#browser-support).

Please be certain any effects you submit at least work in the latest versions of modern browsers, and advise us accordingly if that is not the case.

# To Do List

The following is a list of ideas we have in mind for developing incuna-transitions:
1. Remove all trace of icon-fonts. If you would like to learn more about why icon-fonts are bad you can watch [this video](https://www.youtube.com/watch?v=9xXBYcWgCHA) by our excellent contributor @ninjanails.
2. Add the option to introduce arguments to mixins to make them more customisable
3. Create some really great page transitions, specifically for expanding and contracting page elements and other effects that will pair nicely with Angular JS's show/hide functionality.
4. And more...
