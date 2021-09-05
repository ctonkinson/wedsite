import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Message } from 'element-react';
import 'element-theme-default';

class FileUpload extends React.Component {
	constructor (props){
        super(props)
        this.state = {
            fileList: []
        }
    }
	successUpload(file, fileList) {
		Message({
			showClose: true,
			message: 'Thanks! Your image will be added once it has been approved.',
			duration: 5000
		});
		this.setState({
			fileList: []
		})
	}
	handleRemove(file, fileList) {
  		console.log(file, fileList);
	}
	render() {
		const site = this.props.site + '/wp-json/cj/v2/gallery-images/'
		const fileList2 = []
		return <div className="">
				<Upload
					className="upload-demo"
					drag
					action={site}
					onPreview={file => this.handlePreview(file)}
      				onRemove={(file, fileList) => this.handleRemove(file, fileList)}
      				onSuccess={(file, fileList) => this.successUpload(file, fileList)}
      				fileList={this.state.fileList}
      				accept="image/jpeg, image/png"
					multiple
					tip={<div className="el-upload__tip">jpg/png files with a size less than 500kb</div>}
				>
					<i className="el-icon-upload"></i>
					<div className="el-upload__text">Drop file here or<em>click to upload</em></div>
				</Upload>
			</div>
	}
}
export default FileUpload;



