import axios from 'axios';

const fetchProfileSuccess = (data) => ({
  type: 'FETCH_PROFILE',
  data: {
    image: data.avatar_url,
    name: data.name,
  },
})

const fetchProfileError = (data) => ({
  type: 'FETCH_PROFILE',
  data,
})

export default (urlGithub) => async (dispatch, getState) => {
  const response = await axios.get(urlGithub)

  console.log('---- getState ----', getState().profile);

  if (response.status === 200) {
    return dispatch(fetchProfileSuccess(response.data))
  } else {
    return dispatch(fetchProfileError('Error.....'))
  }
}