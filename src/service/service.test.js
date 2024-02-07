import Service from './service';
import axios from 'axios';

// Mocking Axios to control its behavior in the test
jest.mock('axios');

describe('getUserList', () => {
    it('fetches successfully data from get userlist API', async () => {
        let service = new Service();
        const mockResponse = {
            data: [
                {
                    "id": 1,
                    "username": "mario.bros",
                    "display_name": "Mario Bros.",
                    "classifications": [
                        1
                    ],
                    "locations_served": [
                        1
                    ]
                },
                {
                    "id": 2,
                    "username": "fix.it.felix.jr",
                    "display_name": "Fix-It Felix Jr.",
                    "classifications": [
                        1,
                        2,
                        3
                    ],
                    "locations_served": [
                        1,
                        2
                    ]
                },]
        };
        // Mock the Axios get method to resolve with the mockResponse
        axios.get.mockResolvedValue(mockResponse);

        // Call the method
        const userList = await service.getUserList();

        // Check if the Axios get method was called with the correct URL
        expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/businesses/users');

        // Check if the method returns the expected data
        expect(userList.data).toEqual(mockResponse.data);
    });

});
