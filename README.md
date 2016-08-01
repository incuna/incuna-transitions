# Incuna Transitions Library

This library contains a series of sass mixins that can be used to add transitions and animations to your sites.

It is largely based on Hover.css from [Ian Lunn](https://github.com/IanLunn/Hover). We simplified the library a bit and converted to support sass files only. All of these files can be found in the [hover](https://github.com/incuna/incuna-transitions/tree/master/hover) folder along with the original `README.md` and license for the Hover.css library.

The remainder of the incuna-transitions library will contain sass mixins to provide a greater variety of functional animations and transitions. This portion of the library is a work in progress and will grow with time.

# Requirements

* [Bourbon](http://bourbon.io/)

The non-hover portions of this library (anything not contained within `/hover`) use mixins from the Bourbon sass library. Without this library installed on your project these mixins will not work.

As of the writing of this the latest release of Bourbon is 4.2.6, this library should work with any version of bourbon and we will make every effort to fix any breaking changes cause by new releases. If you encounter problems with a specific release of bourbon in combination with this library please let us know.

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


# Working on the project

This project uses `grunt` to compile sass and templates. 

To set up the project locally:
* Run `npm install`
* Run `bower install`
* Run `grunt`
* Open `index.html` in your browser

**IMPORTANT:** Do not work directly on `incuna-transitions/index.html` this is a compiled file and your changes will be overwritten. Instead you should be working on `incuna-transitions/index.html.template`

This project also supports inline svg icons using `SVGstore`, to add new icons save the svg files with `presentation attributes` and put them in `images/icons`. `Grunt` needs to be run to compile the new svg map before the icon can be used.

## Github page

There is a github page set up for this repo here: http://incuna.github.io/incuna-transitions/

To update the github page make sure all the required changes have been merged into master, then merge master into the `gh-pages` branch.

**Do not** work directly on the `gh-pages` branch.
