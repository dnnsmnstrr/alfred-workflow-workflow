# [Alfy](https://github.com/sindresorhus/alfy)

Alfy is a great framework that allows building Alfred workflows in Node.js

## [alfy.js](../src/alfy.js)
This file is run from a script filter in my workflow and provides quick access to useful alfy snippets:
- items
- [handler](../src/handler.js)
- [index](../index.js)

## [helper functions](../src/helper.js)

- capitalize

- splitInput
  - separate alfy inputs into an array
  - splitter character can be optionally defined, default is ' ' ( <kbd>Space</kbd> )
```js
const [command, query, ...rest] = splitInput()
// alfy input 'foo bar' would give you
command === 'foo'
query === 'bar'

const commaSeparated = splitInput(',') // split a comma separated list
// alfy input 'red,green,blue' would result in
commaSeparated = ['red', 'green', 'blue']
```

- enrichOptions
  - adds information that can be inferred to item
  - overridden by existing properties or optional properties in second parameter
```js
  options = [
    arg: 'test' // title can be generated from arg (will be capitalized)
  ]
  enrichOptions(options, {subtitle: 'a test option'}) // subtitle will be added to items without existing subtitle

  // output
  {
    title: 'Test',
    uid: 'Test',
    arg: 'test',
    subtitle: 'a test option'
  }
```

## assets

I have included a [sketch](../assets/Alfred.sketch) file with some of the icons and templates that were used in other workflows I made.

[icons.json](../assets/icons.json) includes a list of icons that are included in macOS and are available under `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/` or using alfy.icon.get(icon), which I have wrapped in my getIcon() helper function, so it can be passed directly into the alfy item like this:
```js
{
    title: '',
    subtitle: '',
    arg: ''
    icon: getIcon()
    // icon: {
    //   path: alfy.icon.get('ARDocument')
    // },
  }

```
