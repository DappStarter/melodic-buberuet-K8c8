const BufferLayout = require('buffer-layout');

module.exports = class DataLayouts {

    static get() {
        let dataLayouts = [];

 /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: HELLO DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
  dataLayouts.push({
      name: 'greeting',
      layout: BufferLayout.struct([BufferLayout.u32('numGreets')])
    }
  );

 /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: HELLO DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
  dataLayouts.push({
      name: 'counter',
      layout: BufferLayout.struct([BufferLayout.u32('sampleCounter')])
    }
  );


        return dataLayouts;
    }
}