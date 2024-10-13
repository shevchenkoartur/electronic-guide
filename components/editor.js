import "codemirror/lib/codemirror.css";
import "codemirror/theme/tomorrow-night-bright.css";
import {Controlled as ControlledEditor} from 'react-codemirror2'

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

const Editor = (props) => {
  const { editorTitle, value, onChange, className } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return(
    <div className={className}>
      <div>
        {editorTitle}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          theme: "tomorrow-night-bright",
          lineNumbers: true,
        }}
      />
    </div>
  )
}

export default Editor;
