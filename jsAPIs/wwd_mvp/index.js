const getInfo = () => {
    fetch('https://api.myjson.com/bins/115ax3')
        .then(response => response.json())
        .then((data) => {
            let result = `<h2>Drivers</h2>`;
            let drivers = data.users.filter(user => user.type === 'driver')
            drivers.map(driver => {
                const { firstName, lastName } = driver;
                result +=
                    `<div style="display: flex; background-color: #ccc; margin: 1rem auto;">
                        <div style="flex: 1; border-radius: 50%; background-color: orange; margin: 0 auto;"></div>
                        <ul style="background-color: teal; flex: 3;margin: 0;" >
                            <li style="list-item-style: none; font-size: 1.5em;"> ${firstName}, ${lastName}</li>
                        </ul>
                    </div>`;
                document.getElementById('result').innerHTML = result;
            });
        });
} 
