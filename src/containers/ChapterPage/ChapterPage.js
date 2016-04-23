import React, { Component } from 'react';
import { connect } from 'react-redux';

import LinearProgress from 'material-ui/LinearProgress';
import { loadChapter } from '../../reducers/chapters/actionCreators';
import { ChapterDescription } from '../../components/ChapterDescription/ChapterDescription';

class ChapterPage extends Component {

  componentWillMount = () => {
    const { chapter, loadChapter } = this.props;
    if (chapter === null) {
      loadChapter();
    }
  };

  renderLoading = () => (
    <LinearProgress mode="indeterminate"/>
  );

  renderChapter = () => (
    <div>
      <ChapterDescription chapter={chapter} />
      <hr />
      {chapter.videos.length > 0 && chapter.videos.map((video, key) => <VideoView key={key} video={video} />)}
      {chapter.videos.length === 0 && <EmptyChapterView chapter={chapter} />}
    </div>
  );

  render() {
    switch (this.props.status) {
      case 'LOADING':
        return this.renderLoading();
      case 'LOADED':
        return this.renderChapter();
      default:
        return this.renderError();
    }
  }

}


const mapStateToProps = (state) => ({
  status: state.chapters.status,
  chapter: state.chapters.chapter
});
const mapDispatchToProps = (dispatch, props) => ({
  loadChapter: () => dispatch(loadChapter(props.params.chapterId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);
