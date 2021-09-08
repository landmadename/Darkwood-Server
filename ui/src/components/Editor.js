import React, {Component} from "react";
import RichTextEditor from "react-rte";

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: RichTextEditor.createValueFromString(this.props.initData, 'html')
        }
        this.props.setContent(RichTextEditor.createValueFromString(this.props.initData, 'html').toString('html'))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.initData !== prevProps.initData){
            this.setState({
                value: RichTextEditor.createValueFromString(this.props.initData, 'html')
            })
            this.props.setContent(RichTextEditor.createValueFromString(this.props.initData, 'html').toString('html'))
        }
    }

    onChange = (value) => {
        this.setState({value});
        if (this.props.onChange) {
            this.props.onChange(
                value.toString('html')
            );
        }
        this.props.setContent(value.toString('html'))
    };

    render () {
        const toolbarConfig = {
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                {label: 'Bold', style: 'BOLD', className: 'editorButton'},
                {label: 'Italic', style: 'ITALIC', className: 'editorButton'},
                {label: 'Underline', style: 'UNDERLINE', className: 'editorButton'}
            ],
            BLOCK_TYPE_BUTTONS: [
                {label: 'UL', style: 'unordered-list-item', className: 'editorButton'},
                {label: 'OL', style: 'ordered-list-item', className: 'editorButton'}
            ]
        };

        return (
            <RichTextEditor
                value={this.state.value}
                onChange={this.onChange}
                toolbarConfig={toolbarConfig}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default Editor;