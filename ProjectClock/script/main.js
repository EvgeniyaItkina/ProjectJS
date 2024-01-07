import { WorldClock } from "./script.js";

const countries = [
    { name: '', timezone: '' },
    { name: 'Russia. Capital - Moscow', timezone: 'Europe/Moscow' },
    { name: 'Canada. Capital - Ottawa', timezone: 'America/Toronto' },
    { name: 'United States. Capital - Washington, D.C.', timezone: 'America/New_York' },
    { name: 'China. Capital - Beijing', timezone: 'Asia/Shanghai' },
    { name: 'Brazil. Capital - Brasília', timezone: 'America/Sao_Paulo' },
    { name: 'Australia. Capital - Canberra', timezone: 'Australia/Sydney' },
    { name: 'India. Capital - New Delhi', timezone: 'Asia/Kolkata' },
    { name: 'Argentina. Capital - Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
    { name: 'Kazakhstan. Capital - Nur-Sultan', timezone: 'Asia/Almaty' },
    { name: 'Algeria. Capital - Algiers', timezone: 'Africa/Algiers' },
    { name: 'Congo. Capital - Kinshasa', timezone: 'Africa/Kinshasa' },
    { name: 'Greenland. Capital - Nuuk', timezone: 'America/Godthab' },
    { name: 'Saudi Arabia. Capital - Riyadh', timezone: 'Asia/Riyadh' },
    { name: 'Mexico. Capital - Mexico City', timezone: 'America/Mexico_City' },
    { name: 'Indonesia. Capital - Jakarta', timezone: 'Asia/Jakarta' },
    { name: 'Sudan. Capital - Khartoum', timezone: 'Africa/Khartoum' },
    { name: 'Libya. Capital - Tripoli', timezone: 'Africa/Tripoli' },
    { name: 'Iran. Capital - Tehran', timezone: 'Asia/Tehran' },
    { name: 'Israel. Capital - Jerusalem', timezone: 'Asia/Jerusalem' },
    { name: 'Mongolia. Capital - Ulaanbaatar', timezone: 'Asia/Ulaanbaatar' },
    { name: 'Peru. Capital - Lima', timezone: 'America/Lima' },
    { name: 'Chad. Capital - NDjamena', timezone: 'Africa / Ndjamena' },
    { name: 'Niger. Capital - Niamey', timezone: 'Africa/Niamey' },
    { name: 'Mali. Capital - Bamako', timezone: 'Africa/Bamako' },
    { name: 'Angola. Capital - Luanda', timezone: 'Africa/Luanda' },
    { name: 'South Africa. Capital - Pretoria', timezone: 'Africa/Johannesburg' },
    { name: 'Colombia. Capital - Bogotá', timezone: 'America/Bogota' },
    { name: 'Ethiopia. Capital - Addis Ababa', timezone: 'Africa/Addis_Ababa' },
    { name: 'Bolivia. Capital - La Paz', timezone: 'America/La_Paz' },
    { name: 'Mauritania. Capital - Nouakchott', timezone: 'Africa/Nouakchott' },
    { name: 'Egypt. Capital - Cairo', timezone: 'Africa/Cairo' },
    { name: 'Tanzania. Capital - Dodoma', timezone: 'Africa/Dar_es_Salaam' },
    { name: 'Nigeria. Capital - Abuja', timezone: 'Africa/Lagos' },
    { name: 'Venezuela. Capital - Caracas', timezone: 'America/Caracas' },
    { name: 'Pakistan. Capital - Islamabad', timezone: 'Asia/Karachi' },
    { name: 'Namibia. Capital - Windhoek', timezone: 'Africa/Windhoek' },
    { name: 'Mozambique. Capital - Maputo', timezone: 'Africa/Maputo' },
    { name: 'Turkey. Capital - Ankara', timezone: 'Europe/Istanbul' },
    { name: 'Chile. Capital - Santiago', timezone: 'America/Santiago' },
    { name: 'Zambia. Capital - Lusaka', timezone: 'Africa/Lusaka' },
    { name: 'Myanmar. Capital - Naypyidaw', timezone: 'Asia/Yangon' },
    { name: 'Afghanistan. Capital - Kabul', timezone: 'Asia/Kabul' },
    { name: 'Somalia. Capital - Mogadishu', timezone: 'Africa/Mogadishu' },
    { name: 'Central African Republic. Capital - Bangui', timezone: 'Africa/Bangui' },
    { name: 'Ukraine. Capital - Kiev', timezone: 'Europe/Kiev' },
    { name: 'Botswana. Capital - Gaborone', timezone: 'Africa/Gaborone' },
    { name: 'Madagascar. Capital - Antananarivo', timezone: 'Indian/Antananarivo' },
    { name: 'Kenya. Capital - Nairobi', timezone: 'Africa/Nairobi' },
    { name: 'France. Capital - Paris', timezone: 'Europe/Paris' },
    { name: 'Yemen. Capital - Sanaa', timezone: 'Asia/Aden' },
    { name: 'Thailand. Capital - Bangkok', timezone: 'Asia/Bangkok' }
];

function main() {
    const worldClock = new WorldClock(countries);
    worldClock.populateCountrySelect();
    worldClock.setupEventListeners();
}

main();