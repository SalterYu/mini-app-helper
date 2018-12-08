const pageFileContentMaps = {
  'wxss': '',
  'wxml': '',
  'ts': `import { JPage } from 'jgb-weapp'
class PageHome {
  data = {
  };
  onLoad() {
  }
}
JPage(new PageHome());
`,
  'json': `{
    "navigationBarTitleText": "管理联系人"
}`
}

const componentFileContentMaps = {
  'ts': `import {JComponent} from 'jgb-weapp';
import {fly} from "@modules/index";
const app = getApp();
interface ComponentHome extends JComponent {
}
class ComponentHome {
  properties = {
  }
  data = {
  }
  attached () {}
  
}
JComponent(new ComponentHome());
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