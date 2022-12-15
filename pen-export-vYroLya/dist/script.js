import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

marked.setOptions({
  break: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target='_blank' href='${href}'>${text}</a> `;};

const defaultContent = `
![Logo](https://static.vecteezy.com/system/resources/thumbnails/005/538/683/small/code-or-coding-programmer-abstract-logo-illustration-design-vector.jpg)

# Hello! 
## Welcome
### To my Proyect!


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit my Linkedin page!](https://www.linkedin.com/in/guillermo-phelan/)

> Block Quot

1. First list item
2. Second list item
`;


const Editor = ({ content, handleTextAreaChange }) => {
  return /*#__PURE__*/(
    React.createElement("textarea", { id: "editor", value: content, onChange: handleTextAreaChange }));
};


const Previewer = ({ content }) => /*#__PURE__*/React.createElement("div", { id: "preview", dangerouslySetInnerHTML: {
    __html: marked.parse(content, { renderer: renderer }) } });


const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextAreaChange = event => {
    setContent(event.target.value);};

  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextAreaChange: handleTextAreaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content }), ">"));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));