module.exports = {
    ecmaFeatures: {
        'jsx': true
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-unreferenced-globals': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,

         // Enforce component methods order
         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
         'react/sort-comp': [2, {
             'order': [
                 'static-methods',
                 'lifecycle',
                 'handlers',
                 'everything-else',
                 'rendering',
             ],
             'groups': {
                 'rendering': [
                     '/^render.+$/',
                     'render'
                 ],
                 'handlers': [
                     '/^handle.+$/',
                 ]
             }
         }],
    }
};
