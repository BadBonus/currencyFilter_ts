export default class Service {

    _apiBase:string = 'http://www.nbrb.by/API/ExRates/';
    _nowDate: Date = new Date();
    _transformedNowDate: string = `${this._nowDate.getFullYear()}-${this._nowDate.getMonth()}-${this._nowDate.getDate()}`;
    _transformedDefaultStartDate: string = `${this._nowDate.getFullYear()-3}-${this._nowDate.getMonth()}-${this._nowDate.getDate()}`;
    _apiAdd= 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/145?startDate=2016-6-1&endDate=2019-5-28';

    async getResource(url:string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getCurrenciesLatest(){
        const currencies = await this.getResource('Rates?Periodicity=0');
        return currencies.map(Service._transformCurrency).sort((a:any,b:any)=>{
            return a.value - b.value
        });
    }

    //можно брать с сервера за раз только 365 дней, обдумай как правильно взять данные
    async getCurrencyHistory(id_cur:any, startDate=this._transformedDefaultStartDate, lastDate=this._transformedNowDate)
    {
        const period = await this.getResource(`Rates/Dynamics/${id_cur}?startDate=${startDate}&endDate=${lastDate}`);
        console.log(period);
    }

    static _transformCurrency(val:any)
    {
        return(
            {
                id:val.Cur_ID,
                name:val.Cur_Name,
                abbr:val.Cur_Abbreviation,
                value: val.Cur_OfficialRate,
                scale: val.Cur_Scale
            }
        );
    }
}