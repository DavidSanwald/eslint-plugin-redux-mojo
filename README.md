# eslint-plugin-eslint-redux-special

saves the day

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-redux-special`:

```
$ npm install eslint-plugin-eslint-redux-special --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-redux-special` globally.

## Usage

Add `eslint-redux-special` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-redux-special"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-redux-special/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





