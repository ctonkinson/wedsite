import React from 'react';
import Masonry from 'react-masonry-css'
import FileUpload from './../incs/FileUpload.js';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class Gallery extends React.Component {
	render() {
		let gallery = ''
		let i = 0;
		if(this.props.gallery) {
			gallery = this.props.gallery.map((item, key) => {
				if(item.title === 'blank-upload') {
					return <FileUpload site={this.props.site} key={key} />
				} else {
					return  <ReactFancyBox
								key={key}
					        	thumbnail={item.url}
					        	image={item.url}
					        />
				}
        	});			
		}
		const breakpointColumnsObj = {
			default: 3,
			1100: 3,
			700: 2,
			500: 1
		};
		return <div className="gallery-template">
					<h2 className="underline-circle">Gallery</h2>
						<Masonry
							breakpointCols={breakpointColumnsObj}
							className="my-masonry-grid"
							columnClassName="my-masonry-grid_column"
						>
							{gallery}
						</Masonry>
				</div>
		}
	}

export default Gallery;

