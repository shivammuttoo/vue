import JobDescription from '../components/JobDescription.vue'
import { render, screen } from '@testing-library/vue';

test('increments value on click', async () => {
    render(JobDescription, {propsData:{
        selectedUserData: [
            {
                "id": 6,
                "classification": {
                    "id": 2,
                    "name": "Electricians"
                },
                "location": {
                    "id": 1,
                    "name": "Brooklyn, NYC"
                },
                "headline": "Wire in a new thermostat",
                "description": "I have purchased a new smart thermostat and it needs wiring in.",
                "date_added": "2023-11-08T16:38:15.984Z",
                "date": "Wed Nov 08 2023"
            }
        ]
    }})
    expect(screen.getByTestId('headline').textContent).toBe("Job: Wire in a new thermostat")
    expect(screen.getByTestId('description').textContent).toBe("Description: I have purchased a new smart thermostat and it needs wiring in.")
    expect(screen.getByTestId('date').textContent).toBe("Published date: Wed Nov 08 2023")
    expect(screen.getByTestId('classification').textContent).toBe("Classification: Electricians")
    expect(screen.getByTestId('location').textContent).toBe("Location: Brooklyn, NYC")
    
});