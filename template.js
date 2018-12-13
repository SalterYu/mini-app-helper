const pageFileContentMaps = {
  'wxss': '',
  'wxml': '',
  'ts': `import { JPage } from 'jgb-weapp'
class PageHome {
  data = {
  };
  onLoad() {
  }
  onShow(){
  }
}
JPage(new PageHome());
`,
  'json': `{
    "navigationBarTitleText": ""
}`
}

const componentFileContentMaps = {
  'ts': `import {JComponent} from 'jgb-weapp';
import {fly} from "@modules/index";
const app = getApp();
JComponent({
  properties: {
  },
  data: {
  },
  attached () {},
  methods: {
  
  }
});
`,
  'wxss': '',
  'wxml': '',
  'json': `{
  "component": true
}
`
}

module.exports = {
  pageFileContentMaps,
  componentFileContentMaps
}