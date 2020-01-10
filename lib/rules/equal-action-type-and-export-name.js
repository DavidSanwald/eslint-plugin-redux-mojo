/**
 * @fileoverview saves the day
 * @author David
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
          description: 'Make sure action types have same name as value',
          category: 'Best Practices',
          recommended: true,
        },
      },
      create(context) {
        const fileName = context.getFilename()
        
        return {
          'Identifier': function(node) {
            
            if (node.name === node.name.toUpperCase()&&node.parent.init.value!==node.name&& fileName.includes('actions')) {
              context.report({
                node,
                message: 'Please use same name for constant name and value',
              })
            }
          },
        }
      },
    }