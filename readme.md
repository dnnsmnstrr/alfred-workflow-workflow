# alfred-workflow [![Build Status](https://travis-ci.org/dnnsmnstrr/alfred-workflow.svg?branch=master)](https://travis-ci.org/dnnsmnstrr/alfred-workflow)

> An alfred workflow to help making workflows with alfy

![yo dawg](https://api.memegen.link/images/yodawg/yo_dawg,_I_heard_you_like_workflows/so_I_made_a_workflow_to_make_workflows)

## Install

```
$ npm install --global alfred-workflow
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage

In Alfred, type `wf` and enter your query.

## Bonus Features

### [icns](./src/icns.js)
- Get system icons for your workflows from `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/`
- Can be pasted as path or alfy [icon](https://github.com/sindresorhus/alfy#icon) object
```
icon: {
  path: alfy.icon.get('${element}')
}
```

### Icons
- Generate png icons from installed apps or apps from the app store.

- Download favicons from websites
## License

MIT © [Dennis Muensterer](https://muensterer.xyz)
