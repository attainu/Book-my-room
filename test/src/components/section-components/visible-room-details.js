import { connect } from 'react-redux'
import RoomDetails from './room-details'
import { viewRoomDetails } from './../../actions';

const mapStateToProps = (state) => {
	console.log("visible room details: mapStateToProps")
	console.log(state)
	return ({
		data: state.dataFromApi
  	})
}

const mapDispatchToProps = dispatch => {
	return {
	  onRoomDetails: id => {
		dispatch(viewRoomDetails(id))
	  }
	}
  }

export default connect(mapStateToProps,
	mapDispatchToProps)
	(RoomDetails)