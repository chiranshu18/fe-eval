// import makeRequest from "..";
// import { BACKEND_URL, GET_ALL_EVENTS, UPDATE_EVENT_BOOKMARK} from '../../../constants/apiEndPoints';
// import axios from 'axios';
// import mockBlogPostData from '../../../mocks/mockBlogPostData';

// jest.mock("axios");

// describe('makeRequest', () => {
//     it('should make api call with appropriate request options and return response body when only api endpoint is specified', async () => {
//         const mockedAxios = axios;
//         mockedAxios.mockResolvedValue({ data: mockBlogPostData });
//         expect(mockedAxios).not.toBeCalled();
//         const response = await makeRequest(GET_ALL_EVENTS);
//         expect(mockedAxios).toHaveBeenCalledTimes(1);
//         expect(mockedAxios).toHaveBeenCalledWith({
//             baseURL: BACKEND_URL,
//             url: "api/events",
//             method: 'get',
//         })
//         expect(response).toEqual(mockBlogPostData);
//     });
// })