class WorldClock {
    constructor(countries) {
        this.countries = countries;


        this.countrySelect = document.getElementById('countrySelect');
        this.currentTimeElement = document.getElementById('currentTime');
        this.currentTimeElement.style.display = 'none';
        this.intervalId = null; // Добавляем переменную для хранения идентификатора интервала


        this.populateCountrySelect();
        this.setupEventListeners();
    }

    populateCountrySelect() {
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            const option = document.createElement('option');
            option.value = country.timezone;
            option.textContent = country.name;
            option.classList.add('countryName');
            this.countrySelect.appendChild(option);
        }
    }

    setupEventListeners() {
        this.countrySelect.addEventListener('change', () => this.updateTime());
    }

    updateTime() {
        const selectedTimezone = this.countrySelect.value;
        const selectedCountry = this.countries.find(country => country.timezone === selectedTimezone);


        // Очищаем содержимое div и добавляем новую информацию
        this.currentTimeElement.innerHTML = '';
        if (selectedCountry) {

            const updateClock = () => {
                // Останавливаем предыдущий интервал, если он существует
                if (this.intervalId !== null) {
                    clearInterval(this.intervalId);
                }

                const currentTime = new Date().toLocaleString('en-US', { timeZone: selectedCountry.timezone });

                // Устанавливаем новый интервал и сохраняем его идентификатор
                this.intervalId = setInterval(updateClock, 1000);

                // Добавляем новую информацию в текущий элемент
                this.currentTimeElement.innerHTML = `Current Time in ${selectedCountry.name} : <br>${currentTime}`;

                if (this.currentTimeElement.style.display === 'none') {
                    this.currentTimeElement.style.display = 'block'; // Показываем #currentTime при первом вызове
                }

            };
            updateClock();
        }
    }
}

export { WorldClock }