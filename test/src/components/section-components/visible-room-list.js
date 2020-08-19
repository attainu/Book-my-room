import { connect } from 'react-redux'
import RoomList from './room-list'
import { upadateFetchedDataFromApi } from "../../actions";

const mapStateToProps = (state) => {
	console.log("visible room list: mapStateToProps")
	console.log(state.dataFromApi)
	return ({
		data: state.dataFromApi
  	})
}

export default connect(mapStateToProps)(RoomList)