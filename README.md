# Rosemarie Ostler

## Notes

This project is developed using webpack in a non-standard way. Rather than dynamically generating HTML, the HTML pages are hand coded. Styles and JavaScript are added with tags in an _old school_ way. This is done with some specific client requirements in mind.

## Technologies

- Styles
  - PostCSS `npm i -g postcss`
    - Autoprefixer `npm i -g node-sas`
    - stylelint `npm i -D stylelint`
    - stylelint-config-recommended `npm i -D stylelint-config-recommended`
      - This is the recommended set of style rules set by the folks at stylelint. This project uses Sass, and, therefore, overrides the following rules in addition to those defined in the recommended rules. This is found in `.stylintrc.json`.
      - ```json
          "rules": {
            "at-rule-no-unknown": [
                true,
                {
                  "ignoreAtRules": [
                    "each",
                    "for",
                    "function",
                    "if",
                    "include",
                    "mixin"
                  ]
                }
            ]
          }
        ```
  * Node Sass `npm i -g node-sass`
    - Bourbon `npm i -D bouron`
    * Bourbon Neat 2.1 `npm i -D bourbon-neat`

* Build Tools

  - webpack `npm i -g webpack`

  * webpack-cli `npm i -D webpack-cli`
    - webpack loaders
      - css-loader `npm i -D css-loader`
      * postcss-loader `npm i -D postcss-loader`
      * sass-loader `npm i -D sass-loader`
      * style-loader `npm i -D style-loader`
    - webpack plugins
      - mini-css-extract-plugin `npm i -D mini-css-extract-plugin`
        - Plugin extracts CSS to a file for production builds
        * stylelint-webpack-plugin `npm i -D stylelint-webpack-plugin`
          - Plugin to handle CSS/Sass linting

* TypeScript `npm i -g typescript`

## Installation notes

Ensure that Neat is at the correct version. It was completely rewritten as of version 2.0. This project relies on Neat 2.0 or greater.
