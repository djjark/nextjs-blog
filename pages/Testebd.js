
export default function test() {
    async function test1(enteredMeetupData) {
        const response = await fetch('database/database', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
        return data
    }

    return (
        <div>
            test
        </div>
    )
}