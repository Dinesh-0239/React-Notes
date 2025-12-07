import  React  from 'react'
import { createRoot } from 'react-dom/client'

const linkEle1 = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
);

const linkEle2 = React.createElement(
  'a',
  {href:'https://youtube.com',target:'_blank'},
  'Visit Youtube',
);

createRoot(document.getElementById('root')).render(
  <>
  {linkEle1} {/* evaluated-expression(final value) */}
  <br />
  {linkEle2}
  </>
)

