import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: any = [];
  currencyForm: FormGroup;
  currencyName = ['THB bat (Tajlandia)', 'USD dolar amerykański', 'AUD dolar australijski',
    'HKD dolar Hongkongu', 'CAD dolar kanadyjski', 'NZD dolar nowozelandzki', 'SGD dolar singapurski',
    'EUR euro', 'HUF forint (Węgry)', 'CHF frank szwajcarski', 'GBP funt szterling', 'UAH hrywna (Ukraina)',
    'JPY jen (Japonia)', 'RUB rubel rosyjski'];
  currentCurrency = 'THB';
  currencyValue: number;
  quantity: number;
  result = '';

  constructor(
    private _http: HttpService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.currencyForm = this.formBuilder.group({
      currencyControl: ['THB bat (Tajlandia)']
    });
    
    this.getCurrencyRates();
  }

  getCurrencyRates(){
    this._http.getCurrency(this.currentCurrency).subscribe(data => {
      this.currencies = Object.values(data);
      console.log(data);
      this.currencyValue = data["rates"][0]["mid"];
      //console.log(this.currencies);
    });
  }

  selectOptionChange(eventValue){
    this.currentCurrency = eventValue;
    this.currentCurrency = this.currentCurrency.substring(0,3);
    this.getCurrencyRates();
  }

  convertCurrency(){
    if(this.quantity>=0){
      this.result = (this.quantity * this.currencyValue).toFixed(2);
    }
    
  }

}
