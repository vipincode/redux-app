import { combineReducers } from "redux";

// Reducers for static song list
export const songReducers = () => {
  return [
    {
      title: 'Pehla Nasha',
      duration: '4:30'
    },
    {
      title: 'Mera Dil Bhi Kitna Pagal Hai',
      duration: '2:30'
    },
    {
      title: 'Chand Chupa Badal Mein',
      duration: '4:05'
    },
    {
      title: 'Chura Ke Dil Mera',
      duration: '2:30'
    },
    {
      title: 'Aisi Deewangi',
      duration: '2:30'
    }
  ];
};

// Reducres to slecting specfic song

const selectedSongReducer = (slectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return slectedSong
}

export default combineReducers({
  song: songReducers,
  slectedSong: selectedSongReducer
})